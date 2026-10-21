import { Directive } from '@angular/core';

@Directive({
	standalone: false, selector: '[wgcFormFieldPrefix]', exportAs: 'wgcFormFieldPrefix' })
export class NgcFormFieldPrefixDirective {}
