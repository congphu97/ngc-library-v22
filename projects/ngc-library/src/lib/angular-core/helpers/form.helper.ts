import { UntypedFormGroup } from '@angular/forms';
import _ from 'lodash';

// @dynamic
export class FormHelper {

	/**
	 * @static
	 * @param {any} value
	 * @return {any}
	 */
	public static copyField( value: any ) {
		let v: any;

		switch ( typeof value ) {
			case 'object':
				v = _.assign( {}, value );
				break;
			case 'number':
				v = Number( value );
				break;
			default:
				v = _.slice( value, 0, value?.length );
				break;
		}

		return v;
	}

	/**
	 * @static
	 * @param {FormGroup} form
	 * @param {boolean=} resetValue - Flag to reset value
	 * @return {void}
	 */
	public static resetForm( form: UntypedFormGroup, resetValue: boolean = false ) {
		resetValue && form.reset();
		form.markAsPristine();
		form.markAsUntouched();
	}

}
