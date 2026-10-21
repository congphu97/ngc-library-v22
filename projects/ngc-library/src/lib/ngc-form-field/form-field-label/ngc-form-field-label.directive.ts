import { Directive } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcFormFieldLabel]', exportAs: 'ngcFormFieldLabel' })
export class NgcFormFieldLabelDirective {}
