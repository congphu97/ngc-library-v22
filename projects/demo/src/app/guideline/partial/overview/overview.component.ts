import { Component, EventEmitter, Input, Output } from '@angular/core';
import { COMPONENT_GROUP_MAP, COMPONENT_GROUP_ORDER, COMPONENT_DESC_MAP, COMPONENT_ICON_MAP } from '../../guideline.constants';

export interface OverviewItem {
	name: string;
	label: string;
	desc?: string;
	icon: string;
}

export interface OverviewGroup {
	title: string;
	items: OverviewItem[];
}

@Component({
	selector: 'guideline-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	standalone: false,
})
export class GuidelineOverviewComponent {
	@Input() components: any[] = [];
	@Output() selectComponent = new EventEmitter<any>();
	@Output() clickGetStarted = new EventEmitter<void>();

	public goGetStarted() {
		this.clickGetStarted.emit();
	}

	public searchQuery = '';

	get filteredGroups(): OverviewGroup[] {
		const data = this.components && this.components.length > 0 ? this.components : [];
		if (data.length === 0) return [];

		// Group items
		const groupMap: Record<string, OverviewItem[]> = {};
		COMPONENT_GROUP_ORDER.forEach(groupName => {
			groupMap[groupName] = [];
		});

		data.forEach(item => {
			const label = item?.label;
			if (!label) return;
			const trimmed = label.trim();
			const groupName = COMPONENT_GROUP_MAP[trimmed] || COMPONENT_GROUP_MAP[label] || 'Overlays & Feedback';
			const overviewItem: OverviewItem = {
				name: trimmed,
				label: trimmed,
				desc: COMPONENT_DESC_MAP[trimmed] || COMPONENT_DESC_MAP[label] || 'Reusable design system component',
				icon: COMPONENT_ICON_MAP[trimmed] || COMPONENT_ICON_MAP[label] || item?.icon || 'collection'
			};

			if (groupMap[groupName]) {
				groupMap[groupName].push(overviewItem);
			} else {
				if (!groupMap['Overlays & Feedback']) groupMap['Overlays & Feedback'] = [];
				groupMap['Overlays & Feedback'].push(overviewItem);
			}
		});

		// Sort A-Z in each group
		COMPONENT_GROUP_ORDER.forEach(groupName => {
			if (groupMap[groupName]) {
				groupMap[groupName].sort((a, b) => a.label.localeCompare(b.label));
			}
		});

		// Format to OverviewGroup array
		let groups: OverviewGroup[] = COMPONENT_GROUP_ORDER
			.map(groupName => ({
				title: groupName,
				items: groupMap[groupName] || []
			}))
			.filter(g => g.items.length > 0);

		// Apply search filter if query exists
		if (this.searchQuery.trim()) {
			const query = this.searchQuery.toLowerCase();
			groups = groups.map(g => ({
				title: g.title,
				items: g.items.filter(item => 
					item.label.toLowerCase().includes(query) || 
					(item.desc && item.desc.toLowerCase().includes(query))
				)
			})).filter(g => g.items.length > 0);
		}

		return groups;
	}

	public clickItem(item: OverviewItem) {
		// Find matching component template ref
		const target = (item?.label || item?.name || '').trim().toLowerCase();
		const found = this.components.find(c => c && ((c.label || '').trim().toLowerCase() === target));
		if (found) {
			this.selectComponent.emit(found);
		} else {
			this.selectComponent.emit(item);
		}
	}
}
