import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Subject, Observable, Observer } from 'rxjs';
import { take, takeWhile, finalize } from 'rxjs/operators';
import _ from 'lodash';

import { StorageService } from './storage.service';
import { SERVER_CONFIG, ServerConfig, STORAGE_CONFIG, StorageConfig } from '../injection-token';

export interface ApiHeaders { [ key: string ]: string }
export interface ApiParams { [ key: string ]: any }

@Injectable()
export class ApiService {

	public errorCatcher$: Subject<any> = new Subject<any>();

	private _baseURL: string = this.serverConfig.apiURL;
	private _accessToken: string;
	private _caching: { [ key: string ]: boolean } = {};
	private _forceReloadDelayTime: number = 60000;
	private _forceReloadDebounce: ReturnType<typeof _.debounce>
		= _.debounce( this.clearCache.bind( this ), this._forceReloadDelayTime );

	/**
	 * @constructor
	 * @param {ServerConfig} serverConfig
	 * @param {StorageConfig} storageConfig
	 * @param {HttpClient} _http
	 * @param {StorageService} _storageService
	 */
	constructor(
		@Optional() @Inject( SERVER_CONFIG ) public readonly serverConfig: ServerConfig,
		@Optional() @Inject( STORAGE_CONFIG ) public readonly storageConfig: StorageConfig,
		private _http: HttpClient,
		private _storageService: StorageService
	) {}

	/**
	 * @param {string} url
	 * @return {void}
	 */
	public setBaseURL( url: string ) {
		this._baseURL = url;
	}

	/**
	 * @param {string} accessToken
	 * @return {void}
	 */
	public setAccessToken( accessToken: string ) {
		this._accessToken = accessToken;
	}

	/**
	 * @param {number} forceReloadDelayTime
	 * @return {void}
	 */
	public setForceReloadDelayTime( forceReloadDelayTime: number ) {
		this._forceReloadDebounce?.cancel();

		this._forceReloadDelayTime = forceReloadDelayTime;
		this._forceReloadDebounce = _.debounce( () => this._caching = {}, this._forceReloadDelayTime );
	}

	/**
	 * @return {void}
	 */
	public clearCache() {
		this._caching = {};
	}

	/**
	 * @param {string} url
	 * @param {string=} method
	 * @param {ApiParams=} params
	 * @param {ApiHeaders=} headers
	 * @param {any=} options
	 * @return {Observable}
	 */
	public call(
		url: string,
		method: string = 'get',
		params: ApiParams | { queryParams: ApiParams; bodyParams: ApiParams } = {},
		headers: ApiHeaders = {},
		options?: any
	): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			method = _.toLower( method );

			/* eslint-disable @typescript-eslint/naming-convention */
			const defaultHttpHeaders: ApiHeaders = {
				'Content-Type': 'application/json;charset=UTF-8',
				'Force-Reload': String( !this._caching[ url ] ),
			};
			/* eslint-enable @typescript-eslint/naming-convention */
			const httpHeaders: HttpHeaders = headers === null
				? new HttpHeaders( defaultHttpHeaders )
				: this._setHeaders({ ...defaultHttpHeaders, ...headers });
			const queryParams: ApiHeaders = params.queryParams || params;
			const bodyParams: ApiHeaders = params.bodyParams || params;
			const isGetOrDeleteMethod: boolean = method === 'delete' || method === 'get';
			const hasQueryParams: boolean = isGetOrDeleteMethod || _.has( params, 'queryParams' );
			let newURL: string = _.arrayJoin( [ this._baseURL, url ], '' );
			let newOptions: { [ key: string ]: HttpHeaders } = { ...options, headers: httpHeaders };
			let newParams: ApiParams;

			if ( hasQueryParams ) {
				const searchParams: URLSearchParams = new URLSearchParams();

				_.forEach( queryParams, ( value: any, key: string ) => { searchParams.set( key, value ); } );

				newURL = _.arrayJoin( [ newURL, searchParams.toString() ], '?' );
			}

			if ( isGetOrDeleteMethod ) {
				newParams = newOptions;
				newOptions = undefined;
			} else {
				newParams = bodyParams;
			}

			this._http[ method ]( newURL, newParams, newOptions )
			.pipe(
				options?.reportProgress ? takeWhile( ( res: HttpResponse<any> ) => res.type <= 4 ) : take( 1 ),
				finalize( () => { this._caching[ url ] = true; this._forceReloadDebounce(); } )
			)
			.subscribe(
				( response: any ) => observer.next( response ),
				( error: any ) => observer.error( this._failCallback( error ) ),
				() => observer.complete()
			);
		} );
	}

	/**
	 * @param {string} url
	 * @param {FileList | Array<File>} files
	 * @param {ApiHeaders=} headers
	 * @param {any=} options
	 * @return {Observable}
	 */
	public upload(
		url: string,
		files: FileList | Array<File>,
		headers: ApiHeaders = {},
		options?: any
	): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			const httpHeaders: HttpHeaders = this._setHeaders( headers );
			const formData: FormData = new FormData();
			const newOptions: { [ headers: string ]: HttpHeaders } = { ...options, headers: httpHeaders };
			const fullURL: string = _.arrayJoin( [ this._baseURL, url ], '' );

			// In case files is file list or array files
			if ( files instanceof FileList || files instanceof Array ) {
				_.forEach( files, ( file: File ) => { formData.append( 'files[]', file, file.name ); } );
			} else {
				formData.append( 'file', files );
			}

			this._http.post( fullURL, formData, newOptions )
			.pipe( options?.reportProgress ? takeWhile( ( res: HttpResponse<any> ) => res.type <= 4 ) : take( 1 ) )
			.subscribe(
				( response: any ) => observer.next( response ),
				( error: any ) => observer.error( this._failCallback( error ) ),
				() => observer.complete()
			);
		} );
	}

	/**
	 * @param {ApiHeaders} headers
	 * @return {HttpHeaders}
	 */
	private _setHeaders( headers: ApiHeaders ): HttpHeaders {
		const authorized: any = this._storageService.getCookie( this.storageConfig.authorizedKey );
		const accessToken: string = this._accessToken || authorized?.accessToken;

		// eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
		if ( !_.has( headers, 'Authorization' ) ) headers[ 'Authorization' ] = `Bearer ${accessToken}`;

		return new HttpHeaders( headers );
	}

	/**
	 * @param {any} error
	 * @return {any}
	 */
	private _failCallback( error: any ): any {
		this.errorCatcher$.next( error );

		return error;
	}

}
