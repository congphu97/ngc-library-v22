import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'empty' })
export class EmptyPipe implements PipeTransform {

	/**
	 * @param {any} value
	 * @param {string=} emptyStr
	 * @return {any}
	 */
	@Memoize()
	public transform( value?: any, emptyStr: string = '––' ): any {
		return !_.isNil( value ) ? value : emptyStr;
	}

}
