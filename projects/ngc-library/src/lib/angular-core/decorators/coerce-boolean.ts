import { coerceBooleanProperty } from '@angular/cdk/coercion';

export function CoerceBoolean(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): boolean {
				return this[ 'ɵɵmetadata' ] ? this[ 'ɵɵmetadata' ][ key ] : undefined;
			},
			set( v: boolean ) {
				const metadata: any = this[ 'ɵɵmetadata' ] || {};

				metadata[ key ] = coerceBooleanProperty( v );

				this[ 'ɵɵmetadata' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
