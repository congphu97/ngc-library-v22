import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

	/**
	 * @param {CanComponentDeactivate} component
	 * @return {Observable<boolean> | Promise<boolean> | boolean}
	 */
	public canDeactivate( component: CanComponentDeactivate ): Observable<boolean> | Promise<boolean> | boolean {
		return component.canDeactivate ? component.canDeactivate() : true;
	}

}
