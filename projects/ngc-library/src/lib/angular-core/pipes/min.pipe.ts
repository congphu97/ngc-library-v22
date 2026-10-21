import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
	standalone: false,  name: 'min' })
export class MinPipe implements PipeTransform {

	/**
	 * @param {any[]} items
	 * @param {string} field
	 * @return {number}
	 */
	public transform( items: any[], field: string ): number {
		const min: any = _.minBy( items, field );

		return min && min[ field ] ? min[ field ] : 0;
	}

}
