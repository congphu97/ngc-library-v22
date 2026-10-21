import { Directive, TemplateRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcTabHeader]', exportAs: 'ngcTabHeader' })
export class NgcTabHeaderDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
