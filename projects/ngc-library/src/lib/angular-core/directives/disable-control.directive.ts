import { Directive, Input, ChangeDetectorRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	standalone: false,  selector: '[disableControl]', exportAs: 'disableControl' })
export class DisableControlDirective {

	@Input()
	set disableControl( condition: boolean ) {
		setTimeout( () => {
			this._ngControl.control[ condition ? 'disable' : 'enable' ]();
			this._cdRef.detectChanges();
		} );
	}

	/**
	 * @constructor
	 * @param {NgControl} _ngControl
	 * @param {ChangeDetectorRef} _cdRef
	 */
	constructor( private _ngControl: NgControl, private _cdRef: ChangeDetectorRef ) {}

}
