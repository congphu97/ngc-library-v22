import { PipeTransform, Pipe } from '@angular/core';
import moment from 'moment-timezone';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'hourMeridiem' })
export class HourMeridiemPipe implements PipeTransform {

	/**
	 * @param {number} hour
	 * @return {string}
	 */
	@Memoize()
	public transform( hour: number ): string {
		return !_.isNil( hour ) ? moment().hour( hour ).format( 'hh A' ) : undefined;
	}

}
