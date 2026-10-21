import { Directive } from '@angular/core';

@Directive({
	standalone: false, selector: '[ngcMenuItemPrefix]', exportAs: 'ngcMenuItemPrefix' })
export class NgcMenuItemPrefixDirective {}
