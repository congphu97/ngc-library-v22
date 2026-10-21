import { PipeTransform, Pipe } from '@angular/core';

import { REGEX } from '../resources';
import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'emoji' })
export class EmojiPipe implements PipeTransform {

	/**
	 * @param {string} unified
	 * @return {string}
	 */
	@Memoize()
	public transform( unified: string ): string {
		if ( new RegExp( REGEX.EMOJI ).test( unified ) ) return unified;

		return unified ? String.fromCodePoint( parseInt( unified, 16 ) ) : '';
	}

}
