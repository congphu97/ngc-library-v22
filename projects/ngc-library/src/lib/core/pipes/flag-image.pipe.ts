import { PipeTransform, Pipe } from '@angular/core';
import { CountryCode } from 'libphonenumber-js';
import _ from 'lodash';

import { Memoize } from 'angular-core';

@Pipe({
	standalone: false, name: 'flagImage' })
export class FlagImagePipe implements PipeTransform {

	/**
	 * @param {CountryCode} countryCode
	 * @return {string}
	 */
	@Memoize()
	public transform( countryCode: CountryCode ): string {
		if ( !countryCode ) return;

		const code: string = _.chain( countryCode )
		.upperCase()
		.replace( / /g, '-' )
		.value();

		return `./assets/images/flags/${code}.svg`;
	}

}
