import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SketchComponent } from './sketch.component';

// NGC Components
import { NgcButtonModule } from '@app/@ngc/ngc-button';
import { NgcAvatarModule } from '@app/@ngc/ngc-avatar';
import { NgcBadgeModule } from '@app/@ngc/ngc-badge';
import { NgcTagModule } from '@app/@ngc/ngc-tag';
import { NgcCardModule } from '@app/@ngc/ngc-card';
import { NgcFormFieldModule } from '@app/@ngc/ngc-form-field';
import { NgcSearchBoxModule } from '@app/@ngc/ngc-search-box';
import { NgcSwitchModule } from '@app/@ngc/ngc-switch/ngc-switch.module';
import { NgcCheckboxModule } from '@app/@ngc/ngc-checkbox/ngc-checkbox.module';
import { NgcRadioModule } from '@app/@ngc/ngc-radio/ngc-radio.module';
import { NgcRangeInputModule } from '@app/@ngc/ngc-range-input';
import { NgcPhoneFieldModule } from '@app/@ngc/ngc-phone-field';
import { NgcAlertModule } from '@app/@ngc/ngc-alert';
import { NgcProgressBarModule } from '@app/@ngc/ngc-progress-bar/ngc-progress-bar.module';
import { NgcSkeletonModule } from '@app/@ngc/ngc-skeleton/ngc-skeleton.module';
import { NgcDividerModule } from '@app/@ngc/ngc-divider/ngc-divider.module';
import { NgcIconModule } from '@app/@ngc/ngc-icon/ngc-icon.module';
import { NgcTextareaModule } from '@app/@ngc/ngc-textarea/ngc-textarea.module';
import { NgcSelectModule } from '@app/@ngc/ngc-select/ngc-select.module';
import { NgcDatePickerModule } from '@app/@ngc/ngc-date-picker';
import { NgcButtonToggleModule } from '@app/@ngc/ngc-button-toggle';
import { NgcTabsModule } from '@app/@ngc/ngc-tabs';
import { NgcExpansionPanelModule } from '@app/@ngc/ngc-expansion-panel/ngc-expansion-panel.module';
import { NgcLoadingModule } from '@app/@ngc/ngc-loading/ngc-loading.module';
import { NgcPaginationModule } from '@app/@ngc/ngc-pagination/ngc-pagination.module';
import { NgcCollapseModule } from '@app/@ngc/ngc-collapse';

const routes: Routes = [
	{
		path: '',
		component: SketchComponent
	}
];

@NgModule({
	declarations: [SketchComponent],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(routes),
		DragDropModule,
		NgcButtonModule,
		NgcAvatarModule,
		NgcBadgeModule,
		NgcTagModule,
		NgcCardModule,
		NgcFormFieldModule,
		NgcSearchBoxModule,
		NgcSwitchModule,
		NgcCheckboxModule,
		NgcRadioModule,
		NgcRangeInputModule,
		NgcPhoneFieldModule,
		NgcAlertModule,
		NgcProgressBarModule,
		NgcSkeletonModule,
		NgcDividerModule,
		NgcIconModule,
		NgcTextareaModule,
		NgcSelectModule,
		NgcDatePickerModule,
		NgcButtonToggleModule,
		NgcTabsModule,
		NgcExpansionPanelModule,
		NgcLoadingModule,
		NgcPaginationModule,
		NgcCollapseModule
	],
	exports: [SketchComponent]
})
export class SketchModule {}
