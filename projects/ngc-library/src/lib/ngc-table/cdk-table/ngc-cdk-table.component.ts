import {
	Component, OnChanges, SimpleChanges,
	Input, ChangeDetectionStrategy, HostBinding
} from '@angular/core';
import {
	CDK_TABLE, STICKY_POSITIONING_LISTENER, CdkTable
} from '@angular/cdk/table';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

import { ScrollEvent, Unsubscriber, untilCmpDestroyed } from '../../core';

@Unsubscriber()
@Component({
	standalone: false,
	selector		: 'table[ngcCdkTable]',
	styleUrls		: [ './ngc-cdk-table.scss' ],
	host			: { class: 'ngc-cdk-table' },
	template		: '<ng-container headerRowOutlet></ng-container><ng-container rowOutlet></ng-container><ng-container noDataRowOutlet></ng-container><ng-container footerRowOutlet></ng-container>',
	changeDetection	: ChangeDetectionStrategy.OnPush,
	providers: [
		{ provide: CdkTable, useExisting: NgcCdkTableComponent },
		{ provide: CDK_TABLE, useExisting: NgcCdkTableComponent },
		{ provide: STICKY_POSITIONING_LISTENER, useValue: null },
	],
})
export class NgcCdkTableComponent<T> extends CdkTable<T> implements OnChanges {

	@HostBinding( 'class.ngc-cdk-table--scrolling' )
	get classScrolling(): boolean { return this.isScrollingX; }

	@Input() public scrolling$: Observable<ScrollEvent>;

	public isScrollingX: boolean;

	/**
	 * @constructor
	 * @param {SimpleChanges} changes
	 */
	ngOnChanges( changes: SimpleChanges ) {
		if ( !changes.scrolling$ || !this.scrolling$ ) return;

		this.scrolling$
		.pipe( untilCmpDestroyed( this ) )
		.subscribe( ( event: ScrollEvent ) => {
			this.isScrollingX = event.scrollLeft > 0;

			this._changeDetectorRef.markForCheck();
		} );
	}

	/**
	 * @param {XLSX.Table2SheetOpts} options
	 * @return {XLSX.WorkSheet}
	 */
	public export( options?: XLSX.Table2SheetOpts ): XLSX.WorkSheet {
		return XLSX.utils.table_to_sheet( this._elementRef.nativeElement, options );
	}

	/**
	 * @param {string} filename
	 * @param {boolean} isOnlyHeader
	 * @return {void}
	 */
	public download( filename: string, isOnlyHeader: boolean = false ) {
		const element: HTMLTableElement = this._elementRef.nativeElement.cloneNode( true );

		isOnlyHeader && element.querySelector( 'tbody' ).remove();

		XLSX.writeFile( XLSX.utils.table_to_book( element ), filename );
	}

}
