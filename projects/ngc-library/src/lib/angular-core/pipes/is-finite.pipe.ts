import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'isFinite' })
export class IsFinitePipe implements PipeTransform {

	/**
	 * @param {number} num
	 * @return {boolean}
	 */
	@Memoize()
	public transform( num: number ): boolean {
		return _.isFinite( num );
	}

}
