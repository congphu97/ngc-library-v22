import { Injectable } from '@angular/core';
import { Observable, Observer, fromEvent, merge, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NetworkService {

	get online$(): Observable<boolean> {
		return merge(
			fromEvent( window, 'offline' ).pipe( map( () => false ) ),
			fromEvent( window, 'online' ).pipe( map( () => true ) ),
			new Observable(( ob: Observer<boolean> ) => {
				ob.next( navigator.onLine );
				ob.complete();
			})
		);
	}

	/**
	 * @param {number=} intervalMs
	 * @return {void}
	 */
	public detectOnline( intervalMs: number = 5000 ): Observable<boolean> {
		return new Observable<boolean>(( observer: Observer<boolean> ) => {
			interval( intervalMs ).subscribe( () => this.online$.subscribe( observer.next.bind( observer ) ) );
		});
	}

}
