import { Directive } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcFormFieldError]', exportAs: 'ngcFormFieldError' })
export class NgcFormFieldErrorDirective {}
