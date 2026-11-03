import { isDevMode } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export class CustomMissingTranslationHandler implements MissingTranslationHandler {

	/**
	 * @param {MissingTranslationHandlerParams} params
	 * @return {string}
	 */
	public handle( params: MissingTranslationHandlerParams ): string {
		isDevMode() && console.warn( 'Missing translation for key:', params.key );

		return params.key;
	}

}
