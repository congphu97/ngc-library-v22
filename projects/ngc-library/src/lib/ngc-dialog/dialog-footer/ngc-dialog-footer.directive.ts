import { Directive, Input } from '@angular/core';

import { CoerceBoolean } from '@core';

@Directive({
	standalone: false, selector: '[ngcDialogFooter]', exportAs: 'ngcDialogFooter' })
export class NgcDialogFooterDirective {

	@Input() @CoerceBoolean() public divider: boolean;
	@Input() @CoerceBoolean() public boxShadow: boolean;

}
