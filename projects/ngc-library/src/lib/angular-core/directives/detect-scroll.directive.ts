import {
	Directive, ElementRef, AfterViewInit,
	EventEmitter, Input, Output,
	HostListener
} from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';

import { DefaultValue, CoerceNumber } from '../decorators';

export interface ScrollEvent {
	scrollingX: boolean;
	scrollingY: boolean;
	scrollingUp: boolean;
	scrollingDown: boolean;
	scrollingLeft: boolean;
	scrollingRight: boolean;
	scrollReachTop: boolean;
	scrollReachBottom: boolean;
	scrollReachLeft: boolean;
	scrollReachRight: boolean;
	scrollTop: number;
	scrollLeft: number;
	scrollWidth: number;
	scrollHeight: number;
	width: number;
	height: number;
}

@Directive({
	standalone: false,  selector: '[detectScroll]', exportAs: 'detectScroll' })
export class DetectScrollDirective implements AfterViewInit {

	@Input() @DefaultValue() @CoerceNumber() public delay: number = 0;
	@Input() @DefaultValue() @CoerceNumber() public offset: number = 0;

	@Output() public scrolling: EventEmitter<ScrollEvent> = new EventEmitter<ScrollEvent>();
	@Output() public scrollingX: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollingY: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollingUp: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollingDown: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollingLeft: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollingRight: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollReachTop: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollReachBottom: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollReachLeft: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();
	@Output() public scrollReachRight: EventEmitter<WheelEvent> = new EventEmitter<WheelEvent>();

	public scrolling$: Subject<any> = new Subject<any>();

	private _lastScrollTop: number = 0;
	private _lastScrollLeft: number = 0;

	get scrollable(): boolean {
		return this.scrollableX || this.scrollableY;
	}

	get scrollableX(): boolean {
		const element: HTMLElement = this._elementRef.nativeElement;
		const scrollWidth: number = element.scrollWidth;
		const { width, height }: DOMRect = element.getBoundingClientRect();

		return !!height && !!width && scrollWidth !== width;
	}

	get scrollableY(): boolean {
		const element: HTMLElement = this._elementRef.nativeElement;
		const scrollHeight: number = element.scrollHeight;
		const { width, height }: DOMRect = element.getBoundingClientRect();

		return !!height && !!width && scrollHeight !== height;
	}

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	@HostListener( 'scroll', [ '$event' ] )
	public triggerScroll( event?: WheelEvent ) {
		_.isNil( this.delay )
			? this._detectScroll( this._elementRef.nativeElement, event )
			: setTimeout( () => this._detectScroll( this._elementRef.nativeElement, event ), this.delay );
	}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		setTimeout( () => this._detectScroll( this._elementRef.nativeElement ) );
	}

	/**
	 * @param {HTMLElement} element
	 * @param {WheelEvent=} event
	 * @return {void}
	 */
	private _detectScroll( element: HTMLElement, event?: WheelEvent ) {
		const scrollTop: number = Math.abs( element.scrollTop );
		const scrollLeft: number = Math.abs( element.scrollLeft );
		const scrollWidth: number = element.scrollWidth;
		const scrollHeight: number = element.scrollHeight;
		const { width, height }: DOMRect = element.getBoundingClientRect();
		let scrollingX: boolean = false;
		let scrollingY: boolean = false;
		let scrollingUp: boolean = false;
		let scrollingDown: boolean = false;
		let scrollingLeft: boolean = false;
		let scrollingRight: boolean = false;
		let scrollReachTop: boolean = false;
		let scrollReachBottom: boolean = false;
		let scrollReachLeft: boolean = false;
		let scrollReachRight: boolean = false;

		// In case scrolling X
		if ( scrollLeft !== this._lastScrollLeft ) {
			scrollingX = true;
			scrollingLeft = scrollLeft < this._lastScrollLeft;
			scrollingRight = scrollLeft > this._lastScrollLeft;

			this.scrollingX.emit( event );
			scrollingLeft && this.scrollingLeft.emit( event );
			scrollingRight && this.scrollingRight.emit( event );
		}

		// In case scrolling Y
		if ( scrollTop !== this._lastScrollTop ) {
			scrollingY = true;
			scrollingUp = scrollTop < this._lastScrollTop;
			scrollingDown = scrollTop > this._lastScrollTop;

			this.scrollingY.emit( event );
			scrollingUp && this.scrollingUp.emit( event );
			scrollingDown && this.scrollingDown.emit( event );
		}

		// In case scroll reach top
		if ( ( !this.scrollableY && !scrollTop && !scrollingX && !scrollingDown )
			|| ( scrollingUp
				&& ( Math.ceil( scrollTop ) === 0
					|| ( Math.ceil( this._lastScrollTop ) > this.offset
						&& Math.ceil( scrollTop ) <= this.offset ) ) ) ) {
			scrollReachTop = true;

			this.scrollReachTop.emit( event );
		}

		// In case scroll reach bottom
		if ( ( !this.scrollableY && !scrollTop && !scrollingX && !scrollingUp )
			|| ( scrollingDown
				&& ( Math.ceil( scrollTop ) === ( scrollHeight - Math.ceil( height ) )
					|| ( Math.ceil( this._lastScrollTop ) < ( scrollHeight - Math.ceil( height ) - this.offset )
						&& Math.ceil( scrollTop ) >= ( scrollHeight - Math.ceil( height ) - this.offset ) ) ) ) ) {
			scrollReachBottom = true;

			this.scrollReachBottom.emit( event );
		}

		// In case scroll reach left
		if ( ( !this.scrollableX && !scrollLeft && !scrollingY && !scrollingRight )
			|| ( scrollingLeft
				&& ( Math.ceil( scrollLeft ) === 0
					|| ( Math.ceil( this._lastScrollLeft ) > this.offset
						&& Math.ceil( scrollLeft ) <= this.offset ) ) ) ) {
			scrollReachLeft = true;

			this.scrollReachLeft.emit( event );
		}

		// In case scroll reach right
		if ( ( !this.scrollableX && !scrollLeft && !scrollingY && !scrollingLeft )
			|| ( scrollingRight
				&& ( Math.ceil( scrollLeft ) === ( scrollWidth - Math.ceil( width ) )
					|| ( Math.ceil( this._lastScrollLeft ) < ( scrollWidth - Math.ceil( width ) - this.offset )
						&& Math.ceil( scrollLeft ) >= ( scrollWidth - Math.ceil( width ) - this.offset ) ) ) ) ) {
			scrollReachRight = true;

			this.scrollReachRight.emit( event );
		}

		this._lastScrollTop = scrollTop;
		this._lastScrollLeft = scrollLeft;

		const scrollEvent: ScrollEvent = {
			scrollingX, scrollingY,
			scrollingUp, scrollingDown,
			scrollingLeft, scrollingRight,
			scrollReachTop, scrollReachBottom,
			scrollReachLeft, scrollReachRight,
			scrollTop, scrollLeft,
			scrollWidth, scrollHeight,
			width, height,
		};

		this.scrolling.emit( scrollEvent );
		this.scrolling$.next( scrollEvent );
	}

}
