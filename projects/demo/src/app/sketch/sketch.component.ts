import { Component, OnInit, HostListener } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
	SKETCH_CATALOG,
	PRESET_TEMPLATES,
	SketchCatalogItem,
	PlacedComponent,
	PropDefinition,
	PresetTemplate
} from './sketch-catalog';

export interface DevicePreset {
	id: string;
	name: string;
	category: 'Mobile' | 'Foldables' | 'Tablets & Desktops' | 'Smart Displays' | 'Custom';
	width: number;
	height: number;
	frameType: 'dynamic-island' | 'notch' | 'punch-hole' | 'home-button' | 'tablet' | 'web' | 'display' | 'custom';
}

export const DEVICE_PRESETS: DevicePreset[] = [
	// Mobile
	{ id: 'iphone18promax', name: 'iPhone 18 Pro Max', category: 'Mobile', width: 440, height: 956, frameType: 'dynamic-island' },
	{ id: 'iphone18pro', name: 'iPhone 18 Pro', category: 'Mobile', width: 402, height: 874, frameType: 'dynamic-island' },
	{ id: 'iphone18', name: 'iPhone 18', category: 'Mobile', width: 393, height: 852, frameType: 'dynamic-island' },
	{ id: 'iphone16promax', name: 'iPhone 16 Pro Max', category: 'Mobile', width: 440, height: 956, frameType: 'dynamic-island' },
	{ id: 'iphone16', name: 'iPhone 16', category: 'Mobile', width: 393, height: 852, frameType: 'dynamic-island' },
	{ id: 'iphone13', name: 'iPhone 13 (Tai thỏ)', category: 'Mobile', width: 390, height: 844, frameType: 'notch' },
	{ id: 'iphonese', name: 'iPhone SE', category: 'Mobile', width: 375, height: 667, frameType: 'home-button' },
	{ id: 'pixel9pro', name: 'Pixel 9 Pro', category: 'Mobile', width: 412, height: 924, frameType: 'punch-hole' },
	{ id: 'pixel9', name: 'Pixel 9', category: 'Mobile', width: 412, height: 924, frameType: 'punch-hole' },
	{ id: 'pixel10', name: 'Pixel 10', category: 'Mobile', width: 412, height: 924, frameType: 'punch-hole' },
	{ id: 'galaxy_a55', name: 'Samsung Galaxy A55', category: 'Mobile', width: 384, height: 834, frameType: 'punch-hole' },

	// Foldables
	{ id: 'pixel9pro_fold', name: 'Pixel 9 Pro Fold', category: 'Foldables', width: 800, height: 752, frameType: 'tablet' },
	{ id: 'galaxy_zfold6', name: 'Galaxy Z Fold 6', category: 'Foldables', width: 768, height: 956, frameType: 'tablet' },

	// Tablets & Desktops
	{ id: 'ipad_mini', name: 'iPad Mini', category: 'Tablets & Desktops', width: 744, height: 1133, frameType: 'tablet' },
	{ id: 'ipad_pro_13', name: 'iPad Pro 13', category: 'Tablets & Desktops', width: 1024, height: 1366, frameType: 'tablet' },
	{ id: 'surface_pro_10', name: 'Surface Pro 10', category: 'Tablets & Desktops', width: 912, height: 1368, frameType: 'tablet' },
	{ id: 'web_desktop', name: 'Web Desktop', category: 'Tablets & Desktops', width: 1280, height: 800, frameType: 'web' },

	// Smart Displays
	{ id: 'nest_hub_max', name: 'Nest Hub Max', category: 'Smart Displays', width: 1280, height: 800, frameType: 'display' },

	// Responsive
	{ id: 'responsive', name: 'Responsive', category: 'Custom', width: 440, height: 956, frameType: 'custom' },
];

@Component({
	selector: 'app-sketch',
	templateUrl: './sketch.component.html',
	styleUrls: ['./sketch.component.scss'],
	standalone: false
})
export class SketchComponent implements OnInit {
	catalog: SketchCatalogItem[] = SKETCH_CATALOG;
	presets: PresetTemplate[] = PRESET_TEMPLATES;

	// Search & Filter
	searchQuery: string = '';
	selectedCategory: string = 'ALL';
	categories: string[] = ['ALL', 'General', 'Layout', 'Navigation', 'Data Entry', 'Data Display', 'Overlays & Feedback'];

	// Canvas State
	placedComponents: PlacedComponent[] = [];
	selectedItem: PlacedComponent | null = null;

	// Device Frame Options
	devicePresets: DevicePreset[] = DEVICE_PRESETS;
	selectedDevice: DevicePreset = DEVICE_PRESETS[0];
	deviceFrame: string = 'iphone18promax';
	deviceCustomWidth: number = 440;
	deviceCustomHeight: number = 956;
	showDeviceMenu: boolean = false;

	isMobileDark: boolean = false;
	showGeneratedCodeModal: boolean = false;
	generatedCode: string = '';

	// Clock & Status bar
	currentTime: string = '09:41';

	// Color Swatches for quick styling
	colorPresets: string[] = [
		'#2563eb', // Blue Primary
		'#10b981', // Emerald Success
		'#8b5cf6', // Violet Purple
		'#f59e0b', // Amber Warning
		'#ef4444', // Red Danger
		'#06b6d4', // Cyan Sky
		'#ec4899', // Pink Magenta
		'#1e293b', // Dark Slate
		'#ffffff'  // Pure White
	];

	// Template Presets
	selectedPresetId: string = 'login';
	showNewTemplateModal: boolean = false;
	newTemplateName: string = '';

	// Collapsible Sidebar Panels (Inspector, Typography & Component Tree)
	isInspectorCollapsed: boolean = false;
	isTreeCollapsed: boolean = true;
	isTypographyCollapsed: boolean = false;
	typographyScope: 'selected' | 'global' = 'selected';
	screenFontFamily: string = "'Inter', sans-serif";
	screenFontSize: number = 14;
	screenFontWeight: string = '400';

	fontFamilies: { name: string; value: string; desc: string }[] = [
		{ name: 'Inter', value: "'Inter', sans-serif", desc: 'Modern & Clean' },
		{ name: 'Outfit', value: "'Outfit', sans-serif", desc: 'Geometric Modern' },
		{ name: 'Lexend', value: "'Lexend', sans-serif", desc: 'High Readability' },
		{ name: 'Space Grotesk', value: "'Space Grotesk', sans-serif", desc: 'Tech & Sharp' },
		{ name: 'Roboto', value: "'Roboto', sans-serif", desc: 'Android Classic' },
		{ name: 'Poppins', value: "'Poppins', sans-serif", desc: 'Rounded Friendly' },
		{ name: 'Montserrat', value: "'Montserrat', sans-serif", desc: 'Geometric Elegant' },
		{ name: 'Fira Code', value: "'Fira Code', monospace", desc: 'Monospace Code' },
		{ name: 'System Sans', value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", desc: 'Native Device UI' }
	];

	fontSizePresets: number[] = [11, 13, 14, 16, 18, 22, 26];
	fontWeightPresets: { label: string; value: string }[] = [
		{ label: 'Regular', value: '400' },
		{ label: 'Medium', value: '500' },
		{ label: 'SemiBold', value: '600' },
		{ label: 'Bold', value: '700' }
	];

	// Floating Canvas Toolbar State
	canvasInteractionMode: 'select' | 'hand' = 'select';
	canvasZoom: number = 100;
	zoomLevels: number[] = [50, 75, 90, 100, 110, 125, 150];
	showCanvasGrid: boolean = true;
	isZenMode: boolean = false;

	// Pan / Hand tool state (Figma style)
	isSpacePressed: boolean = false;
	isPanning: boolean = false;
	panStartX: number = 0;
	panStartY: number = 0;
	canvasPanX: number = 0;
	canvasPanY: number = 0;

	get isHandModeActive(): boolean {
		return this.canvasInteractionMode === 'hand' || this.isSpacePressed;
	}

	setInteractionMode(mode: 'select' | 'hand'): void {
		this.canvasInteractionMode = mode;
	}

	onCanvasMouseDown(event: MouseEvent): void {
		if (this.isHandModeActive || event.button === 1 /* Middle click */) {
			this.isPanning = true;
			this.panStartX = event.clientX - this.canvasPanX;
			this.panStartY = event.clientY - this.canvasPanY;
			event.preventDefault();
		}
	}

	onCanvasMouseMove(event: MouseEvent): void {
		if (this.isPanning) {
			this.canvasPanX = event.clientX - this.panStartX;
			this.canvasPanY = event.clientY - this.panStartY;
			event.preventDefault();
		}
	}

	onCanvasMouseUp(): void {
		this.isPanning = false;
	}

	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent): void {
		const targetTag = (event.target as HTMLElement)?.tagName;
		if (targetTag === 'INPUT' || targetTag === 'TEXTAREA') return;

		if (event.code === 'Space' && !this.isSpacePressed) {
			this.isSpacePressed = true;
			event.preventDefault();
		} else if (event.key === 'v' || event.key === 'V') {
			this.setInteractionMode('select');
		} else if (event.key === 'h' || event.key === 'H') {
			this.setInteractionMode('hand');
		} else if (event.key === 'Escape') {
			if (this.isPreviewMode) {
				this.closePreviewMode();
			} else if (this.isZenMode) {
				this.isZenMode = false;
			}
		} else if (event.key === '\\') {
			this.toggleZenMode();
		}
	}

	@HostListener('window:keyup', ['$event'])
	handleKeyUp(event: KeyboardEvent): void {
		if (event.code === 'Space') {
			this.isSpacePressed = false;
			this.isPanning = false;
		}
	}

	zoomIn(): void {
		const next = this.zoomLevels.find(z => z > this.canvasZoom);
		if (next) {
			this.canvasZoom = next;
		} else if (this.canvasZoom < 200) {
			this.canvasZoom = Math.min(200, this.canvasZoom + 25);
		}
	}

	zoomOut(): void {
		const reversed = [...this.zoomLevels].reverse();
		const next = reversed.find(z => z < this.canvasZoom);
		if (next !== undefined) {
			this.canvasZoom = next;
		} else if (this.canvasZoom > 40) {
			this.canvasZoom = Math.max(40, this.canvasZoom - 20);
		}
	}

	cycleZoom(): void {
		const idx = this.zoomLevels.indexOf(this.canvasZoom);
		if (idx === -1 || idx === this.zoomLevels.length - 1) {
			this.canvasZoom = 100;
		} else {
			this.canvasZoom = this.zoomLevels[idx + 1];
		}
	}

	toggleCanvasGrid(): void {
		this.showCanvasGrid = !this.showCanvasGrid;
	}

	resetCanvasView(): void {
		this.canvasZoom = 100;
		this.canvasPanX = 0;
		this.canvasPanY = 0;
		this.canvasInteractionMode = 'select';
	}

	toggleZenMode(): void {
		this.isZenMode = !this.isZenMode;
	}

	// Live Interactive Preview State
	isPreviewMode: boolean = false;
	previewComponents: PlacedComponent[] = [];
	selectedPreviewDevice: DevicePreset = DEVICE_PRESETS[0];
	previewDeviceFrame: string = 'iphone18promax';
	previewDeviceWidth: number = 440;
	previewDeviceHeight: number = 956;
	previewDark: boolean = false;
	previewScale: number = 0.9;
	previewToastMessage: string = '';
	showPreviewDeviceMenu: boolean = false;
	private toastTimer: any = null;

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: MouseEvent): void {
		const target = event.target as HTMLElement;
		if (!target.closest('.device-menu-wrap')) {
			this.showDeviceMenu = false;
		}
		if (!target.closest('.preview-device-menu-wrap')) {
			this.showPreviewDeviceMenu = false;
		}
	}

	toggleDeviceMenu(event: MouseEvent): void {
		event.stopPropagation();
		this.showDeviceMenu = !this.showDeviceMenu;
	}

	togglePreviewDeviceMenu(event: MouseEvent): void {
		event.stopPropagation();
		this.showPreviewDeviceMenu = !this.showPreviewDeviceMenu;
	}

	getDevicesByCategory(category: string): DevicePreset[] {
		return this.devicePresets.filter(d => d.category === category);
	}

	selectDevice(device: DevicePreset): void {
		this.selectedDevice = device;
		this.deviceFrame = device.id;
		this.deviceCustomWidth = device.width;
		this.deviceCustomHeight = device.height;
		this.showDeviceMenu = false;
	}

	selectDeviceById(id: string): void {
		const dev = this.devicePresets.find(d => d.id === id);
		if (dev) {
			this.selectDevice(dev);
		}
	}

	rotateOrientation(): void {
		const temp = this.deviceCustomWidth;
		this.deviceCustomWidth = this.deviceCustomHeight;
		this.deviceCustomHeight = temp;
	}

	onDimensionManualChange(): void {
		const match = this.devicePresets.find(d => d.width === this.deviceCustomWidth && d.height === this.deviceCustomHeight);
		if (match) {
			this.selectedDevice = match;
			this.deviceFrame = match.id;
		} else {
			const resp = this.devicePresets.find(d => d.id === 'responsive')!;
			this.selectedDevice = resp;
			this.deviceFrame = 'responsive';
		}
	}

	openPreviewMode(): void {
		this.selectedPreviewDevice = this.selectedDevice;
		this.previewDeviceFrame = this.selectedDevice.id;
		this.previewDeviceWidth = this.deviceCustomWidth;
		this.previewDeviceHeight = this.deviceCustomHeight;
		this.previewDark = this.isMobileDark;
		this.previewComponents = JSON.parse(JSON.stringify(this.placedComponents));
		this.calculatePreviewScale();
		this.isPreviewMode = true;
	}

	closePreviewMode(): void {
		this.isPreviewMode = false;
		this.previewToastMessage = '';
		this.showPreviewDeviceMenu = false;
		if (this.toastTimer) {
			clearTimeout(this.toastTimer);
		}
	}

	selectPreviewDevice(device: DevicePreset): void {
		this.selectedPreviewDevice = device;
		this.previewDeviceFrame = device.id;
		this.previewDeviceWidth = device.width;
		this.previewDeviceHeight = device.height;
		this.showPreviewDeviceMenu = false;
		this.calculatePreviewScale();
	}

	rotatePreviewOrientation(): void {
		const temp = this.previewDeviceWidth;
		this.previewDeviceWidth = this.previewDeviceHeight;
		this.previewDeviceHeight = temp;
		this.calculatePreviewScale();
	}

	setPreviewDevice(frame: string): void {
		const found = this.devicePresets.find(d => d.id === frame);
		if (found) {
			this.selectPreviewDevice(found);
		} else {
			this.previewDeviceFrame = frame;
		}
	}

	calculatePreviewScale(): void {
		if (typeof window === 'undefined') return;
		const availHeight = window.innerHeight - 100; // minus topbar
		const availWidth = window.innerWidth - 30;
		const scaleY = availHeight / (this.previewDeviceHeight + 40);
		const scaleX = availWidth / (this.previewDeviceWidth + 40);
		const targetScale = Math.min(1, scaleY, scaleX);
		this.previewScale = Math.max(0.45, Math.min(1, Math.round(targetScale * 100) / 100));
	}

	resetPreviewData(): void {
		this.previewComponents = JSON.parse(JSON.stringify(this.placedComponents));
		this.triggerPreviewToast('Reset all component data');
	}

	triggerPreviewToast(msg: string): void {
		this.previewToastMessage = msg;
		if (this.toastTimer) {
			clearTimeout(this.toastTimer);
		}
		this.toastTimer = setTimeout(() => {
			this.previewToastMessage = '';
		}, 2500);
	}

	onPreviewBackdropClick(event: MouseEvent): void {
		const target = event.target as HTMLElement;
		if (target && target.classList.contains('preview-stage-viewport')) {
			this.closePreviewMode();
		}
	}

	onButtonClick(item: PlacedComponent, isInteractive: boolean): void {
		if (isInteractive) {
			this.triggerPreviewToast(`Button clicked: "${item.props.label || 'Button'}"`);
		}
	}

	onNavBack(isInteractive: boolean): void {
		if (isInteractive) {
			this.triggerPreviewToast('Navigated back');
		}
	}

	onNavAction(item: PlacedComponent, isInteractive: boolean): void {
		if (isInteractive) {
			this.triggerPreviewToast(`Action clicked: "${item.props.actionIcon || 'Action'}"`);
		}
	}

	getPresetName(presetId: string): string {
		const found = this.presets.find(p => p.id === presetId);
		return found ? found.name : 'Custom Screen';
	}

	openAndFocusFontSize(): void {
		this.isZenMode = false;
		this.isTypographyCollapsed = false;
		if (this.selectedItem) {
			this.typographyScope = 'selected';
		}
		setTimeout(() => {
			const targetSection = document.getElementById('sketchFontSizeSection');
			if (targetSection) {
				targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
				targetSection.classList.remove('focus-highlight-pulse');
				void targetSection.offsetWidth;
				targetSection.classList.add('focus-highlight-pulse');
				const slider = document.getElementById('typoSliderInput') as HTMLInputElement;
				if (slider) {
					slider.focus();
				}
				setTimeout(() => targetSection.classList.remove('focus-highlight-pulse'), 2500);
			}
		}, 100);
	}

	toggleInspector(): void {
		this.isInspectorCollapsed = !this.isInspectorCollapsed;
	}

	toggleTypography(): void {
		this.isTypographyCollapsed = !this.isTypographyCollapsed;
	}

	toggleTree(): void {
		this.isTreeCollapsed = !this.isTreeCollapsed;
	}

	getCurrentFontFamily(): string {
		if (this.typographyScope === 'selected' && this.selectedItem && this.selectedItem.props.fontFamily) {
			return this.selectedItem.props.fontFamily;
		}
		return this.screenFontFamily;
	}

	getCurrentFontSize(): number {
		if (this.typographyScope === 'selected' && this.selectedItem && this.selectedItem.props.fontSize) {
			return Number(this.selectedItem.props.fontSize);
		}
		return this.screenFontSize;
	}

	getCurrentFontWeight(): string {
		if (this.typographyScope === 'selected' && this.selectedItem && this.selectedItem.props.fontWeight) {
			return this.selectedItem.props.fontWeight;
		}
		return this.screenFontWeight;
	}

	get currentFontBadge(): string {
		const fontVal = this.getCurrentFontFamily();
		const matched = this.fontFamilies.find(f => f.value === fontVal || fontVal.includes(f.name));
		const name = matched ? matched.name : 'Custom';
		const size = this.getCurrentFontSize();
		return `${name} · ${size}px`;
	}

	setFontFamily(font: string): void {
		if (this.typographyScope === 'selected' && this.selectedItem) {
			this.selectedItem.props.fontFamily = font;
		} else {
			this.screenFontFamily = font;
		}
	}

	setFontSize(size: number): void {
		const val = Number(size);
		if (this.typographyScope === 'selected' && this.selectedItem) {
			this.selectedItem.props.fontSize = val;
		} else {
			this.screenFontSize = val;
		}
	}

	setFontWeight(weight: string): void {
		if (this.typographyScope === 'selected' && this.selectedItem) {
			this.selectedItem.props.fontWeight = weight;
		} else {
			this.screenFontWeight = weight;
		}
	}

	applyFontToAll(): void {
		const currentFont = this.getCurrentFontFamily();
		const currentSize = this.getCurrentFontSize();
		const currentWeight = this.getCurrentFontWeight();
		this.screenFontFamily = currentFont;
		this.screenFontSize = currentSize;
		this.screenFontWeight = currentWeight;
		this.placedComponents.forEach(c => {
			c.props.fontFamily = currentFont;
			c.props.fontSize = currentSize;
			c.props.fontWeight = currentWeight;
		});
	}

	resetTypography(): void {
		this.screenFontFamily = "'Inter', sans-serif";
		this.screenFontSize = 14;
		this.screenFontWeight = '400';
		if (this.selectedItem) {
			delete this.selectedItem.props.fontFamily;
			delete this.selectedItem.props.fontSize;
			delete this.selectedItem.props.fontWeight;
		}
	}

	// Responsive Mobile Tab Switcher ('palette' | 'canvas' | 'inspector')
	activeMobileTab: 'palette' | 'canvas' | 'inspector' = 'canvas';

	ngOnInit(): void {
		this.loadPreset('login');
		this.updateClock();
		if (typeof window !== 'undefined' && window.innerWidth <= 480) {
			this.canvasZoom = 75;
		}
	}

	updateClock(): void {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		this.currentTime = `${hours}:${minutes}`;
	}

	get filteredCatalog(): SketchCatalogItem[] {
		return this.catalog
			.filter(item => {
				const matchCategory = this.selectedCategory === 'ALL' || item.category === this.selectedCategory;
				const matchQuery = !this.searchQuery ||
					item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
					item.type.toLowerCase().includes(this.searchQuery.toLowerCase());
				return matchCategory && matchQuery;
			})
			.sort((a, b) => a.name.localeCompare(b.name));
	}

	loadPreset(presetId: string): void {
		this.selectedPresetId = presetId;
		const found = this.presets.find(p => p.id === presetId);
		if (found) {
			this.placedComponents = JSON.parse(JSON.stringify(found.components));
			this.selectedItem = this.placedComponents.length > 0 ? this.placedComponents[0] : null;
		}
	}

	// Create custom template workflow
	openNewTemplateDialog(): void {
		this.newTemplateName = `Custom Screen ${this.presets.length - 2}`;
		this.showNewTemplateModal = true;
	}

	confirmCreateTemplate(): void {
		const name = this.newTemplateName.trim() || 'Untitled Custom Screen';
		const id = `custom_${Date.now()}`;
		const newTemplate: PresetTemplate = {
			id,
			name,
			description: 'Custom user template created from scratch',
			icon: 'layout',
			components: []
		};

		this.presets.push(newTemplate);
		this.selectedPresetId = id;
		this.placedComponents = [];
		this.selectedItem = null;
		this.showNewTemplateModal = false;
	}

	// Save current canvas to active custom template
	saveCurrentAsTemplate(): void {
		const found = this.presets.find(p => p.id === this.selectedPresetId);
		if (found) {
			found.components = JSON.parse(JSON.stringify(this.placedComponents));
			alert(`Template "${found.name}" saved successfully!`);
		}
	}

	// Delete active custom template
	deleteCurrentTemplate(): void {
		if (!this.selectedPresetId.startsWith('custom_')) return;
		const foundIdx = this.presets.findIndex(p => p.id === this.selectedPresetId);
		if (foundIdx !== -1) {
			const templateName = this.presets[foundIdx].name;
			if (confirm(`Are you sure you want to delete custom template "${templateName}"?`)) {
				this.presets.splice(foundIdx, 1);
				this.loadPreset('login');
			}
		}
	}

	// Add component from palette
	addComponent(item: SketchCatalogItem, index?: number): void {
		const newComp: PlacedComponent = {
			id: `${item.type}_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
			type: item.type,
			name: item.name,
			props: JSON.parse(JSON.stringify(item.defaultProps))
		};

		if (typeof index === 'number' && index >= 0) {
			this.placedComponents.splice(index, 0, newComp);
		} else {
			this.placedComponents.push(newComp);
		}

		this.selectComponent(newComp);

		// Switch to Canvas on mobile/tablet so user sees added component
		if (typeof window !== 'undefined' && window.innerWidth < 1024) {
			this.activeMobileTab = 'canvas';
		}
	}

	// Reorder items in canvas drop list
	onDrop(event: CdkDragDrop<PlacedComponent[]>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(this.placedComponents, event.previousIndex, event.currentIndex);
		}
	}

	// Reorder items directly from the tree view
	onTreeDrop(event: CdkDragDrop<PlacedComponent[]>): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(this.placedComponents, event.previousIndex, event.currentIndex);
		}
	}

	selectComponent(comp: PlacedComponent, event?: MouseEvent): void {
		if (event) {
			event.stopPropagation();
		}
		this.selectedItem = comp;
	}

	removeComponent(id: string, event?: MouseEvent): void {
		if (event) {
			event.stopPropagation();
		}
		const idx = this.placedComponents.findIndex(c => c.id === id);
		if (idx !== -1) {
			this.placedComponents.splice(idx, 1);
			if (this.selectedItem?.id === id) {
				this.selectedItem = this.placedComponents[idx] || this.placedComponents[idx - 1] || null;
			}
		}
	}

	duplicateComponent(comp: PlacedComponent, event?: MouseEvent): void {
		if (event) {
			event.stopPropagation();
		}
		const idx = this.placedComponents.findIndex(c => c.id === comp.id);
		const duplicated: PlacedComponent = {
			id: `${comp.type}_${Date.now()}_copy`,
			type: comp.type,
			name: comp.name,
			props: JSON.parse(JSON.stringify(comp.props))
		};
		this.placedComponents.splice(idx + 1, 0, duplicated);
		this.selectComponent(duplicated);
	}

	moveComponent(index: number, direction: 'up' | 'down', event?: MouseEvent): void {
		if (event) {
			event.stopPropagation();
		}
		const targetIndex = direction === 'up' ? index - 1 : index + 1;
		if (targetIndex >= 0 && targetIndex < this.placedComponents.length) {
			moveItemInArray(this.placedComponents, index, targetIndex);
		}
	}

	clearCanvas(): void {
		if (confirm('Are you sure you want to clear the canvas?')) {
			this.placedComponents = [];
			this.selectedItem = null;
		}
	}

	// Quick color apply for active component
	applyPresetColor(hex: string): void {
		if (!this.selectedItem) return;

		this.selectedItem.props.customColor = hex;

		if (this.selectedItem.type === 'mobile-header') {
			this.selectedItem.props.bgColor = hex;
			this.selectedItem.props.textColor = hex === '#ffffff' ? '#1e293b' : '#ffffff';
		} else if (this.selectedItem.type === 'button') {
			this.selectedItem.props.color = hex;
		} else if ('color' in this.selectedItem.props) {
			this.selectedItem.props.color = hex;
		}
	}

	getSelectedDefinitions(): PropDefinition[] {
		if (!this.selectedItem) return [];
		const catalogItem = this.catalog.find(c => c.type === this.selectedItem!.type);
		return catalogItem ? catalogItem.propDefinitions : [];
	}

	setDeviceFrame(frame: string): void {
		const found = this.devicePresets.find(d => d.id === frame);
		if (found) {
			this.selectDevice(found);
		} else {
			this.deviceFrame = frame;
		}
	}

	toggleDarkMode(): void {
		this.isMobileDark = !this.isMobileDark;
	}

	// Dynamic Code Generator for Developer
	generateAngularCode(): void {
		let code = `<!-- Generated by NGC Mobile Studio -->\n<div class="mobile-container">\n`;
		for (const comp of this.placedComponents) {
			code += `  ${this.formatComponentSnippet(comp)}\n`;
		}
		code += `</div>\n`;
		this.generatedCode = code;
		this.showGeneratedCodeModal = true;
	}

	private formatComponentSnippet(comp: PlacedComponent): string {
		const p = comp.props;
		const widthStyle = p.width ? ` [style.width]="'${p.width}'"` : '';
		const heightStyle = p.height && p.height !== 'auto' ? ` [style.height]="'${p.height}'"` : '';
		const dimStyles = `${widthStyle}${heightStyle}`;

		switch (comp.type) {
			case 'mobile-header':
				return `<div class="nav-bar"${dimStyles} style="background-color: ${p.bgColor}; color: ${p.textColor};">\n    <h3>${p.title}</h3>\n  </div>`;
			case 'button':
				return `<button ngcButton color="${p.color}" [disabled]="${p.disabled}"${dimStyles}>\n    ${p.label}\n  </button>`;
			case 'clipboard':
				return `<ngc-clipboard-copy text="${p.text}" buttonText="${p.buttonText}"${dimStyles}></ngc-clipboard-copy>`;
			case 'color-typography':
				return `<ngc-design-token title="${p.title}" [primaryColor]="'${p.primaryColor}'"${dimStyles}></ngc-design-token>`;
			case 'icon':
				return `<ngc-icon name="${p.iconName}" color="${p.color}" size="${p.size}"${dimStyles}></ngc-icon>`;
			case 'expansion-panel':
				return `<ngc-expansion-panel title="${p.title}" [expanded]="${p.expanded}"${dimStyles}>\n    <p>${p.content}</p>\n  </ngc-expansion-panel>`;
			case 'collapse':
				return `<ngc-collapse header="${p.header}"${dimStyles}>\n    <p>${p.content}</p>\n  </ngc-collapse>`;
			case 'divider':
				return `<ngc-divider [align]="'${p.align}'"${dimStyles}>${p.text ? p.text : ''}</ngc-divider>`;
			case 'resize':
				return `<ngc-resize [splitRatio]="${p.splitRatio}"${dimStyles}></ngc-resize>`;
			case 'sheet':
				return `<ngc-drawer placement="bottom" title="${p.title}"${dimStyles}>\n    <div>${p.action1}</div>\n  </ngc-drawer>`;
			case 'sidebar':
				return `<ngc-drawer placement="left" title="${p.brand}"${dimStyles}>\n    <div class="sidebar-item">${p.item1}</div>\n  </ngc-drawer>`;
			case 'breadcrumb':
				return `<ngc-breadcrumb${dimStyles}>\n    <ngc-breadcrumb-item>${p.step1}</ngc-breadcrumb-item>\n    <ngc-breadcrumb-item>${p.step2}</ngc-breadcrumb-item>\n    <ngc-breadcrumb-item>${p.step3}</ngc-breadcrumb-item>\n  </ngc-breadcrumb>`;
			case 'menu':
				return `<ngc-menu title="${p.title}"${dimStyles}>\n    <ngc-menu-item>${p.item1}</ngc-menu-item>\n  </ngc-menu>`;
			case 'nav-menu':
				return `<ngc-navigation-menu${dimStyles}>\n    <ngc-nav-item active="${p.activeLink === p.link1}">${p.link1}</ngc-nav-item>\n    <ngc-nav-item active="${p.activeLink === p.link2}">${p.link2}</ngc-nav-item>\n  </ngc-navigation-menu>`;
			case 'pagination':
				return `<ngc-pagination [pageIndex]="${p.currentPage || 1}" [total]="${p.totalPages ? p.totalPages * 10 : 50}"${dimStyles}></ngc-pagination>`;
			case 'tabs':
				return `<ngc-tab-group color="${p.color}"${dimStyles}>\n    <ngc-tab label="${p.tab1}">Content 1</ngc-tab>\n    <ngc-tab label="${p.tab2}">Content 2</ngc-tab>\n  </ngc-tab-group>`;
			case 'avatar-picker':
				return `<ngc-avatar-picker label="${p.label}" initials="${p.previewInitials}"${dimStyles}></ngc-avatar-picker>`;
			case 'button-toggle':
				return `<ngc-button-toggle-group${dimStyles}>\n    <ngc-button-toggle value="1">${p.option1}</ngc-button-toggle>\n    <ngc-button-toggle value="2">${p.option2}</ngc-button-toggle>\n  </ngc-button-toggle-group>`;
			case 'checkbox':
				return `<ngc-checkbox label="${p.label}" [checked]="${p.checked}" color="${p.color}"${dimStyles}></ngc-checkbox>`;
			case 'color-picker':
				return `<ngc-color-picker label="${p.label}" [(color)]="selectedColor"${dimStyles}></ngc-color-picker>`;
			case 'date-picker':
				return `<ngc-date-picker label="${p.label}" placeholder="${p.placeholder}" [(ngModel)]="dateVal"${dimStyles}></ngc-date-picker>`;
			case 'dropdown':
				return `<ngc-dropdown label="${p.label}" placeholder="${p.placeholder}"${dimStyles}></ngc-dropdown>`;
			case 'emoji-picker':
				return `<ngc-emoji-picker label="${p.label}"${dimStyles}></ngc-emoji-picker>`;
			case 'form-field':
				return `<ngc-form-field label="${p.label}" hint="${p.hint}"${dimStyles}>\n    <input ngcFormFieldInput placeholder="${p.placeholder}" />\n  </ngc-form-field>`;
			case 'input':
				return `<ngc-form-field label="${p.label}"${dimStyles}>\n    <input ngcFormFieldInput placeholder="${p.placeholder}" [(ngModel)]="val" [disabled]="${p.disabled}" />\n  </ngc-form-field>`;
			case 'member-picker':
				return `<ngc-member-picker label="${p.label}"${dimStyles}></ngc-member-picker>`;
			case 'radio':
				return `<ngc-radio-group label="${p.groupLabel}"${dimStyles}>\n    <ngc-radio value="1">${p.option1}</ngc-radio>\n    <ngc-radio value="2">${p.option2}</ngc-radio>\n  </ngc-radio-group>`;
			case 'search-box':
				return `<ngc-search-box label="${p.label}" placeholder="${p.placeholder}" [clearable]="${p.clearable}"${dimStyles}></ngc-search-box>`;
			case 'select':
				return `<ngc-select label="${p.label}" placeholder="${p.placeholder}"${dimStyles}>\n    <ngc-option value="1">Option 1</ngc-option>\n  </ngc-select>`;
			case 'switch':
				return `<ngc-switch label="${p.label}" [checked]="${p.checked}" color="${p.color}"${dimStyles}></ngc-switch>`;
			case 'textarea':
				return `<ngc-textarea label="${p.label}" placeholder="${p.placeholder}" [rows]="${p.rows}"${dimStyles}></ngc-textarea>`;
			case 'avatar':
				return `<ngc-avatar label="${p.label}" color="${p.color}" [rounded]="${p.rounded}" size="${p.size}"${dimStyles}></ngc-avatar>`;
			case 'badge':
				return `<ngc-badge [content]="${p.value || p.content}" color="${p.color}"${dimStyles}></ngc-badge>`;
			case 'calendar':
				return `<ngc-calendar${dimStyles}></ngc-calendar>`;
			case 'card':
				return `<ngc-card${dimStyles}>\n    <div ngcCardHeader>${p.headerTitle}</div>\n    <div ngcCardContent>\n      <p>${p.content}</p>\n    </div>\n  </ngc-card>`;
			case 'carousel':
				return `<ngc-carousel${dimStyles}>\n    <ngc-carousel-item>${p.slide1}</ngc-carousel-item>\n  </ngc-carousel>`;
			case 'code-block':
				return `<ngc-code-block code="${p.code}" language="${p.language}"${dimStyles}></ngc-code-block>`;
			case 'comment':
				return `<ngc-comment author="${p.author}" content="${p.text}"${dimStyles}></ngc-comment>`;
			case 'data-table':
			case 'table':
				return `<ngc-table${dimStyles}>\n    <thead><tr><th>${p.col1 || 'Item'}</th><th>${p.col2 || 'Value'}</th></tr></thead>\n  </ngc-table>`;
			case 'tooltip':
				return `<button [ngcTooltip]="'${p.tipText}'"${dimStyles}>${p.targetText}</button>`;
			case 'tree':
				return `<ngc-tree [data]="treeData"${dimStyles}></ngc-tree>`;
			case 'alert':
				return `<ngc-alert color="${p.color}" icon="${p.icon}"${dimStyles}>${p.message}</ngc-alert>`;
			case 'collapse-menu':
				return `<ngc-collapse-menu title="${p.title}"${dimStyles}></ngc-collapse-menu>`;
			case 'confirm':
				return `<ngc-confirm title="${p.title}" message="${p.message}"${dimStyles}></ngc-confirm>`;
			case 'cropper':
				return `<ngc-cropper [aspectRatio]="1"${dimStyles}></ngc-cropper>`;
			case 'dialog':
				return `<ngc-dialog title="${p.title}"${dimStyles}>\n    <p>${p.content}</p>\n  </ngc-dialog>`;
			case 'drawer':
				return `<ngc-drawer title="${p.title}" placement="${p.placement}"${dimStyles}>\n    <p>${p.content}</p>\n  </ngc-drawer>`;
			case 'file-picker':
				return `<ngc-file-picker label="${p.label}"${dimStyles}></ngc-file-picker>`;
			case 'grid':
				return `<ngc-grid [columns]="${p.columns}"${dimStyles}></ngc-grid>`;
			case 'inline-input':
				return `<ngc-inline-input label="${p.label}" [(value)]="val"${dimStyles}></ngc-inline-input>`;
			case 'loading':
				return `<ngc-loading message="${p.message}" size="${p.size}"${dimStyles}></ngc-loading>`;
			case 'page':
				return `<ngc-page title="${p.title}" subtitle="${p.subtitle}"${dimStyles}></ngc-page>`;
			case 'phone-field':
				return `<ngc-phone-field label="${p.label}" [(ngModel)]="phoneVal"${dimStyles}></ngc-phone-field>`;
			case 'popover':
				return `<button [ngcPopover]="popoverContent"${dimStyles}>${p.triggerText}</button>`;
			case 'progress-bar':
				return `<ngc-progress-bar [value]="${p.value}" color="${p.color}" mode="${p.mode}"${dimStyles}></ngc-progress-bar>`;
			case 'range-input':
				return `<ngc-range-input label="${p.label}" [min]="${p.min}" [max]="${p.max}" [step]="${p.step}" [(ngModel)]="rangeVal"${dimStyles}></ngc-range-input>`;
			case 'scroll-bar':
				return `<ngc-scroll-bar${dimStyles}>\n    <p>${p.content}</p>\n  </ngc-scroll-bar>`;
			case 'skeleton':
				return `<ngc-skeleton [active]="${p.active}" shape="${p.shape}"${dimStyles}></ngc-skeleton>`;
			case 'tag':
				return `<ngc-tag label="${p.label}" color="${p.color}" [closable]="${p.closable}"${dimStyles}></ngc-tag>`;
			case 'timeline-item':
				return `<ngc-timeline${dimStyles}>\n    <ngc-timeline-item title="${p.title}" time="${p.date}">${p.subtitle}</ngc-timeline-item>\n  </ngc-timeline>`;
			case 'toast':
				return `<ngc-toast title="${p.title}" message="${p.message}" type="${p.type}"${dimStyles}></ngc-toast>`;
			case 'truncate':
				return `<ngc-truncate text="${p.text}" [lines]="${p.clampLines}"${dimStyles}></ngc-truncate>`;
			default:
				return `<!-- ${comp.name} -->`;
		}
	}
}
