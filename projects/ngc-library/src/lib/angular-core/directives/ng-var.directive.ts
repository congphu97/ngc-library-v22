import {
	Directive, ViewContainerRef,
	TemplateRef, Input
} from '@angular/core';

@Directive({
	standalone: false,  selector: '[ngVar]', exportAs: 'ngVar' })
export class NgVarDirective {

	private _context: Record<string, unknown> = {};

	@Input()
	set ngVar( context: any ) {
		this._context.$implicit = this._context.ngVar = context;

		this._updateView();
	}

	/**
	 * @constructor
	 * @param {ViewContainerRef} _vcRef
	 * @param {TemplateRef} _templateRef
	 */
	constructor( private _vcRef: ViewContainerRef, private _templateRef: TemplateRef<any> ) {}

	/**
	 * @return {void}
	 */
	private _updateView() {
		this._vcRef.clear();
		this._vcRef.createEmbeddedView( this._templateRef, this._context );
	}

}
