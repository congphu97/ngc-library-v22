import { ElementRef, Directive, AfterViewInit, Input } from '@angular/core';

import { CoerceBoolean, CoerceNumber, DefaultValue } from '../decorators';

@Directive({
	standalone: false,  selector: '[autoFocusOn]', exportAs: 'autoFocusOn' })
export class AutoFocusDirective implements AfterViewInit {

	@Input() @DefaultValue() @CoerceNumber() public delay: number = 0;
	@Input() public disableControl: boolean;
	@Input() @CoerceBoolean() public disabled: boolean;
	@Input() @CoerceBoolean() public autoFocusOn: boolean;

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @constructor
	 */
	ngAfterViewInit() {
		if ( this.disabled || this.disableControl || !this.autoFocusOn ) return;

		setTimeout( () => {
			if ( document.activeElement instanceof HTMLInputElement
                || document.activeElement instanceof HTMLTextAreaElement
                || document.activeElement instanceof HTMLSelectElement ) {
				return;
			}

			const input: HTMLElement = this._elementRef.nativeElement;

			input.focus();
			input instanceof HTMLTextAreaElement && input.setSelectionRange( 0, input.value.length );

			if ( !input.hasAttribute( 'contenteditable' ) ) return;

			const range: Range = document.createRange();

			range.selectNodeContents( input );
			range.collapse( false );

			const sel: Selection = window.getSelection();

			sel.removeAllRanges();
			sel.addRange( range );
		}, this.delay );
	}

}
