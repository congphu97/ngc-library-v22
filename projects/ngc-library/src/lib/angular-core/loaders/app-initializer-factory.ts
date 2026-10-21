import { Injector } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import moment from 'moment-timezone';
import _ from 'lodash';

import { DATE_TIME_CONFIG, DateTimeConfig } from '../injection-token';
import { LocaleService } from '../services';

export function appInitializerFactory( translateService: TranslateService, localeService: LocaleService, injector: Injector ) {
	return () => new Promise<any>( ( resolve: any ) => {
		const locationInitialized: Promise<any> = injector.get( LOCATION_INITIALIZED, Promise.resolve() );
		const dateTimeConfig: DateTimeConfig = injector.get( DATE_TIME_CONFIG, null );
		const locale: string = localeService?.locale || 'vi';

		locationInitialized.then( () => {
			// Set moment timezone
			if ( dateTimeConfig?.timezone ) {
				moment.tz.setDefault( dateTimeConfig.timezone );
			}

			// Set moment language
			moment.locale( locale );

			// This language will be used as a fallback when a translation isn't found in the current language
			const langToSet: string = _.toLower( ( locale || 'vi' ).substring( 0, 2 ) );

			(translateService as any).setDefaultLang?.( langToSet ) || (translateService as any).setFallbackLang?.( langToSet );
			translateService.use( langToSet ).subscribe(
				() => console.info( `Successfully initialized '${langToSet}' language.'` ),
				() => console.error( `Problem with '${langToSet}' language initialization.'` ),
				resolve
			);
		} );
	} );
}
