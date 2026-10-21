import { Directive, TemplateRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcMenuContent]', exportAs: 'ngcMenuContent' })
export class NgcMenuContentDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
