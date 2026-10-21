import { Injectable, Inject, Optional } from '@angular/core';
import { SwPush, SwUpdate, VersionEvent } from '@angular/service-worker';
import { Observable, Observer, Subscription } from 'rxjs';
import { take, single, filter } from 'rxjs/operators';
import _ from 'lodash';

import { ApiService } from './api.service';
import { APP_CONFIG, AppConfig, SERVER_CONFIG, ServerConfig } from '../injection-token';

declare const window: Window;

export interface ServiceWorkerOption {
	serverPublicKey?: string;
	subscriptionEndpoint?: string;
	onNotificationClicked?: ( arg: {
		action: string;
		notification: NotificationOptions & { title: string };
	}) => void;
	callback?: () => void;
}

@Injectable()
export class ServiceWorkerService {

	private _notificationClicks$$: Subscription = new Subscription();
	private _swPushMessages$$: Subscription = new Subscription();

	/**
	 * @constructor
	 * @param {AppConfig} appConfig
	 * @param {ServerConfig} serverConfig
	 * @param {SwPush} _swPush
	 * @param {SwUpdate} _swUpdate
	 * @param {ApiService} _apiService
	 */
	constructor(
		@Optional() @Inject( APP_CONFIG ) public readonly appConfig: AppConfig,
		@Optional() @Inject( SERVER_CONFIG ) public readonly serverConfig: ServerConfig,
		private _swPush: SwPush,
		private _swUpdate: SwUpdate,
		private _apiService: ApiService
	) {}

	/**
	 * @return {void}
	 */
	public updateAvailableVersion() {
		this._swUpdate.versionUpdates
		.pipe( filter( ( event: VersionEvent ) => event.type === 'VERSION_READY' ) )
		.subscribe( () => {
			this._swUpdate.activateUpdate().then( () => document.location.reload() );
		} );
	}

	/**
	 * @param {ServiceWorkerOption} options
	 * @param {() => void} callback
	 * @return {void}
	 */
	public requestSubscription( options?: ServiceWorkerOption, callback?: ( subscription: PushSubscription ) => void ) {
		if ( !this._swPush.isEnabled || 'safari' in window ) return;

		const serverPublicKey: string = options?.serverPublicKey || this.serverConfig.fcmPublicKey;

		if ( !serverPublicKey ) return;

		// Get current subscription
		this._swPush.subscription
		.pipe( take( 1 ) )
		.pipe( single() )
		.subscribe( ( subscription: PushSubscription ) => {
			if ( subscription ) {
				// Send subscription to callback
				_.isFunction( callback ) && callback( subscription );
				return;
			}

			// Request new subscription
			this._swPush
			.requestSubscription({ serverPublicKey })
			.then( ( newSubscription: PushSubscription ) => {
				// Send subscription to callback
				_.isFunction( callback ) && callback( newSubscription );
			} );
		} );
	}

	/**
	 * @param {ServiceWorkerOption} options
	 * @param {Function} callback
	 * @return {void}
	 */
	public enablePushNotification( options?: ServiceWorkerOption, callback?: ( subscription: PushSubscription ) => void ) {
		if ( !this._swPush.isEnabled || 'safari' in window ) return;

		// Request subscription
		this.requestSubscription( options, ( subscription: PushSubscription ) => {
			const subscriptionEndpoint: string =
				options?.subscriptionEndpoint || this.serverConfig.fcmSubscriptionEndpoint;

			// Send subscription to the server
			subscriptionEndpoint && this._apiService
			.call( subscriptionEndpoint, 'POST', { subscription } )
			.subscribe();

			// Send subscription to callback
			_.isFunction( callback ) && callback( subscription );
		} );

		// Handle click notification event
		this._notificationClicks$$.unsubscribe();
		this._notificationClicks$$ = this._swPush.notificationClicks
		.subscribe( options.onNotificationClicked.bind( this ) );
	}

	/**
	 * @return {void}
	 */
	public disablePushNotification() {
		if ( !this._swPush.isEnabled || 'safari' in window ) return;

		// Unsubscribe all subscriptions
		this._swPush.subscription
		.pipe( take( 1 ) )
		.forEach( ( subscription: PushSubscription ) => subscription?.unsubscribe() );
	}

	/**
	 * @return {Observable}
	 */
	public listenPushNotification(): Observable<any> {
		return new Observable( ( observer: Observer<any> ) => {
			if ( !this._swPush.isEnabled || 'safari' in window ) {
				observer.next( undefined );
				observer.complete();
				return;
			}

			this._swPushMessages$$.unsubscribe();
			this._swPushMessages$$ = this._swPush.messages
			.subscribe(
				( payload: any ) => observer.next( payload ),
				( error: any ) => observer.error( error ),
				() => observer.complete()
			);
		} );
	}

}
