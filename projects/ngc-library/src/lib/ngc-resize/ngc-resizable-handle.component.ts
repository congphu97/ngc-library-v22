import { Component, Output, EventEmitter, HostListener, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
	standalone: false,
	selector		: 'ngc-resizable-handle',
	template		: `<div class="ngc-resizable-handle__line"></div>`,
	encapsulation	: ViewEncapsulation.None,
	host			: {
		class: 'ngc-resizable-handle',
	}
})
export class NgcResizableHandleComponent {

	@Output() public dragStart = new EventEmitter<MouseEvent | TouchEvent>();

	@HostBinding('class.ngc-resizable-handle--dragging')
	public isDragging = false;

	@HostListener('mousedown', ['$event'])
	public onMouseDown(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.dragStart.emit(event);
	}

	@HostListener('touchstart', ['$event'])
	public onTouchStart(event: TouchEvent) {
		if (event.cancelable) event.preventDefault();
		event.stopPropagation();
		this.dragStart.emit(event);
	}

}
