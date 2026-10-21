import { Pipe, PipeTransform } from '@angular/core';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import { EmptyPipe } from './empty.pipe';

@Pipe({
	standalone: false,  name: 'momentFromNow' })
export class MomentFromNowPipe extends EmptyPipe implements PipeTransform {

	/**
	 * @param {any} input
	 * @return {string}
	 */
	public transform( input: any ): string {
		if ( _.isNil( input ) ) return super.transform();

		const output: Moment = moment( input );

		return output.isValid() ? output.fromNow() : super.transform();
	}

}
