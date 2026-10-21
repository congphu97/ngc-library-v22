import { Directive } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcDialogContent]', exportAs: 'ngcDialogContent' })
export class NgcDialogContentDirective {}
