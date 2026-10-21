import { ɵComponentType } from '@angular/core';
import _ from 'lodash';

export function Constants( constants: any ): ( cmpType: ɵComponentType<any> ) => void {
	return ( cmpType: ɵComponentType<any> ) => {
		_.forEach( constants, ( constant: any, key: string ) => {
			Object.defineProperty( cmpType.prototype, key, {
				get() { return constant; },
			} );
		} );
	};
}
