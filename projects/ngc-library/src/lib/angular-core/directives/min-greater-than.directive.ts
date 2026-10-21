import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, UntypedFormControl } from '@angular/forms';

@Directive({
	standalone: false, 
	selector	: '[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]',
	providers	: [{ provide: NG_VALIDATORS, useExisting: MinGreaterThanDirective, multi: true }],
})
export class MinGreaterThanDirective implements Validator {

	@Input() public minGreaterThan: number;

	/**
	 * @param {FormControl} c
	 * @return {any}
	 */
	public validate( c: UntypedFormControl ): { [ key: string ]: any } {
		const v: number = c.value;

		return v <= this.minGreaterThan
			? { minGreaterThan: { min: this.minGreaterThan, actual: v } }
			: null;
	}

}
