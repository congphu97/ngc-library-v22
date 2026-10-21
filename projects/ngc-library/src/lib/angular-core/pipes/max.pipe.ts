import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
	standalone: false,  name: 'max' })
export class MaxPipe implements PipeTransform {

	/**
	 * @param {any[]} items
	 * @param {string} field
	 * @return {number}
	 */
	public transform( items: any[], field: string ): number {
		const max: any = _.maxBy( items, field );

		return max && max[ field ] ? max[ field ] : 0;
	}

}
