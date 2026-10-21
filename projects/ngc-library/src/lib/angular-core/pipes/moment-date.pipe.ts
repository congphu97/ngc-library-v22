import { Pipe, PipeTransform, Optional, Inject } from '@angular/core';
import moment, { Moment } from 'moment-timezone';
import _ from 'lodash';

import { Memoize } from '../decorators/memoize';
import { CONSTANT } from '../resources';
import { DateTimeConfig, DATE_TIME_CONFIG } from '../injection-token';
import { EmptyPipe } from './empty.pipe';

@Pipe({
	standalone: false,  name: 'momentDate' })
export class MomentDatePipe extends EmptyPipe implements PipeTransform {

	/**
	 * @constructor
	 * @param {DateTimeConfig} _dateTimeConfig
	 */
	constructor( @Optional() @Inject( DATE_TIME_CONFIG ) private _dateTimeConfig: DateTimeConfig ) {
		super();
	}

	/**
	 * @param {any} input
	 * @param {string=} format
	 * @param {boolean=} showTime
	 * @return {string}
	 */
	@Memoize()
	public transform( input: any, format?: string, showTime?: boolean ): string {
		if ( _.isNil( input ) ) return super.transform();

		const output: Moment = moment( input );

		if ( !output.isValid() ) return super.transform();
		if ( format !== undefined ) return output.format( format );

		const dateFormat: string = this._dateTimeConfig.dateFormat || CONSTANT.DATE_FORMAT;
		const timeFormat: string = this._dateTimeConfig.timeFormat || CONSTANT.TIME_FORMAT;
		let sameDay: string = `[Today], ${dateFormat}`;
		let nextDay: string = `[Tomorrow], ${dateFormat}`;
		let lastDay: string = `[Yesterday], ${dateFormat}`;
		let nextWeek: string = dateFormat;
		let lastWeek: string = dateFormat;
		let sameElse: string = dateFormat;

		if ( showTime ) {
			sameDay = _.join( [ sameDay, timeFormat ], ' ' );
			nextDay = _.join( [ nextDay, timeFormat ], ' ' );
			lastDay = _.join( [ lastDay, timeFormat ], ' ' );
			nextWeek = lastWeek = sameElse = _.join( [ dateFormat, timeFormat ], ' ' );
		}

		return output.calendar( undefined, {
			sameDay, nextDay, lastDay,
			nextWeek, lastWeek, sameElse,
		} );
	}

}
