import { Injectable, Optional, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import moment from 'moment-timezone';
// @ts-ignore
import vi from 'moment/locale/vi';
import _ from 'lodash';

import { APP_CONFIG, AppConfig } from '../injection-token';

moment.updateLocale( 'vi', {
	...vi,
	months	: _.split( 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12', '_' ),
	weekdays: _.split( 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy', '_' ),
} );

@Injectable()
export class LocaleService {

	public localeChange$: ReplaySubject<string> = new ReplaySubject<string>();

	private _locale: string;

	/**
	 * @param {string} locale
	 * @return {void}
	 */
	set locale( locale: string ) {
		if ( !locale ) return;

		this._locale = locale;

		// Store locale
		localStorage.setItem( 'locale', locale.toString() );

		// Set moment language
		moment.locale( locale );

		// The lang to use, if the lang isn't available, it will use the current loader to get them
		this._translateService.use( _.toLower( locale.substring( 0, 2 ) ) )
		.pipe( take( 1 ) )
		.subscribe();

		// Trigger locale changed
		this.localeChange$.next( locale );
	}

	/**
	 * @return {string}
	 */
	get locale(): string {
		return this._locale || localStorage.getItem( 'locale' ) || this.appConfig?.locale || 'vi';
	}

	/**
	 * @constructor
	 * @param {AppConfig} appConfig
	 * @param {TranslateService} _translateService
	 */
	constructor(
		@Optional() @Inject( APP_CONFIG ) public readonly appConfig: AppConfig,
		private _translateService: TranslateService
	) {}

}
