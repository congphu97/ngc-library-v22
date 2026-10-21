import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'fileSize' })
export class FileSizePipe implements PipeTransform {

	/**
	 * @param {number} input
	 * @param {boolean=} isAddZero
	 * @return {string}
	 */
	@Memoize()
	public transform( input: number, isAddZero: boolean = false ): string {
		return _.toFileSize( input, isAddZero );
	}

}
