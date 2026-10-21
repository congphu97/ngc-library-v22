import {
	Directive, ElementRef,
	AfterContentChecked, Input
} from '@angular/core';
import _ from 'lodash';

@Directive({
	standalone: false,  selector: '[aspectRatio]', exportAs: 'aspectRatio' })
export class AspectRatioDirective implements AfterContentChecked {

	@Input() public aspectRatio: string;

	/**
	 * @constructor
	 * @param {ElementRef} _elementRef
	 */
	constructor( private _elementRef: ElementRef ) {}

	/**
	 * @constructor
	 */
	ngAfterContentChecked() {
		if ( !this.aspectRatio ) return;

		const element: HTMLElement = this._elementRef.nativeElement;
		const elementWidth: number = element.clientWidth || 0;
		const aspectRatio: string[] = _.split( this.aspectRatio, ':' );

		if ( !aspectRatio[ 1 ] || !elementWidth ) return;

		const height: number = elementWidth * ( +aspectRatio[ 0 ] / +aspectRatio[ 1 ] );

		element.style.height = `${height}px`;
	}

}
