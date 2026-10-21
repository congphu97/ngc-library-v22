import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'unit' })
export class UnitPipe implements PipeTransform {

	/**
	 * @param {number} num
	 * @param {string=} unit
	 * @return {string}
	 */
	@Memoize()
	public transform( num: number, unit: string = 'px' ): string {
		if ( _.isNaN( num ) ) return;

		return `${num}${unit}`;
	}

}
