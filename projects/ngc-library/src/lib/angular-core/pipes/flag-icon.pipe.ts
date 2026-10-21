import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

const CC_REGEX: RegExp = /^[a-z]{2}$/i;
const OFFSET: number = 127397;

@Pipe({
	standalone: false,  name: 'flagIcon' })
export class FlagIconPipe implements PipeTransform {

	/**
	 * @param {string} countryCode
	 * @return {string}
	 */
	@Memoize()
	public transform( countryCode: string ): string {
		if ( !countryCode ) return;
		if ( !CC_REGEX.test( countryCode ) ) throw new TypeError( 'cc argument must be an ISO 3166-1 alpha-2 string' );

		const codePoints: number[] = _( countryCode )
		.chain()
		.toUpper()
		.split( '' )
		.map( ( c: any ) => c.codePointAt() + OFFSET )
		.value();

		return String.fromCodePoint( ...codePoints );
	}

}
