import {
	Component, ViewEncapsulation, Input,
	ChangeDetectionStrategy, HostBinding
} from '@angular/core';

import { CoerceBoolean } from '@core';

@Component({
	standalone: false,
	selector		: 'ngc-divider',
	template		: '',
	styleUrls		: [ './ngc-divider.scss' ],
	host			: { class: 'ngc-divider' },
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
})
export class NgcDividerComponent {

	@HostBinding( 'class.ngc-divider--vertical' )
	get classVertical(): boolean { return this.vertical; }

	@Input() @CoerceBoolean() public vertical: boolean;

}
