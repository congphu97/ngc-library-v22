import { 
	Component, Input, ContentChildren, QueryList, AfterContentInit, 
	ElementRef, ViewEncapsulation, NgZone, ChangeDetectorRef, OnDestroy 
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgcResizablePanelComponent } from './ngc-resizable-panel.component';
import { NgcResizableHandleComponent } from './ngc-resizable-handle.component';

@Component({
	standalone: false,
	selector		: 'ngc-resizable-container',
	template		: `<ng-content></ng-content>`,
	styleUrls		: [ './ngc-resize.scss' ],
	encapsulation	: ViewEncapsulation.None,
	host			: {
		class: 'ngc-resizable-container',
		'[class.ngc-resizable-container--horizontal]': 'direction === "horizontal"',
		'[class.ngc-resizable-container--vertical]': 'direction === "vertical"',
	}
})
export class NgcResizableContainerComponent implements AfterContentInit, OnDestroy {

	@Input() public direction: 'horizontal' | 'vertical' = 'horizontal';

	@ContentChildren(NgcResizablePanelComponent) public panels: QueryList<NgcResizablePanelComponent>;
	@ContentChildren(NgcResizableHandleComponent) public handles: QueryList<NgcResizableHandleComponent>;

	private activeDragIndex: number = -1;
	private startMinPos: number = 0;
	private startTotalPx: number = 0;
	private startTotalPct: number = 0;
	private activePrevPanel: NgcResizablePanelComponent | null = null;
	private activeNextPanel: NgcResizablePanelComponent | null = null;

	private rafId: number | null = null;
	private pendingEvent: MouseEvent | TouchEvent | null = null;
	private handleSubs: Subscription[] = [];

	constructor(
		private el: ElementRef<HTMLElement>,
		private ngZone: NgZone,
		private cdr: ChangeDetectorRef
	) {}

	public ngAfterContentInit() {
		this.initializeSizes();
		setTimeout(() => {
			this.initializeSizes();
		});

		this.bindHandleEvents();
		this.handles.changes.subscribe(() => {
			this.bindHandleEvents();
		});
	}

	public ngOnDestroy() {
		this.cleanupHandleSubs();
		if (this.rafId !== null) {
			cancelAnimationFrame(this.rafId);
			this.rafId = null;
		}
	}

	private cleanupHandleSubs() {
		this.handleSubs.forEach(sub => sub.unsubscribe());
		this.handleSubs = [];
	}

	private bindHandleEvents() {
		this.cleanupHandleSubs();
		this.handles.forEach((handle, index) => {
			const sub = handle.dragStart.subscribe((event: MouseEvent | TouchEvent) => {
				this.onDragStart(index, event);
			});
			this.handleSubs.push(sub);
		});
	}

	private initializeSizes() {
		const panelsArray = this.panels.toArray();
		if (panelsArray.length === 0) return;

		let totalExplicitSize = 0;
		let unconfiguredCount = 0;

		panelsArray.forEach(panel => {
			if (panel.defaultSize !== undefined) {
				totalExplicitSize += panel.defaultSize;
			} else {
				unconfiguredCount++;
			}
		});

		const remainingSize = Math.max(0, 100 - totalExplicitSize);
		const defaultDistributedSize = unconfiguredCount > 0 ? remainingSize / unconfiguredCount : 0;

		panelsArray.forEach(panel => {
			if (panel.size === undefined) {
				panel.size = panel.defaultSize !== undefined ? panel.defaultSize : defaultDistributedSize;
			}
			panel.setSize(panel.size);
		});
	}

	private onDragStart(handleIndex: number, event: MouseEvent | TouchEvent) {
		const panelsArray = this.panels.toArray();
		if (panelsArray.length < 2 || handleIndex >= panelsArray.length - 1) return;

		const prevPanel = panelsArray[handleIndex];
		const nextPanel = panelsArray[handleIndex + 1];
		if (!prevPanel || !nextPanel) return;

		this.activeDragIndex = handleIndex;
		this.activePrevPanel = prevPanel;
		this.activeNextPanel = nextPanel;

		const isH = this.direction === 'horizontal';
		const prevRect = prevPanel.elementRef.nativeElement.getBoundingClientRect();
		const nextRect = nextPanel.elementRef.nativeElement.getBoundingClientRect();

		this.startMinPos = isH ? prevRect.left : prevRect.top;
		const maxPos = isH ? nextRect.right : nextRect.bottom;
		this.startTotalPx = maxPos - this.startMinPos;
		this.startTotalPct = (prevPanel.size || 0) + (nextPanel.size || 0);

		if (this.startTotalPx <= 0) return;

		const handle = this.handles.toArray()[handleIndex];
		if (handle) handle.isDragging = true;

		this.el.nativeElement.classList.add('ngc-resizable-container--dragging');
		document.body.style.userSelect = 'none';
		document.body.style.cursor = isH ? 'col-resize' : 'row-resize';

		// Run drag listeners OUTSIDE Angular to avoid Zone.js change detection spam on every mousemove pixel
		this.ngZone.runOutsideAngular(() => {
			const onMove = (e: MouseEvent | TouchEvent) => this.onDragMove(e);
			const onEnd = () => {
				document.removeEventListener('mousemove', onMove);
				document.removeEventListener('mouseup', onEnd);
				document.removeEventListener('touchmove', onMove);
				document.removeEventListener('touchend', onEnd);

				if (this.rafId !== null) {
					cancelAnimationFrame(this.rafId);
					this.rafId = null;
				}

				this.el.nativeElement.classList.remove('ngc-resizable-container--dragging');
				document.body.style.userSelect = '';
				document.body.style.cursor = '';

				if (handle) handle.isDragging = false;
				this.activeDragIndex = -1;
				this.activePrevPanel = null;
				this.activeNextPanel = null;

				// Trigger single change detection update at the end of dragging
				this.ngZone.run(() => {
					this.cdr.markForCheck();
				});
			};

			document.addEventListener('mousemove', onMove, { passive: false });
			document.addEventListener('mouseup', onEnd);
			document.addEventListener('touchmove', onMove, { passive: false });
			document.addEventListener('touchend', onEnd);
		});
	}

	private onDragMove(event: MouseEvent | TouchEvent) {
		if (this.activeDragIndex === -1) return;
		if (event.cancelable) event.preventDefault();

		this.pendingEvent = event;
		if (this.rafId === null) {
			this.rafId = requestAnimationFrame(() => {
				this.rafId = null;
				if (this.pendingEvent) {
					this.updateSizesFromEvent(this.pendingEvent);
				}
			});
		}
	}

	private updateSizesFromEvent(event: MouseEvent | TouchEvent) {
		if (this.activeDragIndex === -1 || !this.activePrevPanel || !this.activeNextPanel) return;
		if (this.startTotalPx <= 0) return;

		const currentPos = this.getPosition(event);
		const offsetPx = currentPos - this.startMinPos;
		let fraction = offsetPx / this.startTotalPx;

		// Clamp fraction between 0 and 1
		fraction = Math.max(0, Math.min(1, fraction));

		let proposedPrevSize = this.startTotalPct * fraction;
		let proposedNextSize = this.startTotalPct - proposedPrevSize;

		// Enforce min/max limits
		const prevMin = this.activePrevPanel.minSize !== undefined ? this.activePrevPanel.minSize : 0;
		const prevMax = this.activePrevPanel.maxSize !== undefined ? this.activePrevPanel.maxSize : 100;
		const nextMin = this.activeNextPanel.minSize !== undefined ? this.activeNextPanel.minSize : 0;
		const nextMax = this.activeNextPanel.maxSize !== undefined ? this.activeNextPanel.maxSize : 100;

		if (proposedPrevSize < prevMin) {
			proposedPrevSize = prevMin;
			proposedNextSize = this.startTotalPct - prevMin;
		} else if (proposedPrevSize > prevMax) {
			proposedPrevSize = prevMax;
			proposedNextSize = this.startTotalPct - prevMax;
		}

		if (proposedNextSize < nextMin) {
			proposedNextSize = nextMin;
			proposedPrevSize = this.startTotalPct - nextMin;
		} else if (proposedNextSize > nextMax) {
			proposedNextSize = nextMax;
			proposedPrevSize = this.startTotalPct - nextMax;
		}

		this.activePrevPanel.setSize(proposedPrevSize);
		this.activeNextPanel.setSize(proposedNextSize);
	}

	private getPosition(event: MouseEvent | TouchEvent): number {
		if ('touches' in event && event.touches && event.touches.length > 0) {
			return this.direction === 'horizontal' ? event.touches[0].clientX : event.touches[0].clientY;
		}
		if ('changedTouches' in event && event.changedTouches && event.changedTouches.length > 0) {
			return this.direction === 'horizontal' ? event.changedTouches[0].clientX : event.changedTouches[0].clientY;
		}
		return this.direction === 'horizontal' ? (event as MouseEvent).clientX : (event as MouseEvent).clientY;
	}

}
