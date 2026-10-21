import { Directive, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
	standalone: false,  selector: '[adjustFontsize]', exportAs: 'adjustFontsize' })
export class AdjustFontsizeDirective implements AfterContentChecked {

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @constructor
	 */
	ngAfterContentChecked() {
		const element: HTMLElement = this._elementRef.nativeElement;
		const elementWidth: number = element.clientWidth || 0;
		const parentWidth: number = ( element.parentElement.clientWidth || 0 )
			- ( element.nextElementSibling.clientWidth || 0 )
			- ( element.previousElementSibling.clientWidth || 0 );

		if ( elementWidth <= 0 || parentWidth <= 0 || elementWidth <= parentWidth ) return;

		const newFontsize: number = parseFloat( element.style.fontSize )
			 * ( parentWidth / elementWidth );

		element.style.fontSize = `${newFontsize}px`;
		element.style.lineHeight = `${newFontsize}px`;
	}

}
