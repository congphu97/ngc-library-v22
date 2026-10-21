import _ from 'lodash';

import { Pipe, PipeTransform } from '@angular/core';

import { Memoize } from '../decorators/memoize';

@Pipe({
	standalone: false,  name: 'markText' })
export class MarkTextPipe implements PipeTransform {

	/**
	 * @param {string} html
	 * @param {string} markText
	 * @param {boolean=} isSearchMode
	 * @param {boolean=} isEscapeHtmlTags
	 * @return {string}
	 */
	@Memoize()
	public transform( html: string, markText: string, isSearchMode?: boolean, isEscapeHtmlTags: boolean = true ): string {
		if ( isEscapeHtmlTags ) {
			html = _.escape( html );
			markText = _.escape( markText );
		}

		if ( html?.length && markText?.length ) {
			html = _.stripHtml( html );
			markText = _.stripHtml( markText );

			const allMatched: string[] = _( markText )
			.chain()
			.toSearchRegExp( 'gi' )
			.matchAll( html )
			// @ts-ignore
			.map( 0 )
			.uniq()
			.value();

			if ( allMatched.length ) {
				html = html.replace(
					new RegExp( _.map( allMatched, _.escapeRegExp ).join( '|' ), 'g' ),
					( matched: string ) => `<mark>${ matched }</mark>`
				);
			} else if ( isSearchMode && _.search( html, markText ) ) {
				html = _( html )
				.chain()
				.split( ' ' )
				.map( ( s: string, i: number ) => i < markText.length ? `<mark>${ s.charAt( 0 ) }</mark>` + s.slice( 1 ) : s )
				.join( ' ' )
				.value();
			}
		}

		return html;
	}

}
