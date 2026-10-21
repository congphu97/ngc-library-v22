import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'convertPercent' })
export class ConvertPercentPipe implements PipeTransform {

	/**
	 * @param {number} input
	 * @param {number=} max
	 * @param {number=} digits
	 * @return {number}
	 */
	@Memoize()
	public transform( input: number, max: number = 100, digits: number = 2 ): number {
		return _.toPercent( input, max, digits );
	}

}
