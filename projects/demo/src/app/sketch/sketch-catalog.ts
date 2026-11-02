export interface PropOption {
	label: string;
	value: any;
}

export interface PropDefinition {
	key: string;
	label: string;
	type: 'text' | 'select' | 'boolean' | 'color' | 'number';
	options?: PropOption[];
	min?: number;
	max?: number;
	step?: number;
}

export interface SketchCatalogItem {
	type: string;
	name: string;
	category: 'General' | 'Layout' | 'Navigation' | 'Data Entry' | 'Data Display' | 'Overlays & Feedback';
	icon: string;
	defaultProps: Record<string, any>;
	propDefinitions: PropDefinition[];
}

export interface PlacedComponent {
	id: string;
	type: string;
	name: string;
	props: Record<string, any>;
}

export interface PresetTemplate {
	id: string;
	name: string;
	description: string;
	icon: string;
	components: PlacedComponent[];
}

// Common dimensional properties for all components
const DIMENSION_PROPS: PropDefinition[] = [
	{ key: 'width', label: 'Width', type: 'select', options: [
		{ label: 'Full Width (100%)', value: '100%' },
		{ label: 'Auto Width', value: 'auto' },
		{ label: '85%', value: '85%' },
		{ label: '70%', value: '70%' },
		{ label: '50%', value: '50%' },
		{ label: '320px', value: '320px' },
		{ label: '260px', value: '260px' },
		{ label: '180px', value: '180px' },
		{ label: '120px', value: '120px' }
	] },
	{ key: 'height', label: 'Height', type: 'select', options: [
		{ label: 'Auto Height', value: 'auto' },
		{ label: '36px', value: '36px' },
		{ label: '42px', value: '42px' },
		{ label: '48px', value: '48px' },
		{ label: '60px', value: '60px' },
		{ label: '80px', value: '80px' },
		{ label: '120px', value: '120px' },
		{ label: '160px', value: '160px' },
		{ label: '200px', value: '200px' }
	] }
];

export const SKETCH_CATALOG: SketchCatalogItem[] = [
	{
		type: 'expansion-panel',
		name: 'Accordion',
		category: 'Layout',
		icon: 'collapse',
		defaultProps: {
			title: 'Frequently Asked Questions',
			description: 'Tap to view details & warranty terms',
			content: 'This product includes a 12-month standard replacement guarantee with 24/7 dedicated customer care.',
			expanded: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Header Title', type: 'text' },
			{ key: 'description', label: 'Subtitle Description', type: 'text' },
			{ key: 'content', label: 'Expanded Body Text', type: 'text' },
			{ key: 'expanded', label: 'Expanded by Default', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'alert',
		name: 'Alert',
		category: 'Overlays & Feedback',
		icon: 'warning',
		defaultProps: {
			message: 'Security Notice: Never share your one-time passwords with anyone.',
			color: 'info',
			icon: 'warning',
			closable: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'message', label: 'Alert Message', type: 'text' },
			{ key: 'color', label: 'Severity Level', type: 'select', options: [
				{ label: 'Information Blue', value: 'info' },
				{ label: 'Success Green', value: 'success' },
				{ label: 'Warning Amber', value: 'warning' },
				{ label: 'Danger Red', value: 'danger' }
			] },
			{ key: 'closable', label: 'Show Close Button', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'avatar',
		name: 'Avatar',
		category: 'Data Display',
		icon: 'user',
		defaultProps: {
			label: 'Alex Rivera',
			size: 'medium',
			rounded: true,
			color: 'primary',
			imageUrl: '',
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Name / Initials', type: 'text' },
			{ key: 'imageUrl', label: 'Image URL (optional)', type: 'text' },
			{ key: 'size', label: 'Size', type: 'select', options: [
				{ label: 'Small (32px)', value: 'small' },
				{ label: 'Medium (42px)', value: 'medium' },
				{ label: 'Large (54px)', value: 'large' }
			] },
			{ key: 'rounded', label: 'Circle Rounded', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'avatar-picker',
		name: 'Avatar Picker',
		category: 'Data Entry',
		icon: 'users',
		defaultProps: {
			label: 'Profile Photo',
			hint: 'Tap to upload or take a photo',
			previewInitials: 'JD',
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Title Label', type: 'text' },
			{ key: 'hint', label: 'Instruction Hint', type: 'text' },
			{ key: 'previewInitials', label: 'Initials Preview', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'badge',
		name: 'Badge',
		category: 'Data Display',
		icon: 'label',
		defaultProps: {
			value: '9+',
			color: '#ef4444',
			isDot: false,
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'value', label: 'Badge Text', type: 'text' },
			{ key: 'color', label: 'Badge Color', type: 'color' },
			{ key: 'isDot', label: 'Dot Only Mode', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'breadcrumb',
		name: 'Breadcrumb',
		category: 'Navigation',
		icon: 'chevron-right',
		defaultProps: {
			step1: 'Home',
			step2: 'Catalog',
			step3: 'Smartphones',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'step1', label: 'Root Link', type: 'text' },
			{ key: 'step2', label: 'Middle Level', type: 'text' },
			{ key: 'step3', label: 'Current Page', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'button',
		name: 'Button',
		category: 'General',
		icon: 'sliders',
		defaultProps: {
			label: 'Click Me',
			color: 'primary',
			disabled: false,
			fullWidth: true,
			width: '100%',
			height: '42px'
		},
		propDefinitions: [
			{ key: 'label', label: 'Button Label', type: 'text' },
			{ key: 'color', label: 'Button Color', type: 'select', options: [
				{ label: 'Primary Brand', value: 'primary' },
				{ label: 'White Clean', value: 'white' },
				{ label: 'Danger Red', value: '#ef4444' },
				{ label: 'Success Green', value: '#10b981' },
				{ label: 'Dark Slate', value: '#1e293b' }
			] },
			{ key: 'disabled', label: 'Disabled', type: 'boolean' },
			{ key: 'fullWidth', label: 'Full Width', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'button-toggle',
		name: 'Button Toggle',
		category: 'Data Entry',
		icon: 'switch',
		defaultProps: {
			option1: 'Day',
			option2: 'Week',
			option3: 'Month',
			selectedIndex: 0,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'option1', label: 'Option 1 Label', type: 'text' },
			{ key: 'option2', label: 'Option 2 Label', type: 'text' },
			{ key: 'option3', label: 'Option 3 Label', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'calendar',
		name: 'Calendar',
		category: 'Data Display',
		icon: 'calendar',
		defaultProps: {
			monthTitle: 'November 2026',
			selectedDay: 18,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'monthTitle', label: 'Month Header', type: 'text' },
			{ key: 'selectedDay', label: 'Selected Day Date', type: 'number', min: 1, max: 31 },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'card',
		name: 'Card',
		category: 'Data Display',
		icon: 'collection',
		defaultProps: {
			headerTitle: 'Order Summary #4092',
			content: 'Your items are being packed and verified by warehouse logistics.',
			showFooter: true,
			footerText: 'Track Delivery Status',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'headerTitle', label: 'Card Title', type: 'text' },
			{ key: 'content', label: 'Body Content', type: 'text' },
			{ key: 'showFooter', label: 'Show Footer Bar', type: 'boolean' },
			{ key: 'footerText', label: 'Footer Action Text', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'carousel',
		name: 'Carousel',
		category: 'Data Display',
		icon: 'board',
		defaultProps: {
			slide1: 'Exclusive Weekend Sale - 50% OFF',
			slide2: 'New Arrival Tech Gadgets 2026',
			slide3: 'Free Standard Shipping Worldwide',
			autoPlay: true,
			width: '100%',
			height: '110px'
		},
		propDefinitions: [
			{ key: 'slide1', label: 'Slide 1 Title', type: 'text' },
			{ key: 'slide2', label: 'Slide 2 Title', type: 'text' },
			{ key: 'slide3', label: 'Slide 3 Title', type: 'text' },
			{ key: 'autoPlay', label: 'Auto Slide', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'checkbox',
		name: 'Checkbox',
		category: 'Data Entry',
		icon: 'checkbox',
		defaultProps: {
			label: 'I accept the Terms & Conditions',
			checked: true,
			disabled: false,
			color: 'primary',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Label Text', type: 'text' },
			{ key: 'checked', label: 'Checked by Default', type: 'boolean' },
			{ key: 'disabled', label: 'Disabled State', type: 'boolean' },
			{ key: 'color', label: 'Color Accent', type: 'select', options: [
				{ label: 'Primary Blue', value: 'primary' },
				{ label: 'Success Green', value: 'success' },
				{ label: 'Danger Red', value: 'danger' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'clipboard',
		name: 'Clipboard',
		category: 'General',
		icon: 'clipboard',
		defaultProps: {
			text: 'https://ngc-design.io/invite/code-8892',
			buttonText: 'Copy',
			copiedText: 'Copied!',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'text', label: 'Copy Content', type: 'text' },
			{ key: 'buttonText', label: 'Button Label', type: 'text' },
			{ key: 'copiedText', label: 'Success Message', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'code-block',
		name: 'Code Block',
		category: 'Data Display',
		icon: 'code-block',
		defaultProps: {
			code: 'const user = { id: \"u_992\", role: \"admin\" };',
			language: 'typescript',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'code', label: 'Code Snippet', type: 'text' },
			{ key: 'language', label: 'Syntax Language', type: 'select', options: [
				{ label: 'TypeScript', value: 'typescript' },
				{ label: 'JavaScript', value: 'javascript' },
				{ label: 'HTML', value: 'html' },
				{ label: 'CSS', value: 'css' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'collapse',
		name: 'Collapse',
		category: 'Layout',
		icon: 'minimize-left',
		defaultProps: {
			header: 'Show More Details',
			content: 'Detailed specifications and breakdown metrics are tucked neatly inside this collapse drawer.',
			isOpened: false,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'header', label: 'Collapse Trigger Label', type: 'text' },
			{ key: 'content', label: 'Content Inside', type: 'text' },
			{ key: 'isOpened', label: 'Initially Opened', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'collapse-menu',
		name: 'Collapse Menu',
		category: 'Layout',
		icon: 'list',
		defaultProps: {
			title: 'Navigation Menu Accordion',
			subitem1: 'Billing & Invoices',
			subitem2: 'Security Tokens',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Header Title', type: 'text' },
			{ key: 'subitem1', label: 'Sub Item 1', type: 'text' },
			{ key: 'subitem2', label: 'Sub Item 2', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'color-typography',
		name: 'Color & Typography',
		category: 'General',
		icon: 'palette',
		defaultProps: {
			title: 'Theme Tokens',
			primaryColor: '#2563eb',
			secondaryColor: '#10b981',
			sampleText: 'Aa The quick brown fox jumps',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Palette Title', type: 'text' },
			{ key: 'primaryColor', label: 'Primary Token', type: 'color' },
			{ key: 'secondaryColor', label: 'Secondary Token', type: 'color' },
			{ key: 'sampleText', label: 'Typography Specimen', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'color-picker',
		name: 'Color Picker',
		category: 'Data Entry',
		icon: 'pick-color',
		defaultProps: {
			label: 'Accent Theme Color',
			selectedColor: '#2563eb',
			showHexInput: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Picker Label', type: 'text' },
			{ key: 'selectedColor', label: 'Default Color', type: 'color' },
			{ key: 'showHexInput', label: 'Show HEX Input', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'comment',
		name: 'Comment',
		category: 'Data Display',
		icon: 'message',
		defaultProps: {
			author: 'Jessica Lee',
			timeAgo: '15 mins ago',
			text: 'The newly added mobile simulator workflow looks remarkably clean and responsive!',
			likesCount: 12,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'author', label: 'Author Name', type: 'text' },
			{ key: 'timeAgo', label: 'Timestamp', type: 'text' },
			{ key: 'text', label: 'Comment Body', type: 'text' },
			{ key: 'likesCount', label: 'Likes Count', type: 'number', min: 0 },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'confirm',
		name: 'Confirm',
		category: 'Overlays & Feedback',
		icon: 'help',
		defaultProps: {
			title: 'Delete this project?',
			message: 'This action is irreversible. All associated repositories will be purged.',
			confirmText: 'Yes, Delete',
			cancelText: 'Cancel',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Confirm Title', type: 'text' },
			{ key: 'message', label: 'Warning Text', type: 'text' },
			{ key: 'confirmText', label: 'Confirm Button Label', type: 'text' },
			{ key: 'cancelText', label: 'Cancel Button Label', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'cropper',
		name: 'Cropper',
		category: 'Data Entry',
		icon: 'crop',
		defaultProps: {
			aspectRatio: '1:1 (Square)',
			helperText: 'Drag handles to adjust crop frame',
			width: '100%',
			height: '110px'
		},
		propDefinitions: [
			{ key: 'aspectRatio', label: 'Aspect Ratio', type: 'select', options: [
				{ label: '1:1 Square', value: '1:1 (Square)' },
				{ label: '16:9 Landscape', value: '16:9' },
				{ label: '4:3 Standard', value: '4:3' }
			] },
			{ key: 'helperText', label: 'Instruction Text', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'data-table',
		name: 'Data Table',
		category: 'Data Display',
		icon: 'data-list',
		defaultProps: {
			col1: 'Product',
			col2: 'Qty',
			col3: 'Price',
			row1: 'Wireless AirPods, 1, ',
			row2: 'MagSafe Charger, 2, ',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'col1', label: 'Column 1 Header', type: 'text' },
			{ key: 'col2', label: 'Column 2 Header', type: 'text' },
			{ key: 'col3', label: 'Column 3 Header', type: 'text' },
			{ key: 'row1', label: 'Row 1 Data', type: 'text' },
			{ key: 'row2', label: 'Row 2 Data', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'date-picker',
		name: 'Date Picker',
		category: 'Data Entry',
		icon: 'calendar-check',
		defaultProps: {
			label: 'Date of Birth',
			placeholder: 'DD/MM/YYYY',
			defaultValue: '2026-11-01',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			{ key: 'defaultValue', label: 'Default Selected Date', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'dialog',
		name: 'Dialog',
		category: 'Overlays & Feedback',
		icon: 'message',
		defaultProps: {
			title: 'Permission Request',
			content: 'Allow Sketch Studio to access camera for barcode scanning?',
			primaryAction: 'Allow Access',
			secondaryAction: "Don't Allow",
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Dialog Header', type: 'text' },
			{ key: 'content', label: 'Message Body', type: 'text' },
			{ key: 'primaryAction', label: 'Primary Button', type: 'text' },
			{ key: 'secondaryAction', label: 'Secondary Button', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'divider',
		name: 'Divide',
		category: 'Layout',
		icon: 'minus',
		defaultProps: {
			text: 'OR CONTINUE WITH',
			align: 'center',
			dashed: false,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'text', label: 'Divider Label', type: 'text' },
			{ key: 'align', label: 'Text Alignment', type: 'select', options: [
				{ label: 'Center', value: 'center' },
				{ label: 'Left', value: 'left' },
				{ label: 'Right', value: 'right' }
			] },
			{ key: 'dashed', label: 'Dashed Style', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'drawer',
		name: 'Drawer',
		category: 'Layout',
		icon: 'sidebar',
		defaultProps: {
			title: 'Filter Products',
			content: 'Select price range, brand and ratings.',
			placement: 'bottom',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Drawer Title', type: 'text' },
			{ key: 'content', label: 'Body Text', type: 'text' },
			{ key: 'placement', label: 'Slide Direction', type: 'select', options: [
				{ label: 'Bottom Sheet', value: 'bottom' },
				{ label: 'Right Side', value: 'right' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'dropdown',
		name: 'Dropdown',
		category: 'Data Entry',
		icon: 'dropdown',
		defaultProps: {
			label: 'Select Country',
			placeholder: 'Choose country...',
			optionsText: 'Vietnam, United States, Japan, Singapore',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Dropdown Label', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			{ key: 'optionsText', label: 'Options (comma separated)', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'emoji-picker',
		name: 'Emoji Picker',
		category: 'Data Entry',
		icon: 'emoji',
		defaultProps: {
			label: 'Express your feeling',
			selectedEmoji: '🎉',
			recentEmojis: '👍,❤️,🎉,🚀,🔥,✨',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Picker Label', type: 'text' },
			{ key: 'selectedEmoji', label: 'Default Emoji', type: 'text' },
			{ key: 'recentEmojis', label: 'Quick Emojis', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'file-picker',
		name: 'File Picker',
		category: 'Data Entry',
		icon: 'attachment',
		defaultProps: {
			label: 'Upload Receipt / Invoice',
			hintText: 'Drag & drop PDF, PNG or JPG (max 10MB)',
			buttonLabel: 'Browse File',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Upload Title', type: 'text' },
			{ key: 'hintText', label: 'Helper Note', type: 'text' },
			{ key: 'buttonLabel', label: 'Button Text', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'form-field',
		name: 'Form Field',
		category: 'Data Entry',
		icon: 'form',
		defaultProps: {
			label: 'Email Address',
			placeholder: 'john@example.com',
			hint: 'We will send purchase confirmation here.',
			hasError: false,
			errorMessage: 'Invalid email address format.',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'placeholder', label: 'Input Placeholder', type: 'text' },
			{ key: 'hint', label: 'Helper Hint Text', type: 'text' },
			{ key: 'hasError', label: 'Show Error State', type: 'boolean' },
			{ key: 'errorMessage', label: 'Error Message', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'grid',
		name: 'Grid',
		category: 'Layout',
		icon: 'grid',
		defaultProps: {
			columns: 2,
			item1: 'Item A',
			item2: 'Item B',
			item3: 'Item C',
			item4: 'Item D',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'columns', label: 'Columns Count', type: 'select', options: [
				{ label: '2 Columns', value: 2 },
				{ label: '3 Columns', value: 3 },
				{ label: '4 Columns', value: 4 }
			] },
			{ key: 'item1', label: 'Item 1 Text', type: 'text' },
			{ key: 'item2', label: 'Item 2 Text', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'icon',
		name: 'Icon',
		category: 'General',
		icon: 'image',
		defaultProps: {
			iconName: 'heart',
			color: '#ef4444',
			size: '28px',
			label: 'Favorite Item',
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'iconName', label: 'Icon Type', type: 'select', options: [
				{ label: 'Heart', value: 'heart' },
				{ label: 'Star', value: 'star' },
				{ label: 'Check Circle', value: 'check-circle' },
				{ label: 'Bell Notification', value: 'bell' },
				{ label: 'Share', value: 'share' },
				{ label: 'Settings', value: 'settings' }
			] },
			{ key: 'color', label: 'Icon Color', type: 'color' },
			{ key: 'size', label: 'Size', type: 'select', options: [
				{ label: '18px (Small)', value: '18px' },
				{ label: '24px (Medium)', value: '24px' },
				{ label: '28px (Large)', value: '28px' },
				{ label: '36px (Extra Large)', value: '36px' }
			] },
			{ key: 'label', label: 'Label Caption', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'inline-input',
		name: 'Inline Input',
		category: 'Data Entry',
		icon: 'edit',
		defaultProps: {
			label: 'Project Name',
			value: 'Untitled Mobile App V2',
			placeholder: 'Click to edit...',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'value', label: 'Editable Value', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'input',
		name: 'Input',
		category: 'Data Entry',
		icon: 'text-input',
		defaultProps: {
			label: 'Full Name',
			placeholder: 'e.g. John Doe',
			defaultValue: '',
			required: true,
			disabled: false,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			{ key: 'defaultValue', label: 'Default Value', type: 'text' },
			{ key: 'required', label: 'Required Field', type: 'boolean' },
			{ key: 'disabled', label: 'Disabled', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'list-item',
		name: 'List',
		category: 'Data Display',
		icon: 'list',
		defaultProps: {
			title: 'Personal Cloud Storage',
			subtitle: '128 GB of 256 GB used',
			icon: 'list',
			showChevron: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Item Title', type: 'text' },
			{ key: 'subtitle', label: 'Sub-description', type: 'text' },
			{ key: 'showChevron', label: 'Show Arrow Chevron', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'loading',
		name: 'Loading',
		category: 'Overlays & Feedback',
		icon: 'progress-auto',
		defaultProps: {
			message: 'Synchronizing database records...',
			spinnerColor: '#2563eb',
			size: 'medium',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'message', label: 'Loading Message', type: 'text' },
			{ key: 'spinnerColor', label: 'Spinner Color', type: 'color' },
			{ key: 'size', label: 'Size', type: 'select', options: [
				{ label: 'Small', value: 'small' },
				{ label: 'Medium', value: 'medium' },
				{ label: 'Large', value: 'large' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'member-picker',
		name: 'Member Picker',
		category: 'Data Entry',
		icon: 'user-plus',
		defaultProps: {
			label: 'Assign Team Members',
			selectedCount: 3,
			member1: 'Alex Johnson',
			member2: 'Sarah Connor',
			member3: 'Phu Tran',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Section Label', type: 'text' },
			{ key: 'member1', label: 'Member 1', type: 'text' },
			{ key: 'member2', label: 'Member 2', type: 'text' },
			{ key: 'member3', label: 'Member 3', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'menu',
		name: 'Menu',
		category: 'Navigation',
		icon: 'more-vertical',
		defaultProps: {
			title: 'User Profile Menu',
			item1: 'My Account & Security',
			item2: 'Order History',
			item3: 'Help & Customer Support',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Menu Title', type: 'text' },
			{ key: 'item1', label: 'Item 1', type: 'text' },
			{ key: 'item2', label: 'Item 2', type: 'text' },
			{ key: 'item3', label: 'Item 3', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'mobile-header',
		name: 'Mobile Nav Bar',
		category: 'Layout',
		icon: 'sidebar',
		defaultProps: {
			title: 'Page Title',
			showBack: true,
			showAction: true,
			actionIcon: 'more',
			bgColor: '#ffffff',
			textColor: '#1e293b',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Title Text', type: 'text' },
			{ key: 'showBack', label: 'Show Back Button', type: 'boolean' },
			{ key: 'showAction', label: 'Show Action Button', type: 'boolean' },
			{ key: 'actionIcon', label: 'Action Icon', type: 'select', options: [
				{ label: 'More Options', value: 'more' },
				{ label: 'Settings', value: 'settings' },
				{ label: 'Search', value: 'search' },
				{ label: 'Plus Add', value: 'plus' },
			] },
			{ key: 'bgColor', label: 'Background Color', type: 'color' },
			{ key: 'textColor', label: 'Text Color', type: 'color' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'nav-menu',
		name: 'Navigation Menu',
		category: 'Navigation',
		icon: 'list',
		defaultProps: {
			link1: 'Discover',
			link2: 'Products',
			link3: 'Docs',
			activeLink: 'Products',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'link1', label: 'Tab 1', type: 'text' },
			{ key: 'link2', label: 'Tab 2', type: 'text' },
			{ key: 'link3', label: 'Tab 3', type: 'text' },
			{ key: 'activeLink', label: 'Active Tab', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'page',
		name: 'Page',
		category: 'Layout',
		icon: 'collection',
		defaultProps: {
			title: 'Welcome Screen',
			subtitle: 'Step 1 of 3 onboarding tutorial',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Page Header', type: 'text' },
			{ key: 'subtitle', label: 'Page Subtitle', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'pagination',
		name: 'Pagination',
		category: 'Navigation',
		icon: 'more-horizontal',
		defaultProps: {
			currentPage: 1,
			totalPages: 8,
			showPrevNext: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'currentPage', label: 'Current Page', type: 'number', min: 1, max: 20 },
			{ key: 'totalPages', label: 'Total Pages', type: 'number', min: 1, max: 20 },
			{ key: 'showPrevNext', label: 'Show Arrows', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'phone-field',
		name: 'Phone Field',
		category: 'Data Entry',
		icon: 'phone',
		defaultProps: {
			label: 'Phone Number',
			dialCode: '+84',
			placeholder: '090 123 4567',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'dialCode', label: 'Country Code', type: 'select', options: [
				{ label: 'Vietnam (+84)', value: '+84' },
				{ label: 'United States (+1)', value: '+1' },
				{ label: 'Japan (+81)', value: '+81' },
				{ label: 'Singapore (+65)', value: '+65' }
			] },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'popover',
		name: 'Popover',
		category: 'Overlays & Feedback',
		icon: 'info',
		defaultProps: {
			title: 'Pro Tip',
			content: 'You can reorder components via drag-and-drop directly inside the Component Tree.',
			triggerText: 'Click for Tip',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Popover Header', type: 'text' },
			{ key: 'content', label: 'Content Note', type: 'text' },
			{ key: 'triggerText', label: 'Trigger Button Label', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'progress-bar',
		name: 'Progress',
		category: 'Overlays & Feedback',
		icon: 'progress',
		defaultProps: {
			value: 65,
			color: 'primary',
			mode: 'determinate',
			label: 'Uploading Assets',
			showPercent: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'value', label: 'Percentage (0 - 100)', type: 'number', min: 0, max: 100 },
			{ key: 'label', label: 'Task Label', type: 'text' },
			{ key: 'showPercent', label: 'Display % Text', type: 'boolean' },
			{ key: 'color', label: 'Bar Color', type: 'select', options: [
				{ label: 'Primary Brand', value: 'primary' },
				{ label: 'Success Emerald', value: 'success' },
				{ label: 'Warning Amber', value: 'warning' },
				{ label: 'Danger Red', value: 'danger' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'radio',
		name: 'Radio Group',
		category: 'Data Entry',
		icon: 'sliders',
		defaultProps: {
			groupLabel: 'Payment Method',
			option1: 'Credit / Debit Card',
			option2: 'Apple Pay / Google Wallet',
			option3: 'Cash on Delivery',
			selectedOption: 0,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'groupLabel', label: 'Group Title', type: 'text' },
			{ key: 'option1', label: 'Option 1 Label', type: 'text' },
			{ key: 'option2', label: 'Option 2 Label', type: 'text' },
			{ key: 'option3', label: 'Option 3 Label', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'range-input',
		name: 'Range Input',
		category: 'Data Entry',
		icon: 'sliders',
		defaultProps: {
			label: 'Price Range ($)',
			min: 0,
			max: 1000,
			step: 25,
			range: { start: 150, end: 650 },
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Slider Label', type: 'text' },
			{ key: 'min', label: 'Minimum Bound', type: 'number' },
			{ key: 'max', label: 'Maximum Bound', type: 'number' },
			{ key: 'step', label: 'Step Interval', type: 'number' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'resize',
		name: 'Resize',
		category: 'Layout',
		icon: 'sliders',
		defaultProps: {
			leftTitle: 'Left Split (60%)',
			rightTitle: 'Right Split (40%)',
			splitRatio: 60,
			width: '100%',
			height: '90px'
		},
		propDefinitions: [
			{ key: 'leftTitle', label: 'Left Panel Text', type: 'text' },
			{ key: 'rightTitle', label: 'Right Panel Text', type: 'text' },
			{ key: 'splitRatio', label: 'Left Ratio %', type: 'number', min: 20, max: 80, step: 5 },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'scroll-bar',
		name: 'Scroll Bar',
		category: 'Layout',
		icon: 'sliders',
		defaultProps: {
			content: 'Smooth custom scroll container with tailored theme thumb and track styling.',
			height: '80px',
			width: '100%'
		},
		propDefinitions: [
			{ key: 'content', label: 'Scrollable Content', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'search-box',
		name: 'Search Box',
		category: 'Data Entry',
		icon: 'search',
		defaultProps: {
			label: '',
			placeholder: 'Search items, contacts...',
			clearable: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Header Label (optional)', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			{ key: 'clearable', label: 'Show Clear Button', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'select',
		name: 'Select',
		category: 'Data Entry',
		icon: 'dropdown',
		defaultProps: {
			label: 'Department Role',
			placeholder: 'Choose role...',
			options: 'Product Designer, Frontend Engineer, Tech Lead, Product Manager',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Select Label', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder', type: 'text' },
			{ key: 'options', label: 'Options (comma separated)', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'sheet',
		name: 'Sheet',
		category: 'Layout',
		icon: 'document',
		defaultProps: {
			title: 'Bottom Action Sheet',
			action1: 'Share via AirDrop',
			action2: 'Copy Public Link',
			action3: 'Report Issue',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Sheet Title', type: 'text' },
			{ key: 'action1', label: 'Option 1', type: 'text' },
			{ key: 'action2', label: 'Option 2', type: 'text' },
			{ key: 'action3', label: 'Option 3', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'sidebar',
		name: 'Sidebar',
		category: 'Layout',
		icon: 'sidebar',
		defaultProps: {
			brand: 'My Workspace',
			item1: 'Dashboard Overview',
			item2: 'Analytics & Revenue',
			item3: 'Account Settings',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'brand', label: 'Brand Name', type: 'text' },
			{ key: 'item1', label: 'Menu Item 1', type: 'text' },
			{ key: 'item2', label: 'Menu Item 2', type: 'text' },
			{ key: 'item3', label: 'Menu Item 3', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'skeleton',
		name: 'Skeleton',
		category: 'Overlays & Feedback',
		icon: 'template',
		defaultProps: {
			shape: 'card',
			active: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'shape', label: 'Skeleton Layout', type: 'select', options: [
				{ label: 'Full Card Skeleton', value: 'card' },
				{ label: 'Single Text Line', value: 'line' },
				{ label: 'Circle Avatar', value: 'circle' }
			] },
			{ key: 'active', label: 'Shimmer Pulse Effect', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'switch',
		name: 'Switch',
		category: 'Data Entry',
		icon: 'switch',
		defaultProps: {
			label: 'Enable Notifications',
			description: 'Receive real-time order updates',
			checked: true,
			disabled: false,
			color: 'primary',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Toggle Title', type: 'text' },
			{ key: 'description', label: 'Sub-description', type: 'text' },
			{ key: 'checked', label: 'Active on load', type: 'boolean' },
			{ key: 'disabled', label: 'Disabled', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'table',
		name: 'Table',
		category: 'Data Display',
		icon: 'table',
		defaultProps: {
			headerText: 'Performance Metrics',
			r1Key: 'Conversion Rate',
			r1Val: '4.8%',
			r2Key: 'Bounce Rate',
			r2Val: '28.1%',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'headerText', label: 'Table Caption', type: 'text' },
			{ key: 'r1Key', label: 'Metric 1 Name', type: 'text' },
			{ key: 'r1Val', label: 'Metric 1 Value', type: 'text' },
			{ key: 'r2Key', label: 'Metric 2 Name', type: 'text' },
			{ key: 'r2Val', label: 'Metric 2 Value', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'tabs',
		name: 'Tabs',
		category: 'Navigation',
		icon: 'tab-plus',
		defaultProps: {
			tab1: 'Overview',
			tab2: 'Specifications',
			tab3: 'Reviews (14)',
			activeTab: 0,
			color: 'primary',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'tab1', label: 'Tab 1 Title', type: 'text' },
			{ key: 'tab2', label: 'Tab 2 Title', type: 'text' },
			{ key: 'tab3', label: 'Tab 3 Title', type: 'text' },
			{ key: 'color', label: 'Indicator Color', type: 'select', options: [
				{ label: 'Primary Blue', value: 'primary' },
				{ label: 'Emerald Green', value: '#10b981' },
				{ label: 'Amber Orange', value: '#f59e0b' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'tag',
		name: 'Tag',
		category: 'Data Display',
		icon: 'label',
		defaultProps: {
			label: 'New Release',
			color: 'primary',
			closable: true,
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Tag Label', type: 'text' },
			{ key: 'color', label: 'Tag Accent', type: 'select', options: [
				{ label: 'Primary Blue', value: 'primary' },
				{ label: 'Success Green', value: 'success' },
				{ label: 'Warning Amber', value: 'warning' },
				{ label: 'Danger Red', value: 'danger' }
			] },
			{ key: 'closable', label: 'Show Close (x)', type: 'boolean' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'textarea',
		name: 'Textarea',
		category: 'Data Entry',
		icon: 'long-text',
		defaultProps: {
			label: 'Delivery Notes',
			placeholder: 'Type building code or parking note...',
			rows: 3,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'label', label: 'Field Label', type: 'text' },
			{ key: 'placeholder', label: 'Placeholder Text', type: 'text' },
			{ key: 'rows', label: 'Visible Rows', type: 'number', min: 2, max: 8 },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'timeline-item',
		name: 'Timeline',
		category: 'Data Display',
		icon: 'calendar',
		defaultProps: {
			stepNumber: 1,
			title: 'Order Placed',
			subtitle: 'Package has been dispatched from warehouse.',
			date: 'Today',
			status: 'active',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Event Title', type: 'text' },
			{ key: 'subtitle', label: 'Event Details', type: 'text' },
			{ key: 'date', label: 'Date / Timestamp', type: 'text' },
			{ key: 'status', label: 'Step Status', type: 'select', options: [
				{ label: 'Active Progress', value: 'active' },
				{ label: 'Completed', value: 'completed' },
				{ label: 'Pending', value: 'pending' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'toast',
		name: 'Toast',
		category: 'Overlays & Feedback',
		icon: 'bell-new',
		defaultProps: {
			title: 'Update Available',
			message: 'Version 2.4 is ready to install.',
			type: 'success',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'title', label: 'Toast Title', type: 'text' },
			{ key: 'message', label: 'Toast Content', type: 'text' },
			{ key: 'type', label: 'Toast Style', type: 'select', options: [
				{ label: 'Success', value: 'success' },
				{ label: 'Info', value: 'info' },
				{ label: 'Warning', value: 'warning' },
				{ label: 'Error', value: 'error' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'tooltip',
		name: 'Tooltip',
		category: 'Data Display',
		icon: 'help',
		defaultProps: {
			targetText: 'Hover over here',
			tipText: 'Verified SSL 256-bit secure transaction.',
			position: 'top',
			width: 'auto',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'targetText', label: 'Trigger Text', type: 'text' },
			{ key: 'tipText', label: 'Tooltip Message', type: 'text' },
			{ key: 'position', label: 'Position', type: 'select', options: [
				{ label: 'Top', value: 'top' },
				{ label: 'Bottom', value: 'bottom' }
			] },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'tree',
		name: 'Tree',
		category: 'Data Display',
		icon: 'tree-list',
		defaultProps: {
			rootNode: 'Project Workspace',
			child1: 'src/components',
			child2: 'src/assets/styles',
			child3: 'package.json',
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'rootNode', label: 'Root Directory', type: 'text' },
			{ key: 'child1', label: 'Node 1', type: 'text' },
			{ key: 'child2', label: 'Node 2', type: 'text' },
			{ key: 'child3', label: 'Node 3', type: 'text' },
			...DIMENSION_PROPS
		]
	},
	{
		type: 'truncate',
		name: 'Truncate',
		category: 'Data Display',
		icon: 'more-horizontal',
		defaultProps: {
			text: 'Antigravity Design System provides an extensive suite of enterprise components engineered for maximum flexibility, consistent user experience, and rapid prototyping across desktop and mobile.',
			clampLines: 2,
			showToggle: true,
			width: '100%',
			height: 'auto'
		},
		propDefinitions: [
			{ key: 'text', label: 'Long Paragraph Text', type: 'text' },
			{ key: 'clampLines', label: 'Lines to Clamp', type: 'number', min: 1, max: 6 },
			{ key: 'showToggle', label: 'Show More/Less Toggle', type: 'boolean' },
			...DIMENSION_PROPS
		]
	}
];

export const PRESET_TEMPLATES: PresetTemplate[] = [
	{
		id: 'login',
		name: 'Login Screen',
		description: 'Standard authentication screen with logo, inputs, and button',
		icon: 'lock',
		components: [
			{
				id: 'h_1',
				type: 'mobile-header',
				name: 'Mobile Nav Bar',
				props: { title: 'Welcome Back', showBack: true, showAction: false, bgColor: '#ffffff', textColor: '#1e293b', width: '100%', height: 'auto' }
			},
			{
				id: 'alt_1',
				type: 'alert',
				name: 'Alert Banner',
				props: { message: 'Never share your one-time passwords with anyone.', color: 'info', icon: 'info', closable: true, width: '100%', height: 'auto' }
			},
			{
				id: 'in_1',
				type: 'input',
				name: 'Text Input',
				props: { label: 'Email Address', placeholder: 'user@example.com', defaultValue: '', required: true, disabled: false, width: '100%', height: 'auto' }
			},
			{
				id: 'in_2',
				type: 'input',
				name: 'Text Input',
				props: { label: 'Password', placeholder: 'Enter your password', defaultValue: '', required: true, disabled: false, width: '100%', height: 'auto' }
			},
			{
				id: 'chk_1',
				type: 'checkbox',
				name: 'Checkbox',
				props: { label: 'Remember me on this phone', checked: true, disabled: false, color: 'primary', width: '100%', height: 'auto' }
			},
			{
				id: 'btn_1',
				type: 'button',
				name: 'Button',
				props: { label: 'Log In to Account', color: 'primary', disabled: false, fullWidth: true, width: '100%', height: '42px' }
			},
			{
				id: 'div_1',
				type: 'divider',
				name: 'Divider Line',
				props: { text: 'OR CONTINUE WITH', align: 'center', dashed: false, width: '100%', height: 'auto' }
			},
			{
				id: 'btn_2',
				type: 'button',
				name: 'Button',
				props: { label: 'Continue with Google', color: 'white', disabled: false, fullWidth: true, width: '100%', height: '42px' }
			}
		]
	},
	{
		id: 'profile',
		name: 'User Profile',
		description: 'User card, avatar, badges, and account metrics',
		icon: 'user',
		components: [
			{
				id: 'h_p',
				type: 'mobile-header',
				name: 'Mobile Nav Bar',
				props: { title: 'My Profile', showBack: true, showAction: true, actionIcon: 'settings', bgColor: '#ffffff', textColor: '#1e293b', width: '100%', height: 'auto' }
			},
			{
				id: 'av_1',
				type: 'avatar',
				name: 'Avatar',
				props: { label: 'Phu Nguyen', color: 'primary', rounded: true, size: 'large', width: 'auto', height: 'auto' }
			},
			{
				id: 'tag_1',
				type: 'tag',
				name: 'Tag Chip',
				props: { label: 'Senior FE Developer', color: 'primary', closable: false, width: 'auto', height: 'auto' }
			},
			{
				id: 'card_p',
				type: 'card',
				name: 'Card Container',
				props: {
					headerTitle: 'Account Overview',
					content: 'Active subscription: Pro Plan. Next billing cycle on Nov 30, 2026.',
					showFooter: true,
					footerText: 'Manage Plan',
					width: '100%',
					height: 'auto'
				}
			},
			{
				id: 'prog_p',
				type: 'progress-bar',
				name: 'Progress Bar',
				props: { label: 'Storage Usage (72%)', value: 72, color: 'primary', mode: 'determinate', width: '100%', height: 'auto' }
			},
			{
				id: 'btn_p',
				type: 'button',
				name: 'Button',
				props: { label: 'Edit Profile Information', color: 'primary', disabled: false, fullWidth: true, width: '100%', height: '42px' }
			}
		]
	},
	{
		id: 'settings',
		name: 'Settings Menu',
		description: 'Configuration toggles, sliders, and preferences',
		icon: 'sliders',
		components: [
			{
				id: 'h_s',
				type: 'mobile-header',
				name: 'Mobile Nav Bar',
				props: { title: 'Preferences & Settings', showBack: true, showAction: false, bgColor: '#ffffff', textColor: '#1e293b', width: '100%', height: 'auto' }
			},
			{
				id: 'sw_1',
				type: 'switch',
				name: 'Switch Toggle',
				props: { label: 'Push Notifications', description: 'Immediate notifications for mentions', checked: true, color: 'primary', disabled: false, width: '100%', height: 'auto' }
			},
			{
				id: 'sw_2',
				type: 'switch',
				name: 'Switch Toggle',
				props: { label: 'Dark Mode Theme', description: 'High-contrast dark color palette', checked: false, color: 'primary', disabled: false, width: '100%', height: 'auto' }
			},
			{
				id: 'sw_3',
				type: 'switch',
				name: 'Switch Toggle',
				props: { label: 'Biometric FaceID', description: 'Protect workspace with FaceID', checked: true, color: 'success', disabled: false, width: '100%', height: 'auto' }
			},
			{
				id: 'rng_s',
				type: 'range-input',
				name: 'Range Slider',
				props: { label: 'Cache Storage Limit (MB)', min: 50, max: 2000, step: 50, range: { start: 100, end: 500 }, width: '100%', height: 'auto' }
			},
			{
				id: 'alt_s',
				type: 'alert',
				name: 'Alert Banner',
				props: { message: 'All local changes synchronized with cloud storage.', color: 'info', icon: 'info', closable: true, width: '100%', height: 'auto' }
			},
			{
				id: 'btn_s',
				type: 'button',
				name: 'Button',
				props: { label: 'Save & Apply Preferences', color: 'primary', disabled: false, fullWidth: true, width: '100%', height: '42px' }
			}
		]
	}
];
