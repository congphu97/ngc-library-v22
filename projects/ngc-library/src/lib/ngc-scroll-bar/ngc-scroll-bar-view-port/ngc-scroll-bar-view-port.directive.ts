import { Directive, ElementRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcScrollBarViewPort]', exportAs: 'ngcScrollBarViewPort' })
export class NgcScrollBarViewPortDirective {

	/**
	 * @constructor
	 * @param {ElementRef} elementRef
	 */
	constructor( public elementRef: ElementRef ) {}

}
