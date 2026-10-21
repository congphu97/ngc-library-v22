import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'timeString' })
export class TimeStringPipe implements PipeTransform {

	/**
	 * @param {number} miliseconds
	 * @return {string}
	 */
	@Memoize()
	public transform( miliseconds: number ): string {
		const seconds: number = miliseconds / 1000;
		const s: number = Math.floor( seconds % 60 );
		const m: number = Math.floor( ( seconds / 60 ) % 60 );
		const h: number = Math.floor( ( seconds / ( 60 * 60 ) ) );
		const arr: string[] = [];

		h && arr.push( `${h}h` );
		m && arr.push( `${m}m` );
		s && arr.push( `${s}s` );

		return _.join( arr, ' ' );
	}

}
