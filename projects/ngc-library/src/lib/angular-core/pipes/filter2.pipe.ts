import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
	standalone: false,  name: 'filter2', pure: false })
export class Filter2Pipe implements PipeTransform {

	private _previous: any[];

	/**
	 * @param {any[]} items
	 * @param {any} key
	 * @param {any} matchValue
	 * @param {boolean=} diffComparison
	 * @return {any[]}
	 */
	public transform( items: any[], key: any, matchValue: any, diffComparison: boolean = false ): any[] {
		if ( !items ) return [];

		const hasMatchValue: boolean = arguments.length >= 3;
		const filteredItems: any[] = _.filter( items, ( item: any ) => {
			const value: any = key ? _.get( item, key ) : item;

			if ( hasMatchValue ) {
				const matched: boolean = _.isArray( matchValue )
					? _.includes( matchValue, value )
					: matchValue === value;

				return diffComparison ? !matched : matched;
			}

			return _.isNil( value );
		} );
		const isDiff: boolean = !!_.difference( filteredItems, this._previous ).length;

		if ( isDiff ) {
			this._previous = filteredItems;

			return filteredItems;
		}

		return this._previous;
	}

}
