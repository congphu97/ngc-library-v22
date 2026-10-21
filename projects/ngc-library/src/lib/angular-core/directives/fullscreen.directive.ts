import { Directive, ElementRef } from '@angular/core';

const doc: any = document;

@Directive({
	standalone: false,  selector: '[fullscreen]', exportAs: 'fullscreen' })
export class FullscreenDirective {

	public isFullscreen: boolean;

	private _fullscreenEnabled: boolean = doc.fullscreenEnabled
		|| doc.documentElement.webkitRequestFullScreen
		|| doc.mozFullScreenEnabled
		|| doc.msFullscreenEnable;

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @return {void}
	 */
	public toggle() {
		this.isFullscreen ? this.off() : this.on();
	}

	/**
	 * @return {void}
	 */
	public on() {
		if ( !this._fullscreenEnabled ) return;

		const element: any = this._elementRef.nativeElement;

		this.isFullscreen = true;

		if ( element.requestFullscreen ) {
			element.requestFullscreen();
		} else if ( element.mozRequestFullScreen ) {
			element.mozRequestFullScreen();
		} else if ( element.webkitRequestFullScreen ) {
			element.webkitRequestFullScreen( ( Element as any ).ALLOW_KEYBOARD_INPUT );
		} else if ( element.msRequestFullscreen ) {
			element.msRequestFullscreen();
		}
	}

	/**
	 * @return {void}
	 */
	public off() {
		if ( !this._fullscreenEnabled ) return;

		this.isFullscreen = false;

		if ( doc.exitFullscreen ) {
			doc.exitFullscreen();
		} else if ( doc.webkitExitFullscreen ) {
			doc.webkitExitFullscreen();
		} else if ( doc.mozCancelFullScreen ) {
			doc.mozCancelFullScreen();
		} else if ( doc.msExitFullscreen ) {
			doc.msExitFullscreen();
		}
	}

}
