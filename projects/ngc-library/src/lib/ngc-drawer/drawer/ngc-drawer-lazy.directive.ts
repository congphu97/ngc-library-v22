import { Directive, TemplateRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcDrawerLazy]', exportAs: 'ngcDrawerLazy' })
export class NgcDrawerLazyDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
