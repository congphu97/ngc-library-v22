import {
	Component, Input, Output, EventEmitter,
	ViewEncapsulation, HostBinding, ElementRef,
	ViewChild, AfterViewInit, ChangeDetectorRef,
	ChangeDetectionStrategy, OnDestroy
} from '@angular/core';
import { NgcICommentContent, NgcICommentFile, NgcIComment } from '../interfaces';
import { NgcIFilePickerEvent } from '../../ngc-file-picker';
import { NgcIEmojiData } from '../../ngc-emoji-picker';
import { NgcIAvatarPickedEvent } from '../../ngc-avatar-picker';

@Component({
	standalone: false,
	selector		: 'ngc-comment-box',
	templateUrl		: './ngc-comment-box.html',
	styleUrls		: [ './ngc-comment-box.component.scss' ],
	encapsulation	: ViewEncapsulation.None,
	changeDetection	: ChangeDetectionStrategy.OnPush,
	host			: { class: 'ngc-comment-box' }
})
export class NgcCommentBoxComponent implements AfterViewInit, OnDestroy {

	@HostBinding( 'class.ngc-comment-box--sub' )
	get classSub(): boolean { return this.subEditor; }

	@ViewChild( 'textarea' ) public textareaRef: ElementRef<HTMLTextAreaElement>;

	@Input() public subEditor: boolean = false;
	@Input() public autoFocusOn: boolean = false;
	@Input() public editingComment: NgcIComment;
	@Input() public maxFilePerComment: number;
	@Input() public maxImagePerComment: number;
	@Input() public placeholder: string = 'Write a comment...';

	@Output() public commentSent: EventEmitter<NgcICommentContent> = new EventEmitter<NgcICommentContent>();
	@Output() public cancelled: EventEmitter<void> = new EventEmitter<void>();

	public text: string = '';
	public attachments: NgcICommentFile[] = [];
	public images: NgcICommentFile[] = [];
	public isFormattingVisible: boolean = false;
	public isBold: boolean = false;
	public isItalic: boolean = false;

	constructor( private _cdr: ChangeDetectorRef ) {}

	public ngAfterViewInit() {
		if ( this.autoFocusOn ) {
			setTimeout( () => {
				this.textareaRef?.nativeElement?.focus();
			}, 100 );
		}

		if ( this.editingComment ) {
			this.text = this.editingComment.content?.text || '';
			this.attachments = [ ...( this.editingComment.content?.attachments || [] ) ];
			this.images = [ ...( this.editingComment.content?.images || [] ) ];
			this._cdr.markForCheck();
		}
	}

	public ngOnDestroy() {
		this.textareaRef?.nativeElement?.blur();
	}

	public get isDisabled(): boolean {
		return !this.text?.trim().length && !this.attachments.length && !this.images.length;
	}

	/**
	 * Send comment
	 */
	public sendComment() {
		if ( this.isDisabled ) return;

		const content: NgcICommentContent = {
			text		: this.text.trim(),
			attachments	: [ ...this.attachments ],
			images		: [ ...this.images ],
			mentions	: [],
		};

		this.text = '';
		this.attachments = [];
		this.images = [];
		this.isFormattingVisible = false;

		this.commentSent.emit( content );
		this._cdr.markForCheck();
	}

	/**
	 * Cancel editing
	 */
	public cancel() {
		this.cancelled.emit();
	}

	/**
	 * Handle Enter key (send on plain Enter, allow Shift+Enter for newline)
	 */
	public onKeyDown( event: KeyboardEvent ) {
		if ( event.key === 'Enter' && !event.shiftKey ) {
			event.preventDefault();
			this.sendComment();
		}

		if ( event.key === 'Escape' ) {
			event.stopPropagation();
			this.cancel();
		}
	}

	/**
	 * Handle file picked from ngc-file-picker
	 */
	public onFilePicked( event: NgcIFilePickerEvent ) {
		if ( !event ) return;
		let newFiles: NgcICommentFile[] = [];

		if ( event.files?.length ) {
			newFiles = event.files.filter( Boolean ).map( f => ({
				name		: f.name || 'file',
				size		: f.size || 0,
				url			: f.url || ( f as any ).location || '',
				previewUrl	: f[ '@previewUrl' ] || f.url || ( f as any ).location || '',
				type		: 'file',
			}) );
		} else if ( event.localFiles?.length ) {
			const filesArr: File[] = Array.from( event.localFiles as File[] );
			newFiles = filesArr.map( f => ({
				name		: f.name,
				size		: f.size,
				url			: URL.createObjectURL( f ),
				previewUrl	: URL.createObjectURL( f ),
				type		: 'file',
			}) );
		}

		if ( !newFiles.length ) return;

		this.attachments.unshift( ...newFiles );

		if ( this.maxFilePerComment ) {
			this.attachments = this.attachments.slice( 0, this.maxFilePerComment );
		}

		this._cdr.markForCheck();
	}

	/**
	 * Handle image picked from ngc-avatar-picker
	 */
	public onAvatarImagePicked( event: NgcIAvatarPickedEvent ) {
		if ( !event ) return;

		const photoUrl: string = event.avatar?.photo
			|| ( event.response as any )?.[ 0 ]?.location
			|| ( event.file ? URL.createObjectURL( event.file ) : '' );

		if ( !photoUrl ) return;

		const newImage: NgcICommentFile = {
			name		: 'photo_' + Date.now() + '.png',
			size		: event.file?.size || 0,
			url			: photoUrl,
			previewUrl	: photoUrl,
			type		: 'image',
		};

		this.images.unshift( newImage );

		if ( this.maxImagePerComment ) {
			this.images = this.images.slice( 0, this.maxImagePerComment );
		}

		this._cdr.markForCheck();
	}

	/**
	 * Handle image picked from ngc-file-picker
	 */
	public onImagePicked( event: NgcIFilePickerEvent ) {
		if ( !event ) return;
		let newImages: NgcICommentFile[] = [];

		if ( event.files?.length ) {
			newImages = event.files.filter( Boolean ).map( f => ({
				name		: f.name || 'image',
				size		: f.size || 0,
				url			: f.url || ( f as any ).location || '',
				previewUrl	: f[ '@previewUrl' ] || f.url || ( f as any ).location || '',
				type		: 'image',
			}) );
		} else if ( event.localFiles?.length ) {
			const filesArr: File[] = Array.from( event.localFiles as File[] );
			newImages = filesArr.map( f => ({
				name		: f.name,
				size		: f.size,
				url			: URL.createObjectURL( f ),
				previewUrl	: URL.createObjectURL( f ),
				type		: 'image',
			}) );
		}

		if ( !newImages.length ) return;

		this.images.unshift( ...newImages );

		if ( this.maxImagePerComment ) {
			this.images = this.images.slice( 0, this.maxImagePerComment );
		}

		this._cdr.markForCheck();
	}

	/**
	 * Insert emoji into text
	 */
	public onEmojiPicked( emoji: NgcIEmojiData ) {
		const el: HTMLTextAreaElement = this.textareaRef?.nativeElement;
		if ( !el ) return;

		const start: number = el.selectionStart || 0;
		const end: number = el.selectionEnd || 0;
		const native: string = emoji.native || '';

		this.text = this.text.slice( 0, start ) + native + this.text.slice( end );

		setTimeout( () => {
			el.focus();
			el.setSelectionRange( start + native.length, start + native.length );
		} );
	}

	/**
	 * Remove attachment
	 */
	public removeAttachment( index: number ) {
		this.attachments.splice( index, 1 );
		this._cdr.markForCheck();
	}

	/**
	 * Remove image
	 */
	public removeImage( index: number ) {
		this.images.splice( index, 1 );
		this._cdr.markForCheck();
	}

}
