import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { DefaultValue, CoerceNumber } from '../decorators';

@Directive({
	standalone: false,  selector: '[autoReset]', exportAs: 'autoReset' })
export class AutoResetDirective implements OnInit, OnDestroy {

	@Input() public formControl: UntypedFormControl;
	@Input() @DefaultValue() @CoerceNumber() public delay: number = 0;
	@Input() @DefaultValue() public autoReset: 'init' | 'destroy' = 'init';

	/**
	 * @constructor
	 */
	ngOnInit() {
		if ( this.autoReset !== 'init' || !this.formControl ) return;

		setTimeout( () => {
			this.formControl.setErrors( null );
			this.formControl.markAsPristine();
			this.formControl.markAsUntouched();
		}, this.delay );
	}

	/**
	 * @constructor
	 */
	ngOnDestroy() {
		if ( this.autoReset !== 'destroy' || !this.formControl ) return;

		setTimeout( () => {
			this.formControl.setErrors( null );
			this.formControl.markAsPristine();
			this.formControl.markAsUntouched();
		}, this.delay );
	}

}
