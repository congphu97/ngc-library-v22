import { IObject } from '@core';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, MissingTranslationHandler, provideTranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { Observable, forkJoin, Observer } from 'rxjs';
import { take } from 'rxjs/operators';
import _ from 'lodash';

import { CustomMissingTranslationHandler } from 'angular-core';

const i18nModules: I18nAnotation[] = [];

interface I18nLoader {
	loader: Promise<any>;
	prefix?: string;
}

class WebpackTranslateLoader implements TranslateLoader {

	/**
	 * @param {string} lang
	 * @return {Observable}
	 */
	public getTranslation( lang: string ): Observable<IObject<string>> {
		const loaders: I18nLoader[] = [];

		_.forEach( i18nModules, ( anotation: I18nAnotation ) => {
			const prefix: string = anotation.prefix ? `${anotation.prefix}.` : '';
			const loader: Promise<IObject<string>> = anotation.loader ? anotation.loader( lang ) : undefined;

			loaders.push({ prefix, loader });
		} );

		return this._loadTranslations( loaders );
	}

	/**
	 * @param {I18nLoader[]} loaders
	 * @return {Observable}
	 */
	private _loadTranslations( loaders: I18nLoader[] ): Observable<IObject<string>> {
		return new Observable( ( observer: Observer<IObject<string>> ) => {
			const validLoaders = loaders.filter( l => !!l.loader );
			if ( !validLoaders.length ) {
				observer.next( {} );
				observer.complete();
				return;
			}
			forkJoin( _.map( validLoaders, 'loader' ) )
			.pipe( take( 1 ) )
			.subscribe({
				next: ( translations: IObject<string>[] ) => {
					let i: number = 0;

					observer.next(
						_.reduce( translations, ( current: IObject<string>, translation: IObject<string> ) => {
							const prefix: string[] = ( validLoaders[ i++ ].prefix || '' ).split( '.' );
							let _translation: any = ( translation as any )?.default || translation || {};

							for ( let j: number = prefix.length - 1; j >= 0; j-- ) {
								_translation = prefix[ j ]
									? { [ prefix[ j ] ]: _.clone( _translation ) }
									: _translation;
							}

							return _.merge( _translation, current );
						}, {} as any )
					);
					observer.complete();
				},
				error: ( err: any ) => {
					console.warn( 'Error loading i18n:', err );
					observer.next( {} );
					observer.complete();
				}
			});
		} );
	}

}

export interface I18nAnotation {
	prefix?: string;
	loader?: Function;
}

export function I18n( data?: I18nAnotation ) {
	return function f( _target: Function ) { i18nModules.push( data ); };
}

@NgModule({
	imports: [ TranslatePipe, TranslateDirective ],
	exports: [ TranslatePipe, TranslateDirective ],
})
export class TranslateModule {
	public static forRoot( config?: any ): ModuleWithProviders<TranslateModule> {
		return {
			ngModule: TranslateModule,
			providers: [
				provideTranslateService( config )
			]
		};
	}
}

// eslint-disable-next-line @typescript-eslint/naming-convention, id-denylist, id-match
export const I18nTranslateModule: ModuleWithProviders<TranslateModule> = TranslateModule.forRoot({
	loader						: { provide: TranslateLoader, useClass: WebpackTranslateLoader },
	missingTranslationHandler	: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
});
