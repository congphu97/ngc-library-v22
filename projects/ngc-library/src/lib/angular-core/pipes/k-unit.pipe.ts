import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'kUnit' })
export class KUnitPipe implements PipeTransform {

	/**
	 * @param {number} input
	 * @param {boolean=} isAddZero
	 * @return {string}
	 */
	@Memoize()
	public transform( input: number, isAddZero: boolean = false ): string {
		return _.toKUnit( input, isAddZero );
	}

}
