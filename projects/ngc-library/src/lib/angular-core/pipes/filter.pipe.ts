import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
	standalone: false,  name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {

	/**
	 * @param {any[]} items
	 * @param {any} key
	 * @param {any} matchValue
	 * @param {boolean} diffComparison
	 * @return {any[]}
	 */
	public transform( items: any[], key: any, matchValue: any, diffComparison: boolean = false ): any[] {
		if ( !items ) return [];

		const hasMatchValue: boolean = arguments.length >= 3;

		return _.filter( items, ( item: any ) => {
			const value: any = key ? _.get( item, key ) : item;

			if ( hasMatchValue ) {
				const matched: boolean = _.isArray( matchValue )
					? _.includes( matchValue, value )
					: matchValue === value;

				return diffComparison ? !matched : matched;
			}

			return _.isNil( value );
		} );
	}

}
