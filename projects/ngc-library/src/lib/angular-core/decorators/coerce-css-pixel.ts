import { coerceCssPixelValue } from '@angular/cdk/coercion';

export function CoerceCssPixel(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): string {
				return this[ 'ɵɵmetadata' ] ? this[ 'ɵɵmetadata' ][ key ] : undefined;
			},
			set( v: string ) {
				const metadata: any = this[ 'ɵɵmetadata' ] || {};

				metadata[ key ] = coerceCssPixelValue( v );

				this[ 'ɵɵmetadata' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
