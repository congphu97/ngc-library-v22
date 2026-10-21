import { coerceArray } from '@angular/cdk/coercion';

export function CoerceArray<T>(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): T[] {
				return this[ 'ɵɵmetadata' ] ? this[ 'ɵɵmetadata' ][ key ] : undefined;
			},
			set( v: T[] ) {
				const metadata: any = this[ 'ɵɵmetadata' ] || {};

				metadata[ key ] = v !== undefined ? coerceArray<T>( v ) : undefined;

				this[ 'ɵɵmetadata' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
