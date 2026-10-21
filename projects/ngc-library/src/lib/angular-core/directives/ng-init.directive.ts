import {
	Directive, Input, Output,
	OnInit, EventEmitter
} from '@angular/core';
import _ from 'lodash';

@Directive({
	standalone: false,  selector: '[ngInit]', exportAs: 'ngInit' })
export class NgInitDirective implements OnInit {

	@Input() private _ngInit: () => any;

	@Output() private _resultChange: EventEmitter<any> = new EventEmitter<any>();

	/**
	 * @constructor
	 */
	ngOnInit() {
		if ( !_.isFunction( this._ngInit ) ) return;

		this._resultChange.emit( this._ngInit() );
	}

}
