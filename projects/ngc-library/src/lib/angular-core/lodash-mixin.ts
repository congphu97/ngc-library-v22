import { Observable, Observer } from 'rxjs';
import CryptoJS from 'crypto-js';
import moment from 'moment-timezone';
import _ from 'lodash';

const AES_IV: CryptoJS.WordArray.init = CryptoJS.enc.Hex.parse( '101112131415161718191a1b1c1d1e1f' );
const AES_HASH_KEY: CryptoJS.WordArray.init = CryptoJS.enc.Hex.parse( '000102030405060708090a0b0c0d0e0f' );
const ACCENTED_CHARACTER_MAP: { [ key: string ]: string } = {
	a: '[aàảãáạăằẳẵắặâầẩẫấậ]',
	d: '[dđ]',
	e: '[eèẻẽéẹêềểễếệ]',
	i: '[iìỉĩíị]',
	o: '[oòỏõóọôồổỗốộơờởỡớợ]',
	u: '[uùủũúụưừửữứự]',
	y: '[yỳỷỹýỵ]',
};

declare module 'lodash' {
	interface LoDashStatic {
		aesEncrypt( data: any, key?: string, opts?: any ): string;
		aesDecrypt( code: string, key?: string, opts?: any ): any;
		arrayInsert( arr: any[], item: any, index: number ): any[];
		arrayJoin( arr: any[], joinSymbol?: string ): string;
		arrayUpdate( arr: any[], item: any, index?: number ): any[];
		arrayResert( arr: any[], item: any, index?: number, type?: string ): any[];
		coerce( value: any, defaultValue?: any ): any;
		escapeRegExp( str: string ): string;
		isStrictEmpty( value: any ): boolean;
		matchAll( regex: RegExp, value: string ): any[];
		search( str: string, match: string ): boolean;
		staticObservable( value?: any ): Observable<any>;
		stripAccentedCharacters( str: string ): string;
		stripHtml( html: string ): string;
		toCommas( num: number, isAddZero?: boolean ): string;
		toFileSize( fileSize: number, isAddZero?: boolean ): string;
		toFixed( num: number, digits?: number ): number;
		toKUnit( num: number, isAddZero?: boolean ): string;
		toPadNumber( num: number, size: number ): string;
		toPercent( num: number, max?: number, digits?: number ): number;
		toRegExp( str: string, flags?: string ): RegExp;
		toRgb( hex: string ): RGB;
		toSearchRegExp( str: string, flags?: string ): RegExp;
		toSearchString( str: string, ignoreWhitespace?: boolean ): string;
	}
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface LoDashExplicitWrapper<TValue> {
		aesEncrypt( key?: string, opts?: any ): LoDashExplicitWrapper<string>;
		aesDecrypt( key?: string, opts?: any ): LoDashExplicitWrapper<any>;
		arrayInsert( item: any, index: number ): LoDashExplicitWrapper<any[]>;
		arrayJoin( joinSymbol?: string ): LoDashExplicitWrapper<string>;
		arrayUpdate( item: any, index?: number ): LoDashExplicitWrapper<any[]>;
		arrayResert( item: any, index?: number, type?: string ): LoDashExplicitWrapper<any[]>;
		coerce( defaultValue?: any ): LoDashExplicitWrapper<any>;
		escapeRegExp(): LoDashExplicitWrapper<string>;
		isStrictEmpty(): LoDashExplicitWrapper<boolean>;
		matchAll( value: string ): LoDashExplicitWrapper<any[]>;
		search( match: string ): LoDashExplicitWrapper<boolean>;
		staticObservable(): LoDashExplicitWrapper<Observable<any>>;
		stripAccentedCharacters(): LoDashExplicitWrapper<string>;
		stripHtml(): LoDashExplicitWrapper<string>;
		toCommas( isAddZero?: boolean ): LoDashExplicitWrapper<string>;
		toFileSize( fileSize: number, isAddZero?: boolean ): LoDashExplicitWrapper<string>;
		toFixed( digits?: number ): LoDashExplicitWrapper<number>;
		toKUnit( isAddZero?: boolean ): LoDashExplicitWrapper<string>;
		toPadNumber( size: number ): LoDashExplicitWrapper<string>;
		toPercent( max?: number, digits?: number ): LoDashExplicitWrapper<number>;
		toRegExp( flags?: string ): LoDashExplicitWrapper<RegExp>;
		toRgb(): LoDashExplicitWrapper<RGB>;
		toSearchRegExp( flags?: string ): LoDashExplicitWrapper<RegExp>;
		toSearchString( ignoreWhitespace?: boolean ): LoDashExplicitWrapper<string>;
	}
}

export interface RGB {
	r: number;
	g: number;
	b: number;
}

// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const LODASH_MIXIN = {
	aesEncrypt: ( data: any, key: string = AES_HASH_KEY, opts?: any ): string => {
		let exp: number;

		if ( opts && _.isString( opts.exp ) ) {
			const matched: RegExpExecArray = opts.exp.match( /([0-9]+)([a-z]+)/ );
			const expNum: number = Number( _.get( matched, 1 ) );
			const expUnit: string = _.get( matched, 2 );

			exp = expNum ? +moment().add( expNum, expUnit as any ) : undefined;
		}

		data = JSON.stringify({ data, exp, salt: _.get( opts, 'salt' ) });

		return CryptoJS.AES.encrypt( data, key, { iv: AES_IV } ).toString();
	},
	aesDecrypt: ( code: string, key: string = AES_HASH_KEY, opts?: any ): any => {
		try {
			const bytes: typeof CryptoJS.AES.decrypt = CryptoJS.AES.decrypt( code, key, { iv: AES_IV } );
			let decoded: any = bytes.toString( CryptoJS.enc.Utf8 );

			if ( !decoded ) throw new Error();

			decoded = JSON.parse( decoded );

			if ( ( decoded.salt && decoded.salt !== _.get( opts, 'salt' ) )
				|| ( decoded.exp && moment( decoded.exp ).isBefore( moment() ) ) ) throw new Error();

			return decoded.data;
		} catch {}
	},
	arrayInsert: ( arr: any[], item: any, index: number ): any[] => {
		arr = _.isArray( arr ) ? arr : [];

		index === -1 || _.isNil( index ) ? arr.push( item ) : arr.splice( index, 0, item );

		return arr;
	},
	arrayJoin: ( arr: any[], joinSymbol: string = ', ' ): string => {
		return _( arr ).chain().filter( ( item: any ) => !_.isNil( item ) && item !== '' ).join( joinSymbol ).value();
	},
	arrayUpdate: ( arr: any[], item: any, index?: number ): any[] => {
		arr = _.isArray( arr ) ? arr : [];

		index = _.isNil( index ) ? _.indexOf( arr, item ) : index;

		if ( index !== -1 ) arr[ index ] = item;

		return arr;
	},
	arrayUpsert: ( arr: any[], item: any, index?: number, type: string = 'push' ): any[] => {
		arr = _.isArray( arr ) ? arr : [];

		index = _.isNil( index ) ? _.indexOf( arr, item ) : index;

		if ( index === -1 ) {
			type === 'push' ? arr.push( item ) : arr.unshift( item );
		} else {
			arr[ index ] = item;
		}

		return arr;
	},
	arrayResert: ( arr: any[], item: any, index?: number, type: string = 'push' ): any[] => {
		arr = _.isArray( arr ) ? arr : [];

		index = _.isNil( index ) ? _.indexOf( arr, item ) : index;

		if ( index === -1 ) {
			type === 'push' ? arr.push( item ) : arr.unshift( item );
		} else {
			arr.splice( index, 1 );
		}

		return arr;
	},
	coerce: ( value: any, defaultValue?: any ): any => {
		return value === '' || _.isUndefined( value ) ? defaultValue : ( _.isNumber( value ) ? Number( value ) : value );
	},
	escapeRegExp: ( str: string ): string => {
		return _( str ).chain().replace( /[|\\{}()[\]^$+*?.]/g, '\\$&' ).replace( /-/g, '\\x2d' ).value();
	},
	isStrictEmpty: ( value: any ): boolean => {
		return _.isNil( value )
			|| _.isEqual( value, {} )
			|| _.isEqual( value, [] )
			|| _.isEqual( _.trim( value ), '' );
	},
	matchAll: ( regex: RegExp, value: string ): any[] => {
		if ( !regex || !value ) return [];

		const matches: string[] = ( value as any ).match( new RegExp( regex ) );

		return _.map( matches, ( match: string ) => new RegExp( regex ).exec( match ) );
	},
	search: ( str: string, match: string ): boolean => {
		if ( !_.isString( str ) ) return false;

		const searchRegExp: RegExp = _.toSearchRegExp( match );

		return str.search( searchRegExp ) >= 0
			|| _( str )
			.chain()
			.split( ' ' )
			.map( 0 )
			.join( '' )
			.value()
			.search( searchRegExp ) >= 0;
	},
	staticObservable: ( value?: any ): Observable<any> => {
		return new Observable<any>( ( observer: Observer<any> ) => { observer.next( value ); observer.complete(); } );
	},
	stripAccentedCharacters: ( str: string ): string => {
		return str?.length
			? _( str.normalize( 'NFD' ) )
			.chain()
			.replace( /\p{Diacritic}/gu, '' )
			.replace( /đ/g, 'd' )
			.replace( /Đ/g, 'D' )
			.value()
			: '';
	},
	stripHtml: ( html: string ): string => {
		return _.replace( html, /<[^>]*>?/gm, '' );
	},
	toCommas: ( num: number, isAddZero: boolean = false ): string => {
		if ( !_.isFinite( num ) ) return num as any;

		let n: string = String( isAddZero ? _.toPadNumber( num, 2 ) : num );

		n += '';

		const x: any = _.split( n, '.' );
		const x2: any = x.length > 1 ? '.' + x[ 1 ] : '';
		const rgx: RegExp = /(\d+)(\d{3})/;

		let x1: any = x[ 0 ];

		while ( rgx.test( x1 ) ) {
			x1 = _.replace( x1, rgx, '$1' + ',' + '$2' );
		}

		return x1 + x2;
	},
	toFileSize: ( fileSize: number, isAddZero: boolean = false ): string => {
		if ( !fileSize || _.isNaN( fileSize ) ) fileSize = 0;

		let n: number = fileSize;
		let unit: string = 'B';

		if ( fileSize >= 1073741824 ) {
			n = fileSize / 1024 / 1024 / 1024;
			unit = 'GB';
		} else if ( fileSize >= 1048576 ) {
			n = fileSize / 1024 / 1024;
			unit = 'MB';
		} else if ( fileSize >= 1024 ) {
			n = fileSize / 1024;
			unit = 'KB';
		}

		return _( n ).chain().toFixed().toCommas( isAddZero ).value() + unit;
	},
	toFixed: ( num: number, digits: number = 2 ): number => {
		if ( !_.isFinite( num ) || num % 1 === 0 ) return num;

		const numArr: string[] = String( num ).split( '.' );
		const first: string = numArr[ 0 ];
		const last: string = numArr[ 1 ].slice( 0, digits );

		return Number( [ first, last ].join( '.' ) );
	},
	toKUnit: ( num: number, isAddZero: boolean = false ): string => {
		let n: number = num;
		let unit: string = '';

		if ( Math.abs( num ) >= 1000000000 ) {
			n = num / 1000000000;
			unit = 'B';
		} else if ( Math.abs( num ) >= 1000000 ) {
			n = num / 1000000;
			unit = 'M';
		} else if ( Math.abs( num ) >= 1000 ) {
			n = num / 1000;
			unit = 'K';
		}

		return _( n ).chain().toFixed().toCommas( isAddZero ).value() + unit;
	},
	toPadNumber: ( num: number, size: number ): string => {
		return _.padStart( String( num ), size, '0' );
	},
	toPercent: ( num: number, max: number = 100, digits: number = 2 ): number => {
		return Number( ( num * max ).toFixed( digits ) );
	},
	toRegExp: ( str: string, flags: string = 'g' ): RegExp => {
		return new RegExp( _.escapeRegExp( str ), flags );
	},
	toRgb: ( hex: string ): RGB => {
		const shorthandRegex: RegExp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

		hex = _.replace( hex, shorthandRegex, ( _m: string, r: string, g: string, b: string ) => {
			return r + r + g + g + b + b;
		} );

		const result: RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );

		return result
			? {
				r: parseInt( result[ 1 ], 16 ),
				g: parseInt( result[ 2 ], 16 ),
				b: parseInt( result[ 3 ], 16 ),
			}
			: undefined;
	},
	toSearchRegExp: ( str: string, flags: string = 'gi' ): RegExp => {
		if ( _.isEmpty( str ) ) return;

		const arr: string[] = _.split( str, '' );

		_.forEach( arr, ( char: string, index: number ) => {
			arr[ index ] = ACCENTED_CHARACTER_MAP[ _.toLower( char ) ] || _.escapeRegExp( char );
		} );

		return new RegExp( arr.join( '' ), flags );
	},
	toSearchString: ( str: string, ignoreWhitespace?: boolean ): string => {
		str = _( str ).chain().stripAccentedCharacters().toLower().value();

		ignoreWhitespace && _.replace( str, / /g, '' );

		return str;
	},
} as const;

_.mixin( LODASH_MIXIN );
