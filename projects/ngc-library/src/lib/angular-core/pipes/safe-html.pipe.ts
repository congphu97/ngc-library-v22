import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {

	/**
	 * @constructor
	 * @param {DomSanitizer} _sanitizer
	 */
	constructor( private _sanitizer: DomSanitizer ) {}

	/**
	 * @param {string} value
	 * @return {SafeHtml}
	 */
	@Memoize()
	public transform( value: string ): SafeHtml {
		return value ? this._sanitizer.bypassSecurityTrustHtml( value ) : '';
	}

}
