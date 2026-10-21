import _ from 'lodash';

export function DefaultValue(): PropertyDecorator {
	return function( target: Object, key: string | symbol ) {
		Object.defineProperty( target, key, {
			get(): any {
				return this[ 'ɵɵdefaultvalue' ] ? this[ 'ɵɵdefaultvalue' ][ key ] : undefined;
			},
			set( v: any ) {
				let defaultValue: any = this[ 'ɵɵdefaultvalue' ]
					? this[ 'ɵɵdefaultvalue' ][ key ]
					: undefined;

				if ( defaultValue === undefined ) defaultValue = v;

				const metadata: any = this[ 'ɵɵdefaultvalue' ] || {};

				metadata[ key ] = _.coerce( v, defaultValue );

				this[ 'ɵɵdefaultvalue' ] = metadata;
			},
			enumerable	: true,
			configurable: true,
		} );
	};
}
