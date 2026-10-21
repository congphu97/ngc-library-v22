import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

	public dataChange$: BehaviorSubject<any> = new BehaviorSubject<any>( undefined );
	public namespaceDataChange$: { [ key: string ]: BehaviorSubject<any> } = {};

	private _data: any = {};

	/**
	 * @param {string} name
	 * @param {any} data
	 * @return {void}
	 */
	public setData( name: string, data: any ) {
		this._data[ name ] = data;

		if ( !this.namespaceDataChange$[ name ] ) this.namespaceDataChange$[ name ] = new BehaviorSubject<any>( undefined );

		this.dataChange$.next( this._data );
		this.namespaceDataChange$[ name ].next( this._data[ name ] );
	}

	/**
	 * @param {string} name
	 * @return {any}
	 */
	public getData( name: string ): any {
		return this._data[ name ];
	}

	/**
	 * @param {string} name
	 * @return {void}
	 */
	public removeData( name: string ) {
		delete this._data[ name ];
	}

}
