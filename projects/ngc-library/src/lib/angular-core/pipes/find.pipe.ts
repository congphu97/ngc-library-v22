import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
	standalone: false,  name: 'find', pure: false })
export class FindPipe implements PipeTransform {

	/**
	 * @param {any[]} items
	 * @param {any} key
	 * @param {any} matchValue
	 * @return {any}
	 */
	public transform( items: any[], key: any, matchValue: any ): any {
		if ( !items ) return;

		const hasMatchValue: boolean = arguments.length === 3;

		return _.find( items, ( item: any ) => {
			const value: any = key ? _.get( item, key ) : item;

			if ( hasMatchValue ) {
				return _.isArray( matchValue )
					? _.includes( matchValue, value )
					: matchValue === value;
			}

			return _.isNil( value );
		} );
	}

}
