import { Directive } from '@angular/core';

@Directive({
	standalone: false,
	selector: '[ngcFormFieldSuffix], [ngcSuffix], [wgcFormFieldSuffix]',
	exportAs: 'ngcFormFieldSuffix'
})
export class NgcFormFieldSuffixDirective {}
