import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, UntypedFormControl } from '@angular/forms';

@Directive({
	standalone: false, 
	selector	: '[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]',
	providers	: [{ provide: NG_VALIDATORS, useExisting: MaxLessThanDirective, multi: true }],
})
export class MaxLessThanDirective implements Validator {

	@Input() public maxLessThan: number;

	/**
	 * @param {FormControl} c
	 * @return {any}
	 */
	public validate( c: UntypedFormControl ): { [ key: string ]: any } {
		const v: number = c.value;

		return v >= this.maxLessThan
			? { maxLessThan: { max: this.maxLessThan, actual: v } }
			: null;
	}

}
