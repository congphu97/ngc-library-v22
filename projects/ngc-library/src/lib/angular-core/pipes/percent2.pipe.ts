import { Pipe, PipeTransform } from '@angular/core';
import { PercentPipe } from '@angular/common';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'percent2' })
export class Percent2Pipe extends PercentPipe implements PipeTransform {

	/**
	 * @param {string | number} value
	 * @param {string=} digitsInfo
	 * @param {string=} locale
	 * @return {any}
	 */
	@Memoize()
	public transform( value: string | number, digitsInfo: string = '1.0-2', locale?: string ): any {
		return super.transform( value, digitsInfo, locale );
	}

}
