import { Directive } from '@angular/core';

@Directive({
	standalone: false,
	selector: '[ngcFormFieldPrefix], [ngcPrefix], [wgcFormFieldPrefix]',
	exportAs: 'ngcFormFieldPrefix'
})
export class NgcFormFieldPrefixDirective {}
