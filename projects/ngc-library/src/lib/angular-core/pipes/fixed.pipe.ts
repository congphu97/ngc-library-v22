import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'fixed' })
export class FixedPipe implements PipeTransform {

	/**
	 * @param {number} input
	 * @param {number=} digits
	 * @return {number}
	 */
	@Memoize()
	public transform( input: number, digits: number = 2 ): number {
		return _.toFixed( input, digits );
	}

}
