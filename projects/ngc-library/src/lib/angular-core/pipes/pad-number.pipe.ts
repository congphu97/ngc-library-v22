import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'padNumber' })
export class PadNumberPipe implements PipeTransform {

	/**
	 * @param {number} input
	 * @param {boolean} size
	 * @return {string}
	 */
	@Memoize()
	public transform( input: number, size: number ): string {
		return _.toPadNumber( input, size );
	}

}
