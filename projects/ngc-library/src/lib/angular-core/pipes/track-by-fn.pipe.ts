import { PipeTransform, Pipe } from '@angular/core';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'trackByFn' })
export class TrackByFnPipe implements PipeTransform {

	/**
	 * @param {string} property
	 * @return {() => any}
	 */
	@Memoize()
	public transform( property: string ): ( idx: number, item: { [ key: string ]: any } ) => any {
		return ( _idx: number, item: { [ key: string ]: any } ) => property ? _.get( item, property ) : item;
	}

}
