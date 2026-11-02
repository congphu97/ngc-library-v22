import { Component, Input, ViewEncapsulation, HostBinding, ElementRef } from '@angular/core';

@Component({
	standalone: false,
	selector		: 'ngc-resizable-panel',
	template		: `<ng-content></ng-content>`,
	encapsulation	: ViewEncapsulation.None,
	host			: {
		class: 'ngc-resizable-panel',
	}
})
export class NgcResizablePanelComponent {

	@Input() public defaultSize: number;
	@Input() public minSize: number = 0;
	@Input() public maxSize: number = 100;

	@HostBinding('style.flex-basis.%')
	public size: number;

	@HostBinding('style.flex-grow')
	public flexGrow = '0';

	@HostBinding('style.flex-shrink')
	public flexShrink = '0';

	constructor(public elementRef: ElementRef<HTMLElement>) {}

	public setSize(val: number) {
		this.size = val;
		if (this.elementRef?.nativeElement) {
			this.elementRef.nativeElement.style.flexBasis = `${val}%`;
			this.elementRef.nativeElement.style.flexGrow = '0';
			this.elementRef.nativeElement.style.flexShrink = '0';
		}
	}

	public updateSize(_direction: 'horizontal' | 'vertical') {
		if (this.size !== undefined) {
			this.setSize(this.size);
		}
	}

}
