import { Component, ChangeDetectionStrategy } from '@angular/core';
import moment from 'moment-timezone';

@Component({
	standalone: false,
	selector		: 'copyright',
	templateUrl		: './copyright.html',
	styleUrls		: [ './copyright.scss' ],
	host			: { class: 'copyright' },
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class CopyrightComponent {

	public year: number = moment().year();

}
