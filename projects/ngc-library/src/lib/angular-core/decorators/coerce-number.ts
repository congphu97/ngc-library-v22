import { coerceNumberProperty } from '@angular/cdk/coercion';
import _ from 'lodash';

export function CoerceNumber(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): number {
				return this[ 'ɵɵmetadata' ] ? this[ 'ɵɵmetadata' ][ key ] : undefined;
			},
			set( v: number ) {
				const metadata: any = this[ 'ɵɵmetadata' ] || {};

				metadata[ key ] = !_.isNil( v ) ? coerceNumberProperty( v ) : v;

				this[ 'ɵɵmetadata' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
