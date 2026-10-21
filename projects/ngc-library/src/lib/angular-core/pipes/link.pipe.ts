import { PipeTransform, Pipe } from '@angular/core';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'link' })
export class LinkPipe implements PipeTransform {

	/**
	 * @param {string} link
	 * @return {string}
	 */
	@Memoize()
	public transform( link: string ): string {
		if ( !link ) return;

		return /^http(s)?/.test( link ) ? link : `//${link}`;
	}

}
