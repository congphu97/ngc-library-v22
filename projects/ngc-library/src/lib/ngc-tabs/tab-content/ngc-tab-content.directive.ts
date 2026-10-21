import { Directive, TemplateRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcTabContent]', exportAs: 'ngcTabContent' })
export class NgcTabContentDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
