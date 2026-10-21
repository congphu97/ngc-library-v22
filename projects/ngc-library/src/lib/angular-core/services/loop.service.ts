import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class LoopService {

	private _intervals: number[] = [];

	/**
	 * @param {() => void)} fn
	 * @param {number} time
	 * @return {number} index
	 */
	public set( fn: () => void, time: number ): number {
		const index: number = this._intervals.length ? this._intervals.length + 1 : 0;

		this._intervals[ index ] = setInterval( fn, time ) as unknown as number;

		return index;
	}

	/**
	 * @param {number} index
	 * @return {void}
	 */
	public cancel( index: number ) {
		clearInterval( this._intervals[ index ] );
	}

	/**
	 * @return {void}
	 */
	public destroy() {
		_.forEach( this._intervals, ( _o: number, i: number ) => {
			clearInterval( this._intervals[ i ] );
		} );

		this._intervals = [];
	}

}
