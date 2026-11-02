import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { COLOR } from '../resources/color';

@Component({
	standalone: false,
	selector: 'ngc-icon',
	templateUrl: './ngc-icon.html',
	styleUrls: ['./ngc-icon.scss'],
})
export class NgcIconComponent implements OnInit {
	private _name: string = '';

	@Input()
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value || '';
	}

	@Input()
	get icon(): string {
		return this._name;
	}
	set icon(value: string) {
		this._name = value || '';
	}

	@Input() public color: string;
	@Input() public size: string;

	@HostBinding('style.--icon-color')
	@HostBinding('style.color')
	get styleColor(): string {
		if (!this.color) return null;
		const trimmed = this.color.trim();
		const lower = trimmed.toLowerCase();
		if (lower === 'primary') {
			return 'var(--ngc-color-primary-default, #0a84ff)';
		}
		if (lower === 'success') {
			return 'var(--ngc-color-success-default, #34c759)';
		}
		if (lower === 'warning') {
			return 'var(--ngc-color-warning-default, #dfbf00)';
		}
		if (lower === 'danger') {
			return 'var(--ngc-color-danger-default, #ff3130)';
		}
		if (lower === 'info') {
			return 'var(--ngc-color-info-default, #0a84ff)';
		}
		const upper = trimmed.toUpperCase();
		if ((COLOR as any)[upper]) {
			return (COLOR as any)[upper];
		}
		return trimmed;
	}

	@HostBinding('style.--icon-font-size')
	@HostBinding('style.font-size')
	get styleFontSize(): string {
		return this.formatSize(this.size);
	}

	@HostBinding('style.--icon-line-height')
	@HostBinding('style.line-height')
	get styleLineHeight(): string {
		return this.formatSize(this.size);
	}

	@HostBinding('style.width')
	get styleWidth(): string {
		return this.formatSize(this.size);
	}

	@HostBinding('style.height')
	get styleHeight(): string {
		return this.formatSize(this.size);
	}

	public formatSize(size: string | number): string {
		if (!size) return null;
		const s = String(size).trim();
		if (!s) return null;
		return isNaN(Number(s)) ? s : `${s}px`;
	}

	private static readonly IONIC_ALIASES: Record<string, string> = {
		'check-circle': 'checkmark-circle',
		'circle-check': 'checkmark-circle',
		'checkmark-circle': 'checkmark-circle',
		'alert-circle': 'alert-circle',
		'warning-circle': 'alert-circle',
		'close-circle': 'close-circle',
		'circle-close': 'close-circle',
		'info-circle': 'information-circle',
		'information-circle': 'information-circle',
		'help-circle': 'help-circle',
		'sync': 'sync',
		'refresh': 'refresh',
		'time': 'time',
		'trash-bin': 'trash-bin',
		'document-text': 'document-text',
		'sparkles': 'sparkles',
		'chatbubble': 'chatbubble',
	};

	get ionicIconName(): string {
		if (!this._name) return '';
		const trimmed = this._name.trim();
		if (NgcIconComponent.IONIC_ALIASES[trimmed]) {
			return NgcIconComponent.IONIC_ALIASES[trimmed];
		}
		if (
			trimmed.endsWith('-outline') ||
			trimmed.endsWith('-sharp') ||
			trimmed.endsWith('-fill') ||
			trimmed.startsWith('logo-') ||
			trimmed === 'sunny' ||
			trimmed === 'moon'
		) {
			return trimmed;
		}
		return '';
	}

	get isIonic(): boolean {
		return Boolean(this.ionicIconName);
	}

	get iconClass(): string {
		if (!this._name) return '';
		return this._name.startsWith('icon-') ? this._name : `icon-${this._name}`;
	}

	constructor() {}

	ngOnInit() {}
}
