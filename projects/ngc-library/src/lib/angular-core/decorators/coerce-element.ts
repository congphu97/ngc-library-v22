import { coerceElement } from '@angular/cdk/coercion';

export function CoerceElement<T>(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): T {
				return this[ 'ɵɵmetadata' ] ? this[ 'ɵɵmetadata' ][ key ] : undefined;
			},
			set( v: T ) {
				const metadata: any = this[ 'ɵɵmetadata' ] || {};

				metadata[ key ] = coerceElement<T>( v );

				this[ 'ɵɵmetadata' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
