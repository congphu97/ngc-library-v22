import { Injectable, Inject, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { ReplaySubject } from 'rxjs';

import { APP_CONFIG, AppConfig } from '../injection-token';
import { StorageService } from './storage.service';

export interface PageURL {
	path: string;
	extras?: NavigationExtras;
}

@Injectable()
export class PageService {

	public cacheKey: string = '__curl';

	private _titleChange$: ReplaySubject<string> = new ReplaySubject<string>();
	private _processChange$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

	/**
	 * @return {ReplaySubject}
	 */
	get title(): ReplaySubject<string> {
		return this._titleChange$;
	}

	/**
	 * @return {ReplaySubject}
	 */
	get processing(): ReplaySubject<boolean> {
		return this._processChange$;
	}

	/**
	 * @constructor
	 * @param {AppConfig} appConfig
	 * @param {Router} _router
	 * @param {Title} _titleService
	 * @param {StorageService} _storageService
	 */
	constructor(
		@Optional() @Inject( APP_CONFIG ) public readonly appConfig: AppConfig,
		private _router: Router,
		private _titleService: Title,
		private _storageService: StorageService
	) {}

	/**
	 * @param {string} title
	 * @param {string=} prefix
	 * @return {void}
	 */
	public setTitle( title: string, prefix: string = this.appConfig.name ) {
		this._titleService.setTitle( prefix + ' - ' + title );
		this._titleChange$.next( title );
	}

	/**
	 * @return {string}
	 */
	public getTitle(): string {
		return this._titleService.getTitle();
	}

	/**
	 * @param {string} path
	 * @param {NavigationExtras} extras
	 * @return {void}
	 */
	public setCurrentURL( path: string, extras?: NavigationExtras ) {
		path
			? this._storageService.setLocal( this.cacheKey, { path, extras } )
			: this._storageService.removeLocal( this.cacheKey );
	}

	/**
	 * @return {PageURL}
	 */
	public getCurrentURL(): PageURL {
		return this._storageService.getLocal( this.cacheKey ) || { path: this.appConfig.mainPath };
	}

	/**
	 * @return {void}
	 */
	public navigateToCurrentURL() {
		const url: PageURL = this.getCurrentURL();

		this._router.navigate( [ url.path ], url.extras );
	}

	/**
	 * @param {boolean} isProcessing
	 * @return {void}
	 */
	public setProcessing( isProcessing: boolean ) {
		isProcessing
			? this._processChange$.next( true )
			: setTimeout( () => this._processChange$.next( false ), 1000 );
	}

}
