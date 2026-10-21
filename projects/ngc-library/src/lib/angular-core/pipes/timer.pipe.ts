import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'timer' })
export class TimerPipe implements PipeTransform {

	/**
	 * @param {number} miliseconds
	 * @return {string}
	 */
	@Memoize()
	public transform( miliseconds: number ): string {
		const seconds: number = miliseconds / 1000;
		const s: number = seconds % 60;
		const m: number = ( seconds / 60 ) % 60;
		const h: number = ( seconds / ( 60 * 60 ) );

		return _.join( [
			_.toPadNumber( Math.floor( h ), 2 ),
			_.toPadNumber( Math.floor( m ), 2 ),
			_.toPadNumber( Math.floor( s ), 2 ),
		], ':' );
	}

}
