import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { NgModule, Optional, Inject, Injector } from '@angular/core';
// import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import {
	CoreModule as AngularCoreModule,
	APP_CONFIG, SERVER_CONFIG, DATE_TIME_CONFIG,
	STORAGE_CONFIG, AppConfig, ServerConfig, DateTimeConfig,
	StorageConfig, LODASH_MIXIN
} from 'angular-core';
import _ from 'lodash';

// Apply lodash mixin
_.mixin( LODASH_MIXIN );

import { CONSTANT as APP_CONSTANT } from '../resources/constant';

import { FormModule } from './form.module';
import { CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent } from './components';
import { HighlightStateDirective, NgCacheIfDirective } from './directives';
import { AppearanceService } from './services';
import { I18n } from './loaders';
import {
	ChannelURLPipe, ColorPipe, ContrastPipe,
	ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
	FileIconPipe, FlagImagePipe, MetaEmbedPipe,
	PhonePipe
} from './pipes';

@NgModule({
	imports: [
		TranslatePipe, TranslateDirective,
		// LoadingBarHttpClientModule, LazyLoadImageModule, RoundProgressModule,
		RoundProgressModule,
		AngularCoreModule, FormModule, LazyLoadImageModule,
	],
	exports: [
		TranslatePipe, TranslateDirective,
		// LoadingBarHttpClientModule, LazyLoadImageModule, AngularCoreModule,
		AngularCoreModule, LazyLoadImageModule,
		/* Component Inject (Do not remove) */
		CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		HighlightStateDirective, NgCacheIfDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		ChannelURLPipe, ColorPipe, ContrastPipe,
		ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
		FileIconPipe, FlagImagePipe, MetaEmbedPipe,
		PhonePipe,
		/* End Pipe Inject (Do not remove) */
	],
	declarations: [
		/* Component Inject (Do not remove) */
		CopyrightComponent, DragZoneComponent, NotFoundComponent, SeenAllComponent,
		/* End Component Inject (Do not remove) */

		/* Directive Inject (Do not remove) */
		HighlightStateDirective, NgCacheIfDirective,
		/* End Directive Inject (Do not remove) */

		/* Pipe Inject (Do not remove) */
		ChannelURLPipe, ColorPipe, ContrastPipe,
		ControlErrorsPipe, EnvironmentPipe, ExamplePhoneNumberPipe,
		FileIconPipe, FlagImagePipe, MetaEmbedPipe,
		PhonePipe,
		/* End Pipe Inject (Do not remove) */
	],
	providers: [
		/* Service Inject (Do not remove) */
		AppearanceService,
		/* End Service Inject (Do not remove) */

		{ provide: APP_CONFIG, useClass: AppConfig },
		{ provide: SERVER_CONFIG, useClass: ServerConfig },
		{ provide: DATE_TIME_CONFIG, useClass: DateTimeConfig },
		{ provide: STORAGE_CONFIG, useClass: StorageConfig },
	],
})
@I18n({
	prefix: 'CORE',
	loader: ( lang: string ) => lang === 'vi' ? import( './i18n/vi.json' ) : import( './i18n/en.json' ),
})
export class CoreModule {

	/**
	 * @constructor
	 * @param {AppConfig} _appConfig
	 * @param {ServerConfig} _serverConfig
	 * @param {DateTimeConfig} _dateTimeConfig
	 * @param {StorageConfig} _storageConfig
	 */
	constructor() {}
}
