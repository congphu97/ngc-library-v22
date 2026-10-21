import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';

export class MultiTranslateHttpLoader implements TranslateLoader {

	/**
	 * @constructor
	 * @param {{prefix: string, suffix: string }[]} resources
	 * @param {HttpClient} _http
	 */
	constructor(
		public resources: { prefix: string; suffix: string }[] = [{ prefix: 'assets/i18n/', suffix: '.json' }],
		private _http: HttpClient
	) {}

	/**
	 * @param {string} lang
	 * @return {Observable<Record<string, unknown>>}
	 */
	@Memoize()
	public getTranslation( lang: string ): Observable<any> {
		return forkJoin(
			_.map( this.resources, ( config: any ) => this._http.get( `${config.prefix}${lang}${config.suffix}` ) )
		)
		.pipe(
			take( 1 ),
			map( ( response: any ) => _.reduce( response, ( a: any, b: any ) => _.assign( a, b ) ) )
		);
	}

}
