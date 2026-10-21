import _ from 'lodash';

export function Memoize( hasher?: ( ...args: any[] ) => any, validator?: Function ): MethodDecorator {
	return function( _target: Object, _key: string | symbol, descriptor: TypedPropertyDescriptor<any> ) {
		hasher = _.isFunction( hasher ) ? hasher : function() {
			return JSON.stringify( arguments );
		};
		validator = _.isFunction( validator ) ? validator : function() {
			const allowTypes: string[] = [ 'number', 'string', 'boolean' ];

			// eslint-disable-next-line @typescript-eslint/prefer-for-of
			for ( let i: number = 0; i < arguments.length; i++ ) {
				const type: string = typeof arguments[ i ];

				if ( !_.includes( allowTypes, type ) ) throw new Error();
			}
		};

		const oldFunction: any = descriptor.value;
		const newFunction: any = _.memoize( oldFunction, hasher );

		descriptor.value = function() {
			try {
				validator.apply( this, arguments );

				return newFunction.apply( this, arguments );
			} catch {
				return oldFunction.apply( this, arguments );
			}
		};
	};
}
