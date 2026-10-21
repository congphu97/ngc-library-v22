import { Injectable } from '@angular/core';

const BREAKPOINTS: { [ key: string ]: number } = {
	xs: 600,
	sm: 960,
	md: 1280,
	lg: 1920,
};

@Injectable()
export class MediaService {

	private _media: number;

	/**
	 * @constructor
	 */
	constructor() {
		this._media = window.innerWidth;
	}

	/**
	 * @param {number} breakpoint - Breakpoint to check
	 * @return {boolean}
	 */
	public is( breakpoint: string ): boolean {
		this._media = window.innerWidth;

		return ( ( breakpoint === 'xs' && this._media < BREAKPOINTS.xs )
			|| ( breakpoint === 'gt-xs' && this._media >= BREAKPOINTS.xs )
			|| ( breakpoint === 'sm' && this._media >= BREAKPOINTS.xs && this._media < BREAKPOINTS.sm )
			|| ( breakpoint === 'gt-sm' && this._media >= BREAKPOINTS.sm )
			|| ( breakpoint === 'md' && this._media >= BREAKPOINTS.sm && this._media < BREAKPOINTS.md )
			|| ( breakpoint === 'gt-md' && this._media >= BREAKPOINTS.md )
			|| ( breakpoint === 'lg' && this._media >= BREAKPOINTS.md && this._media < BREAKPOINTS.lg )
			|| ( breakpoint === 'gt-lg' && this._media >= BREAKPOINTS.lg ) );
	}

	/**
	 * @param {number} width - Width to check
	 * @return {boolean}
	 */
	public gt( width: number ): boolean {
		this._media = window.innerWidth;
		return this._media >= width;
	}

	/**
	 * @param {number} width - Width to check
	 * @return {boolean}
	 */
	public lt( width: number ): boolean {
		this._media = window.innerWidth;
		return this._media < width;
	}

	/**
	 * @param {number} width - Viewport width
	 * @return {void}
	 */
	public setViewPort( width: number ) {
		// In case browser resizing
		if ( window.innerWidth < screen.width ) {
			document.body.classList.add( 'resizing' );
			return;
		}

		// In case real devices
		const meta: HTMLMetaElement = document.head.querySelector( 'meta[name=viewport]' );

		let viewPort: string = 'width=device-width, initial-scale=1.0, user-scalable=0';

		if ( width ) {
			const scale: number = window.innerWidth / width;

			viewPort = 'width='
				+ width
				+ ', minimum-scale='
				+ scale
				+ ', initial-scale='
				+ scale
				+ ', maximum-scale=1.0';
		}

		meta.setAttribute( 'content', viewPort );
	}

}
