import { Directive, TemplateRef } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcExpansionPanelContent]', exportAs: 'ngcExpansionPanelContent' })
export class NgcExpansionPanelContentDirective {

	/**
	 * @constructor
	 * @param {TemplateRef} templateRef
	 */
	constructor( public templateRef: TemplateRef<any> ) {}

}
