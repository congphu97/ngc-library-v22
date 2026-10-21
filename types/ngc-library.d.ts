import { BehaviorSubject, MonoTypeOperatorFunction, Observable, ReplaySubject, Subject } from "rxjs";
import * as i0 from "@angular/core";
import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, ComponentRef, ElementRef, EmbeddedViewRef, EventEmitter, InjectionToken, Injector, ModuleWithProviders, NgZone, OnChanges, OnDestroy, OnInit, PipeTransform, QueryList, Renderer2, SimpleChanges, TemplateRef, Type, ViewContainerRef, ɵComponentType } from "@angular/core";
import * as i1 from "@angular/forms";
import { AbstractControl, ControlValueAccessor, DefaultValueAccessor, FormControl, FormControlDirective, NgControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";
import * as i45 from "@angular/common";
import { Location, PercentPipe } from "@angular/common";
import { DomSanitizer, SafeHtml, SafeUrl, Title } from "@angular/platform-browser";
import * as i46 from "@angular/router";
import { CanDeactivate, NavigationExtras, Router } from "@angular/router";
import * as i47 from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import * as i48 from "@ngx-translate/core";
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";
import { SwPush, SwUpdate } from "@angular/service-worker";
import { ManagerOptions, Socket, SocketOptions } from "socket.io-client";
import { LoadingBarService } from "@ngx-loading-bar/core";
import { CountryCallingCode, CountryCode } from "libphonenumber-js";
import * as i18 from "angular-svg-round-progressbar";
import * as i21 from "ng-lazyload-image";
import _ from "lodash";
import * as i5 from "@angular/cdk/overlay";
import { HorizontalConnectionPos, Overlay, PositionStrategy, VerticalConnectionPos } from "@angular/cdk/overlay";
import { Direction } from "@angular/cdk/bidi";
import * as i6$2 from "@angular/cdk/portal";
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, ComponentType, TemplatePortal } from "@angular/cdk/portal";
import { FocusMonitor } from "@angular/cdk/a11y";
import * as i8 from "ngx-color/sketch";
import * as i9 from "ngx-color/photoshop";
import * as i3$1 from "@angular/cdk/drag-drop";
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup } from "@angular/cdk/drag-drop";
import { EmojiData } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import * as i6$1 from "@ctrl/ngx-emoji-mart";
import { Moment } from "moment-timezone";
import Cropper from "cropperjs";
import * as i3 from "ngx-highlightjs";
import * as i2 from "@angular/cdk/scrolling";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import * as i6 from "@angular/cdk/table";
import { CdkTable } from "@angular/cdk/table";
import * as XLSX from "xlsx";
import { DataSource } from "@angular/cdk/collections";
import * as i7 from "angular-resizable-element";
import { ResizeEvent } from "angular-resizable-element";
declare module 'lodash' {
  interface LoDashStatic {
    aesEncrypt(data: any, key?: string, opts?: any): string;
    aesDecrypt(code: string, key?: string, opts?: any): any;
    arrayInsert(arr: any[], item: any, index: number): any[];
    arrayJoin(arr: any[], joinSymbol?: string): string;
    arrayUpdate(arr: any[], item: any, index?: number): any[];
    arrayResert(arr: any[], item: any, index?: number, type?: string): any[];
    coerce(value: any, defaultValue?: any): any;
    escapeRegExp(str: string): string;
    isStrictEmpty(value: any): boolean;
    matchAll(regex: RegExp, value: string): any[];
    search(str: string, match: string): boolean;
    staticObservable(value?: any): Observable<any>;
    stripAccentedCharacters(str: string): string;
    stripHtml(html: string): string;
    toCommas(num: number, isAddZero?: boolean): string;
    toFileSize(fileSize: number, isAddZero?: boolean): string;
    toFixed(num: number, digits?: number): number;
    toKUnit(num: number, isAddZero?: boolean): string;
    toPadNumber(num: number, size: number): string;
    toPercent(num: number, max?: number, digits?: number): number;
    toRegExp(str: string, flags?: string): RegExp;
    toRgb(hex: string): RGB;
    toSearchRegExp(str: string, flags?: string): RegExp;
    toSearchString(str: string, ignoreWhitespace?: boolean): string;
  }
  interface LoDashExplicitWrapper<TValue> {
    aesEncrypt(key?: string, opts?: any): LoDashExplicitWrapper<string>;
    aesDecrypt(key?: string, opts?: any): LoDashExplicitWrapper<any>;
    arrayInsert(item: any, index: number): LoDashExplicitWrapper<any[]>;
    arrayJoin(joinSymbol?: string): LoDashExplicitWrapper<string>;
    arrayUpdate(item: any, index?: number): LoDashExplicitWrapper<any[]>;
    arrayResert(item: any, index?: number, type?: string): LoDashExplicitWrapper<any[]>;
    coerce(defaultValue?: any): LoDashExplicitWrapper<any>;
    escapeRegExp(): LoDashExplicitWrapper<string>;
    isStrictEmpty(): LoDashExplicitWrapper<boolean>;
    matchAll(value: string): LoDashExplicitWrapper<any[]>;
    search(match: string): LoDashExplicitWrapper<boolean>;
    staticObservable(): LoDashExplicitWrapper<Observable<any>>;
    stripAccentedCharacters(): LoDashExplicitWrapper<string>;
    stripHtml(): LoDashExplicitWrapper<string>;
    toCommas(isAddZero?: boolean): LoDashExplicitWrapper<string>;
    toFileSize(fileSize: number, isAddZero?: boolean): LoDashExplicitWrapper<string>;
    toFixed(digits?: number): LoDashExplicitWrapper<number>;
    toKUnit(isAddZero?: boolean): LoDashExplicitWrapper<string>;
    toPadNumber(size: number): LoDashExplicitWrapper<string>;
    toPercent(max?: number, digits?: number): LoDashExplicitWrapper<number>;
    toRegExp(flags?: string): LoDashExplicitWrapper<RegExp>;
    toRgb(): LoDashExplicitWrapper<RGB>;
    toSearchRegExp(flags?: string): LoDashExplicitWrapper<RegExp>;
    toSearchString(ignoreWhitespace?: boolean): LoDashExplicitWrapper<string>;
  }
}
export interface RGB {
  r: number;
  g: number;
  b: number;
}
export declare const LODASH_MIXIN: {
  readonly aesEncrypt: (data: any, key?: string, opts?: any) => string;
  readonly aesDecrypt: (code: string, key?: string, opts?: any) => any;
  readonly arrayInsert: (arr: any[], item: any, index: number) => any[];
  readonly arrayJoin: (arr: any[], joinSymbol?: string) => string;
  readonly arrayUpdate: (arr: any[], item: any, index?: number) => any[];
  readonly arrayUpsert: (arr: any[], item: any, index?: number, type?: string) => any[];
  readonly arrayResert: (arr: any[], item: any, index?: number, type?: string) => any[];
  readonly coerce: (value: any, defaultValue?: any) => any;
  readonly escapeRegExp: (str: string) => string;
  readonly isStrictEmpty: (value: any) => boolean;
  readonly matchAll: (regex: RegExp, value: string) => any[];
  readonly search: (str: string, match: string) => boolean;
  readonly staticObservable: (value?: any) => Observable<any>;
  readonly stripAccentedCharacters: (str: string) => string;
  readonly stripHtml: (html: string) => string;
  readonly toCommas: (num: number, isAddZero?: boolean) => string;
  readonly toFileSize: (fileSize: number, isAddZero?: boolean) => string;
  readonly toFixed: (num: number, digits?: number) => number;
  readonly toKUnit: (num: number, isAddZero?: boolean) => string;
  readonly toPadNumber: (num: number, size: number) => string;
  readonly toPercent: (num: number, max?: number, digits?: number) => number;
  readonly toRegExp: (str: string, flags?: string) => RegExp;
  readonly toRgb: (hex: string) => RGB;
  readonly toSearchRegExp: (str: string, flags?: string) => RegExp;
  readonly toSearchString: (str: string, ignoreWhitespace?: boolean) => string;
};
export declare class AdjustFontsizeDirective implements AfterContentChecked {
  private _elementRef;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   */
  ngAfterContentChecked(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<AdjustFontsizeDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<AdjustFontsizeDirective, "[adjustFontsize]", ["adjustFontsize"], {}, {}, never, never, false, never>;
}
export declare class AspectRatioDirective implements AfterContentChecked {
  private _elementRef;
  aspectRatio: string;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   */
  ngAfterContentChecked(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<AspectRatioDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<AspectRatioDirective, "[aspectRatio]", ["aspectRatio"], {
    "aspectRatio": {
      "alias": "aspectRatio";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class AutoFocusDirective implements AfterViewInit {
  private _elementRef;
  delay: number;
  disableControl: boolean;
  disabled: boolean;
  autoFocusOn: boolean;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<AutoFocusDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<AutoFocusDirective, "[autoFocusOn]", ["autoFocusOn"], {
    "delay": {
      "alias": "delay";
      "required": false;
    };
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "autoFocusOn": {
      "alias": "autoFocusOn";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class AutoResetDirective implements OnInit, OnDestroy {
  formControl: UntypedFormControl;
  delay: number;
  autoReset: 'init' | 'destroy';
  /**
   * @constructor
   */
  ngOnInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<AutoResetDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<AutoResetDirective, "[autoReset]", ["autoReset"], {
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
    "delay": {
      "alias": "delay";
      "required": false;
    };
    "autoReset": {
      "alias": "autoReset";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class BackButtonDirective {
  private _location;
  /**
   * @constructor
   * @param {Location} _location
   */
  constructor(_location: Location);
  triggerClick(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<BackButtonDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<BackButtonDirective, "[backButton]", ["backButton"], {}, {}, never, never, false, never>;
}
export interface ScrollEvent {
  scrollingX: boolean;
  scrollingY: boolean;
  scrollingUp: boolean;
  scrollingDown: boolean;
  scrollingLeft: boolean;
  scrollingRight: boolean;
  scrollReachTop: boolean;
  scrollReachBottom: boolean;
  scrollReachLeft: boolean;
  scrollReachRight: boolean;
  scrollTop: number;
  scrollLeft: number;
  scrollWidth: number;
  scrollHeight: number;
  width: number;
  height: number;
}
export declare class DetectScrollDirective implements AfterViewInit {
  private _elementRef;
  delay: number;
  offset: number;
  scrolling: EventEmitter<ScrollEvent>;
  scrollingX: EventEmitter<WheelEvent>;
  scrollingY: EventEmitter<WheelEvent>;
  scrollingUp: EventEmitter<WheelEvent>;
  scrollingDown: EventEmitter<WheelEvent>;
  scrollingLeft: EventEmitter<WheelEvent>;
  scrollingRight: EventEmitter<WheelEvent>;
  scrollReachTop: EventEmitter<WheelEvent>;
  scrollReachBottom: EventEmitter<WheelEvent>;
  scrollReachLeft: EventEmitter<WheelEvent>;
  scrollReachRight: EventEmitter<WheelEvent>;
  scrolling$: Subject<any>;
  private _lastScrollTop;
  private _lastScrollLeft;
  get scrollable(): boolean;
  get scrollableX(): boolean;
  get scrollableY(): boolean;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  triggerScroll(event?: WheelEvent): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @param {HTMLElement} element
   * @param {WheelEvent=} event
   * @return {void}
   */
  private _detectScroll;
  static ɵfac: i0.ɵɵFactoryDeclaration<DetectScrollDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<DetectScrollDirective, "[detectScroll]", ["detectScroll"], {
    "delay": {
      "alias": "delay";
      "required": false;
    };
    "offset": {
      "alias": "offset";
      "required": false;
    };
  }, {
    "scrolling": "scrolling";
    "scrollingX": "scrollingX";
    "scrollingY": "scrollingY";
    "scrollingUp": "scrollingUp";
    "scrollingDown": "scrollingDown";
    "scrollingLeft": "scrollingLeft";
    "scrollingRight": "scrollingRight";
    "scrollReachTop": "scrollReachTop";
    "scrollReachBottom": "scrollReachBottom";
    "scrollReachLeft": "scrollReachLeft";
    "scrollReachRight": "scrollReachRight";
  }, never, never, false, never>;
}
export declare class DisableControlDirective {
  private _ngControl;
  private _cdRef;
  set disableControl(condition: boolean);
  /**
   * @constructor
   * @param {NgControl} _ngControl
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_ngControl: NgControl, _cdRef: ChangeDetectorRef);
  static ɵfac: i0.ɵɵFactoryDeclaration<DisableControlDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<DisableControlDirective, "[disableControl]", ["disableControl"], {
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class FullscreenDirective {
  private _elementRef;
  isFullscreen: boolean;
  private _fullscreenEnabled;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @return {void}
   */
  toggle(): void;
  /**
   * @return {void}
   */
  on(): void;
  /**
   * @return {void}
   */
  off(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<FullscreenDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<FullscreenDirective, "[fullscreen]", ["fullscreen"], {}, {}, never, never, false, never>;
}
export declare class MaxLessThanDirective implements Validator {
  maxLessThan: number;
  /**
   * @param {FormControl} c
   * @return {any}
   */
  validate(c: UntypedFormControl): {
    [key: string]: any;
  };
  static ɵfac: i0.ɵɵFactoryDeclaration<MaxLessThanDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<MaxLessThanDirective, "[maxLessThan][formControlName],[maxLessThan][formControl],[maxLessThan][ngModel]", never, {
    "maxLessThan": {
      "alias": "maxLessThan";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class MinGreaterThanDirective implements Validator {
  minGreaterThan: number;
  /**
   * @param {FormControl} c
   * @return {any}
   */
  validate(c: UntypedFormControl): {
    [key: string]: any;
  };
  static ɵfac: i0.ɵɵFactoryDeclaration<MinGreaterThanDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<MinGreaterThanDirective, "[minGreaterThan][formControlName],[minGreaterThan][formControl],[minGreaterThan][ngModel]", never, {
    "minGreaterThan": {
      "alias": "minGreaterThan";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgInitDirective implements OnInit {
  private _ngInit;
  private _resultChange;
  /**
   * @constructor
   */
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgInitDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgInitDirective, "[ngInit]", ["ngInit"], {
    "_ngInit": {
      "alias": "_ngInit";
      "required": false;
    };
  }, {
    "_resultChange": "_resultChange";
  }, never, never, false, never>;
}
export declare class NgVarDirective {
  private _vcRef;
  private _templateRef;
  private _context;
  set ngVar(context: any);
  /**
   * @constructor
   * @param {ViewContainerRef} _vcRef
   * @param {TemplateRef} _templateRef
   */
  constructor(_vcRef: ViewContainerRef, _templateRef: TemplateRef<any>);
  /**
   * @return {void}
   */
  private _updateView;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgVarDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgVarDirective, "[ngVar]", ["ngVar"], {
    "ngVar": {
      "alias": "ngVar";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class EmptyPipe implements PipeTransform {
  /**
   * @param {any} value
   * @param {string=} emptyStr
   * @return {any}
   */
  transform(value?: any, emptyStr?: string): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<EmptyPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<EmptyPipe, "empty", false>;
}
export declare class CapitalizeFirstPipe extends EmptyPipe implements PipeTransform {
  /**
   * @param {string} value
   * @return {string}
   */
  transform(value: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<CapitalizeFirstPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<CapitalizeFirstPipe, "capitalizeFirst", false>;
}
export declare class ClonePipe implements PipeTransform {
  /**
   * @param {any} data
   * @param {boolean=} isDeep
   * @return {any}
   */
  transform(data: any, isDeep?: boolean): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<ClonePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ClonePipe, "clone", false>;
}
export declare class CommasPipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {boolean=} isAddZero
   * @return {string}
   */
  transform(input: number, isAddZero?: boolean): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<CommasPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<CommasPipe, "commas", false>;
}
export declare class ConvertPercentPipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {number=} max
   * @param {number=} digits
   * @return {number}
   */
  transform(input: number, max?: number, digits?: number): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<ConvertPercentPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ConvertPercentPipe, "convertPercent", false>;
}
export declare class EmojiPipe implements PipeTransform {
  /**
   * @param {string} unified
   * @return {string}
   */
  transform(unified: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<EmojiPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<EmojiPipe, "emoji", false>;
}
export declare class FileSizePipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {boolean=} isAddZero
   * @return {string}
   */
  transform(input: number, isAddZero?: boolean): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<FileSizePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FileSizePipe, "fileSize", false>;
}
export declare class FilterPipe implements PipeTransform {
  /**
   * @param {any[]} items
   * @param {any} key
   * @param {any} matchValue
   * @param {boolean} diffComparison
   * @return {any[]}
   */
  transform(items: any[], key: any, matchValue: any, diffComparison?: boolean): any[];
  static ɵfac: i0.ɵɵFactoryDeclaration<FilterPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FilterPipe, "filter", false>;
}
export declare class Filter2Pipe implements PipeTransform {
  private _previous;
  /**
   * @param {any[]} items
   * @param {any} key
   * @param {any} matchValue
   * @param {boolean=} diffComparison
   * @return {any[]}
   */
  transform(items: any[], key: any, matchValue: any, diffComparison?: boolean): any[];
  static ɵfac: i0.ɵɵFactoryDeclaration<Filter2Pipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<Filter2Pipe, "filter2", false>;
}
export declare class FindPipe implements PipeTransform {
  /**
   * @param {any[]} items
   * @param {any} key
   * @param {any} matchValue
   * @return {any}
   */
  transform(items: any[], key: any, matchValue: any): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<FindPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FindPipe, "find", false>;
}
export declare class FixedPipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {number=} digits
   * @return {number}
   */
  transform(input: number, digits?: number): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<FixedPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FixedPipe, "fixed", false>;
}
export declare class FlagIconPipe implements PipeTransform {
  /**
   * @param {string} countryCode
   * @return {string}
   */
  transform(countryCode: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<FlagIconPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FlagIconPipe, "flagIcon", false>;
}
export declare class HourMeridiemPipe implements PipeTransform {
  /**
   * @param {number} hour
   * @return {string}
   */
  transform(hour: number): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<HourMeridiemPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<HourMeridiemPipe, "hourMeridiem", false>;
}
export declare class ImagePipe implements PipeTransform {
  /**
   * @param {string} url
   * @param {string} defaultImage
   * @return {number}
   */
  transform(url: string, defaultImage: string): Observable<string>;
  static ɵfac: i0.ɵɵFactoryDeclaration<ImagePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ImagePipe, "image", false>;
}
export declare class IncludesPipe implements PipeTransform {
  /**
   * @param {any[]} arr
   * @param {any} item
   * @return {boolean}
   */
  transform(arr: any[], item: any): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<IncludesPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<IncludesPipe, "includes", false>;
}
export declare class IsContrastPipe implements PipeTransform {
  /**
   * @param {string} hex
   * @param {string} textColor
   * @return {boolean}
   */
  transform(hex: string): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<IsContrastPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<IsContrastPipe, "isContrast", false>;
}
export declare class IsFinitePipe implements PipeTransform {
  /**
   * @param {number} num
   * @return {boolean}
   */
  transform(num: number): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<IsFinitePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<IsFinitePipe, "isFinite", false>;
}
export declare class KUnitPipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {boolean=} isAddZero
   * @return {string}
   */
  transform(input: number, isAddZero?: boolean): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<KUnitPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<KUnitPipe, "kUnit", false>;
}
export declare class LinkPipe implements PipeTransform {
  /**
   * @param {string} link
   * @return {string}
   */
  transform(link: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<LinkPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<LinkPipe, "link", false>;
}
export declare class MarkTextPipe implements PipeTransform {
  /**
   * @param {string} html
   * @param {string} markText
   * @param {boolean=} isSearchMode
   * @param {boolean=} isEscapeHtmlTags
   * @return {string}
   */
  transform(html: string, markText: string, isSearchMode?: boolean, isEscapeHtmlTags?: boolean): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<MarkTextPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MarkTextPipe, "markText", false>;
}
export declare class MaxPipe implements PipeTransform {
  /**
   * @param {any[]} items
   * @param {string} field
   * @return {number}
   */
  transform(items: any[], field: string): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<MaxPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MaxPipe, "max", false>;
}
export declare class MinPipe implements PipeTransform {
  /**
   * @param {any[]} items
   * @param {string} field
   * @return {number}
   */
  transform(items: any[], field: string): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<MinPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MinPipe, "min", false>;
}
export type WeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TimeFormat = 'hh:mm a' | 'HH:mm';
export declare class AppConfig {
  private _name;
  private _logo;
  private _url;
  private _locale;
  private _mainPath;
  get name(): string;
  set name(value: string);
  get logo(): string;
  set logo(value: string);
  get url(): string;
  set url(value: string);
  get locale(): string;
  set locale(value: string);
  get mainPath(): string;
  set mainPath(value: string);
}
export declare class ServerConfig {
  private _apiURL;
  private _wsURL;
  private _fcmPublicKey;
  private _fcmSubscriptionEndpoint;
  get apiURL(): string;
  set apiURL(value: string);
  get wsURL(): string;
  set wsURL(value: string);
  get fcmPublicKey(): string;
  set fcmPublicKey(value: string);
  get fcmSubscriptionEndpoint(): string;
  set fcmSubscriptionEndpoint(value: string);
}
export declare class DateTimeConfig {
  private _timezone;
  private _dateFormat;
  private _timeFormat;
  private _weekStart;
  get timezone(): string;
  set timezone(value: string);
  get dateFormat(): string;
  set dateFormat(value: string);
  get timeFormat(): TimeFormat;
  set timeFormat(value: TimeFormat);
  get weekStart(): WeekStart;
  set weekStart(value: WeekStart);
}
export declare class StorageConfig {
  private _authorizedKey;
  private _hashKey;
  private _expireDays;
  get authorizedKey(): string;
  set authorizedKey(value: string);
  get hashKey(): string;
  set hashKey(value: string);
  get expireDays(): number;
  set expireDays(value: number);
}
export declare const APP_CONFIG: InjectionToken<AppConfig>;
export declare const SERVER_CONFIG: InjectionToken<AppConfig>;
export declare const DATE_TIME_CONFIG: InjectionToken<DateTimeConfig>;
export declare const STORAGE_CONFIG: InjectionToken<StorageConfig>;
export declare class MomentDatePipe extends EmptyPipe implements PipeTransform {
  private _dateTimeConfig;
  /**
   * @constructor
   * @param {DateTimeConfig} _dateTimeConfig
   */
  constructor(_dateTimeConfig: DateTimeConfig);
  /**
   * @param {any} input
   * @param {string=} format
   * @param {boolean=} showTime
   * @return {string}
   */
  transform(input: any, format?: string, showTime?: boolean): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<MomentDatePipe, [{
    optional: true;
  }]>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MomentDatePipe, "momentDate", false>;
}
export declare class MomentFromNowPipe extends EmptyPipe implements PipeTransform {
  /**
   * @param {any} input
   * @return {string}
   */
  transform(input: any): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<MomentFromNowPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MomentFromNowPipe, "momentFromNow", false>;
}
export declare class OrderByPipe implements PipeTransform {
  /**
   * @param {any} input
   * @return {any}
   */
  transform(input: any, [config]: any): any;
  /**
   * @param {any} a
   * @param {any} b
   * @return {number}
   */
  private _orderByComparator;
  static ɵfac: i0.ɵɵFactoryDeclaration<OrderByPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<OrderByPipe, "orderBy", false>;
}
export declare class PadNumberPipe implements PipeTransform {
  /**
   * @param {number} input
   * @param {boolean} size
   * @return {string}
   */
  transform(input: number, size: number): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PadNumberPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<PadNumberPipe, "padNumber", false>;
}
export declare class Percent2Pipe extends PercentPipe implements PipeTransform {
  /**
   * @param {string | number} value
   * @param {string=} digitsInfo
   * @param {string=} locale
   * @return {any}
   */
  transform(value: string | number, digitsInfo?: string, locale?: string): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<Percent2Pipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<Percent2Pipe, "percent2", false>;
}
export declare class SafeHtmlPipe implements PipeTransform {
  private _sanitizer;
  /**
   * @constructor
   * @param {DomSanitizer} _sanitizer
   */
  constructor(_sanitizer: DomSanitizer);
  /**
   * @param {string} value
   * @return {SafeHtml}
   */
  transform(value: string): SafeHtml;
  static ɵfac: i0.ɵɵFactoryDeclaration<SafeHtmlPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<SafeHtmlPipe, "safeHtml", false>;
}
export declare class TimeStringPipe implements PipeTransform {
  /**
   * @param {number} miliseconds
   * @return {string}
   */
  transform(miliseconds: number): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<TimeStringPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<TimeStringPipe, "timeString", false>;
}
export declare class TimerPipe implements PipeTransform {
  /**
   * @param {number} miliseconds
   * @return {string}
   */
  transform(miliseconds: number): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<TimerPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<TimerPipe, "timer", false>;
}
export declare class TrackByFnPipe implements PipeTransform {
  /**
   * @param {string} property
   * @return {() => any}
   */
  transform(property: string): (idx: number, item: {
    [key: string]: any;
  }) => any;
  static ɵfac: i0.ɵɵFactoryDeclaration<TrackByFnPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<TrackByFnPipe, "trackByFn", false>;
}
export declare class UnitPipe implements PipeTransform {
  /**
   * @param {number} num
   * @param {string=} unit
   * @return {string}
   */
  transform(num: number, unit?: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<UnitPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<UnitPipe, "unit", false>;
}
export declare class AngularCoreModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<AngularCoreModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<AngularCoreModule, [typeof AdjustFontsizeDirective, typeof AspectRatioDirective, typeof AutoFocusDirective, typeof AutoResetDirective, typeof BackButtonDirective, typeof DetectScrollDirective, typeof DisableControlDirective, typeof FullscreenDirective, typeof MaxLessThanDirective, typeof MinGreaterThanDirective, typeof NgInitDirective, typeof NgVarDirective, typeof CapitalizeFirstPipe, typeof ClonePipe, typeof CommasPipe, typeof ConvertPercentPipe, typeof EmojiPipe, typeof EmptyPipe, typeof FileSizePipe, typeof FilterPipe, typeof Filter2Pipe, typeof FindPipe, typeof FixedPipe, typeof FlagIconPipe, typeof HourMeridiemPipe, typeof ImagePipe, typeof IncludesPipe, typeof IsContrastPipe, typeof IsFinitePipe, typeof KUnitPipe, typeof LinkPipe, typeof MarkTextPipe, typeof MaxPipe, typeof MinPipe, typeof MomentDatePipe, typeof MomentFromNowPipe, typeof OrderByPipe, typeof PadNumberPipe, typeof Percent2Pipe, typeof SafeHtmlPipe, typeof TimeStringPipe, typeof TimerPipe, typeof TrackByFnPipe, typeof UnitPipe], [typeof i45.CommonModule, typeof i46.RouterModule, typeof i47.HttpClientModule, typeof i48.TranslatePipe, typeof i48.TranslateDirective], [typeof i45.CommonModule, typeof i48.TranslatePipe, typeof i48.TranslateDirective, typeof AdjustFontsizeDirective, typeof AspectRatioDirective, typeof AutoFocusDirective, typeof AutoResetDirective, typeof BackButtonDirective, typeof DetectScrollDirective, typeof DisableControlDirective, typeof FullscreenDirective, typeof MaxLessThanDirective, typeof MinGreaterThanDirective, typeof NgInitDirective, typeof NgVarDirective, typeof CapitalizeFirstPipe, typeof ClonePipe, typeof CommasPipe, typeof ConvertPercentPipe, typeof EmojiPipe, typeof EmptyPipe, typeof FileSizePipe, typeof FilterPipe, typeof Filter2Pipe, typeof FindPipe, typeof FixedPipe, typeof FlagIconPipe, typeof HourMeridiemPipe, typeof ImagePipe, typeof IncludesPipe, typeof IsContrastPipe, typeof IsFinitePipe, typeof KUnitPipe, typeof LinkPipe, typeof MarkTextPipe, typeof MaxPipe, typeof MinPipe, typeof MomentDatePipe, typeof MomentFromNowPipe, typeof OrderByPipe, typeof PadNumberPipe, typeof Percent2Pipe, typeof SafeHtmlPipe, typeof TimeStringPipe, typeof TimerPipe, typeof TrackByFnPipe, typeof UnitPipe]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<AngularCoreModule>;
}
export declare function AliasOf(alias: string): PropertyDecorator;
export declare function CoerceArray<T>(): PropertyDecorator;
export declare function CoerceBoolean(): PropertyDecorator;
export declare function CoerceCssPixel(): PropertyDecorator;
export declare function CoerceElement<T>(): PropertyDecorator;
export declare function CoerceNumber(): PropertyDecorator;
export declare function Constants(constants: any): (cmpType: ɵComponentType<any>) => void;
export declare function DefaultValue(): PropertyDecorator;
export declare function Memoize(hasher?: (...args: any[]) => any, validator?: Function): MethodDecorator;
export declare const DESTROY_CMP_SUBJECT_NAME: string;
export declare function destroyCmp<T = any>(instance: T, destroyMethodName?: string): void;
export declare function untilCmpDestroyed<T = any, U = any>(instance: T, destroyMethodName?: string): MonoTypeOperatorFunction<U>;
export declare function Unsubscriber(): ClassDecorator;
export declare const REGEX: {
  readonly NUMBER: RegExp;
  readonly EMAIL: RegExp;
  readonly WEBSITE: RegExp;
  readonly CHARACTER: RegExp;
  readonly PHONE: RegExp;
  readonly EMOJI: RegExp;
};
export declare const CONSTANT: {
  readonly LOCALE: "en-gb";
  readonly TIMEZONE: "Asia/Ho_Chi_Minh";
  readonly DATE_FORMAT: "L";
  readonly TIME_FORMAT: "HH:mm";
  readonly WEEK_START: 1;
  readonly ALLOW_FILE_SIZE: 52428800;
  readonly ALLOW_IMAGE_FILES: readonly ["image/jpg", "image/jpeg", "image/png"];
  readonly ALLOW_VIDEO_FILES: readonly ["video/mp4", "video/mov", "video/avi", "video/wmv", "video/flv", "video/webm"];
  readonly ALLOW_DATE_FORMATS: readonly ["DD/MM/YYYY", "DD-MM-YYYY", "DD/MM/YY", "DD-MM-YY", "MM/DD/YYYY", "MM-DD-YYYY", "MM/DD/YY", "MM-DD-YY", "YYYY/MM/DD", "YYYY-MM-DD", "YY/MM/DD", "YY-MM-DD", "MMMM DD, YYYY", "DD MMMM, YYYY", "MMM DD, YYYY", "DD MMM, YYYY"];
  readonly ALLOW_DOCUMENT_FILES: readonly ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/csv", "application/pdf", "text/csv"];
};
export interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Lax' | 'None' | 'Strict';
}
export declare class StorageService {
  readonly storageConfig: StorageConfig;
  private _cookieService;
  private _cookieOptions;
  /**
   * @constructor
   * @param {StorageConfig} storageConfig
   * @param {CookieService} _cookieService
   */
  constructor(storageConfig: StorageConfig, _cookieService: CookieService);
  /**
   * @param {CookieOptions} options
   * @return {void}
   */
  setCookieOptions(options: CookieOptions): void;
  /**
   * @param {string} key
   * @param {any} data
   * @param {(number | Date)=} expires
   * @return {void}
   */
  setCookie(key: string, data: any, expires?: number | Date): void;
  /**
   * @param {string} key
   * @return {any}
   */
  getCookie(key: string): any;
  /**
   * @param {string} key
   * @param {any} updateData
   * @return {void}
   */
  updateCookie(key: string, updateData: any): void;
  /**
   * @param {string} key
   * @return {void}
   */
  removeCookie(key: string): void;
  /**
   * @return {void}
   */
  clearAllCookies(): void;
  /**
   * @param {string} key
   * @param {any} data
   * @return {void}
   */
  setLocal(key: string, data: any): void;
  /**
   * @param {string} key
   * @return {any}
   */
  getLocal(key: string): any;
  /**
   * @param {string} key
   * @param {any} updateData
   * @return {void}
   */
  updateLocal(key: string, updateData: any): void;
  /**
   * @param {string} key
   * @return {void}
   */
  removeLocal(key: string): void;
  /**
   * @return {void}
   */
  clearAllLocals(): void;
  /**
   * @param {number | Date} expires
   * @return {CookieOptions} options
   */
  private _mergeCookieOptions;
  static ɵfac: i0.ɵɵFactoryDeclaration<StorageService, [{
    optional: true;
  }, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export interface ApiHeaders {
  [key: string]: string;
}
export interface ApiParams {
  [key: string]: any;
}
export declare class ApiService {
  readonly serverConfig: ServerConfig;
  readonly storageConfig: StorageConfig;
  private _http;
  private _storageService;
  errorCatcher$: Subject<any>;
  private _baseURL;
  private _accessToken;
  private _caching;
  private _forceReloadDelayTime;
  private _forceReloadDebounce;
  /**
   * @constructor
   * @param {ServerConfig} serverConfig
   * @param {StorageConfig} storageConfig
   * @param {HttpClient} _http
   * @param {StorageService} _storageService
   */
  constructor(serverConfig: ServerConfig, storageConfig: StorageConfig, _http: HttpClient, _storageService: StorageService);
  /**
   * @param {string} url
   * @return {void}
   */
  setBaseURL(url: string): void;
  /**
   * @param {string} accessToken
   * @return {void}
   */
  setAccessToken(accessToken: string): void;
  /**
   * @param {number} forceReloadDelayTime
   * @return {void}
   */
  setForceReloadDelayTime(forceReloadDelayTime: number): void;
  /**
   * @return {void}
   */
  clearCache(): void;
  /**
   * @param {string} url
   * @param {string=} method
   * @param {ApiParams=} params
   * @param {ApiHeaders=} headers
   * @param {any=} options
   * @return {Observable}
   */
  call(url: string, method?: string, params?: ApiParams | {
    queryParams: ApiParams;
    bodyParams: ApiParams;
  }, headers?: ApiHeaders, options?: any): Observable<any>;
  /**
   * @param {string} url
   * @param {FileList | Array<File>} files
   * @param {ApiHeaders=} headers
   * @param {any=} options
   * @return {Observable}
   */
  upload(url: string, files: FileList | Array<File>, headers?: ApiHeaders, options?: any): Observable<any>;
  /**
   * @param {ApiHeaders} headers
   * @return {HttpHeaders}
   */
  private _setHeaders;
  /**
   * @param {any} error
   * @return {any}
   */
  private _failCallback;
  static ɵfac: i0.ɵɵFactoryDeclaration<ApiService, [{
    optional: true;
  }, {
    optional: true;
  }, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
export declare class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
  /**
   * @param {CanComponentDeactivate} component
   * @return {Observable<boolean> | Promise<boolean> | boolean}
   */
  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<CanDeactivateGuardService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class LocaleService {
  readonly appConfig: AppConfig;
  private _translateService;
  localeChange$: ReplaySubject<string>;
  private _locale;
  /**
   * @param {string} locale
   * @return {void}
   */
  set locale(locale: string);
  /**
   * @return {string}
   */
  get locale(): string;
  /**
   * @constructor
   * @param {AppConfig} appConfig
   * @param {TranslateService} _translateService
   */
  constructor(appConfig: AppConfig, _translateService: TranslateService);
  static ɵfac: i0.ɵɵFactoryDeclaration<LocaleService, [{
    optional: true;
  }, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class LoopService {
  private _intervals;
  /**
   * @param {() => void)} fn
   * @param {number} time
   * @return {number} index
   */
  set(fn: () => void, time: number): number;
  /**
   * @param {number} index
   * @return {void}
   */
  cancel(index: number): void;
  /**
   * @return {void}
   */
  destroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<LoopService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class MediaService {
  private _media;
  /**
   * @constructor
   */
  constructor();
  /**
   * @param {number} breakpoint - Breakpoint to check
   * @return {boolean}
   */
  is(breakpoint: string): boolean;
  /**
   * @param {number} width - Width to check
   * @return {boolean}
   */
  gt(width: number): boolean;
  /**
   * @param {number} width - Width to check
   * @return {boolean}
   */
  lt(width: number): boolean;
  /**
   * @param {number} width - Viewport width
   * @return {void}
   */
  setViewPort(width: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<MediaService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class NetworkService {
  get online$(): Observable<boolean>;
  /**
   * @param {number=} intervalMs
   * @return {void}
   */
  detectOnline(intervalMs?: number): Observable<boolean>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NetworkService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export interface PageURL {
  path: string;
  extras?: NavigationExtras;
}
export declare class PageService {
  readonly appConfig: AppConfig;
  private _router;
  private _titleService;
  private _storageService;
  cacheKey: string;
  private _titleChange$;
  private _processChange$;
  /**
   * @return {ReplaySubject}
   */
  get title(): ReplaySubject<string>;
  /**
   * @return {ReplaySubject}
   */
  get processing(): ReplaySubject<boolean>;
  /**
   * @constructor
   * @param {AppConfig} appConfig
   * @param {Router} _router
   * @param {Title} _titleService
   * @param {StorageService} _storageService
   */
  constructor(appConfig: AppConfig, _router: Router, _titleService: Title, _storageService: StorageService);
  /**
   * @param {string} title
   * @param {string=} prefix
   * @return {void}
   */
  setTitle(title: string, prefix?: string): void;
  /**
   * @return {string}
   */
  getTitle(): string;
  /**
   * @param {string} path
   * @param {NavigationExtras} extras
   * @return {void}
   */
  setCurrentURL(path: string, extras?: NavigationExtras): void;
  /**
   * @return {PageURL}
   */
  getCurrentURL(): PageURL;
  /**
   * @return {void}
   */
  navigateToCurrentURL(): void;
  /**
   * @param {boolean} isProcessing
   * @return {void}
   */
  setProcessing(isProcessing: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PageService, [{
    optional: true;
  }, null, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export interface ServiceWorkerOption {
  serverPublicKey?: string;
  subscriptionEndpoint?: string;
  onNotificationClicked?: (arg: {
    action: string;
    notification: NotificationOptions & {
      title: string;
    };
  }) => void;
  callback?: () => void;
}
export declare class ServiceWorkerService {
  readonly appConfig: AppConfig;
  readonly serverConfig: ServerConfig;
  private _swPush;
  private _swUpdate;
  private _apiService;
  private _notificationClicks$$;
  private _swPushMessages$$;
  /**
   * @constructor
   * @param {AppConfig} appConfig
   * @param {ServerConfig} serverConfig
   * @param {SwPush} _swPush
   * @param {SwUpdate} _swUpdate
   * @param {ApiService} _apiService
   */
  constructor(appConfig: AppConfig, serverConfig: ServerConfig, _swPush: SwPush, _swUpdate: SwUpdate, _apiService: ApiService);
  /**
   * @return {void}
   */
  updateAvailableVersion(): void;
  /**
   * @param {ServiceWorkerOption} options
   * @param {() => void} callback
   * @return {void}
   */
  requestSubscription(options?: ServiceWorkerOption, callback?: (subscription: PushSubscription) => void): void;
  /**
   * @param {ServiceWorkerOption} options
   * @param {Function} callback
   * @return {void}
   */
  enablePushNotification(options?: ServiceWorkerOption, callback?: (subscription: PushSubscription) => void): void;
  /**
   * @return {void}
   */
  disablePushNotification(): void;
  /**
   * @return {Observable}
   */
  listenPushNotification(): Observable<any>;
  static ɵfac: i0.ɵɵFactoryDeclaration<ServiceWorkerService, [{
    optional: true;
  }, {
    optional: true;
  }, null, null, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class SharedService {
  dataChange$: BehaviorSubject<any>;
  namespaceDataChange$: {
    [key: string]: BehaviorSubject<any>;
  };
  private _data;
  /**
   * @param {string} name
   * @param {any} data
   * @return {void}
   */
  setData(name: string, data: any): void;
  /**
   * @param {string} name
   * @return {any}
   */
  getData(name: string): any;
  /**
   * @param {string} name
   * @return {void}
   */
  removeData(name: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<SharedService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class WebNotificationService {
  readonly appConfig: AppConfig;
  permission: NotificationPermission;
  /**
   * @constructor
   * @param {AppConfig} appConfig
   */
  constructor(appConfig: AppConfig);
  /**
   * @return {boolean}
   */
  isSupported(): boolean;
  /**
   * @return {void}
   */
  requestPermission(): void;
  /**
   * @param {string} title - Notification title
   * @param {NotificationOptions} options - Notification options
   * @return {Observable}
   */
  create(title: string, options?: NotificationOptions): Observable<any>;
  /**
   * @param {any[]} source
   * @return {Observable}
   */
  generateNotification(source: {
    title: string;
    alertContent: string;
  }[]): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<WebNotificationService, [{
    optional: true;
  }]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export type WebSocketOptions = SocketOptions | ManagerOptions;
export interface WebSocketConfig {
  url?: string;
  namespace?: string;
  options?: WebSocketOptions;
}
export declare class WebSocketService {
  readonly serverConfig: ServerConfig;
  readonly storageConfig: StorageConfig;
  private _storageService;
  private _accessToken;
  private _socket;
  private _socketChange$;
  get socketChange$(): ReplaySubject<Socket>;
  /**
   * @constructor
   * @param {ServerConfig} serverConfig
   * @param {ServerConfig} storageConfig
   * @param {StorageService} _storageService
   */
  constructor(serverConfig: ServerConfig, storageConfig: StorageConfig, _storageService: StorageService);
  /**
   * @param {string} accessToken
   * @return {void}
   */
  setAccessToken(accessToken: string): void;
  /**
   * @param {WebSocketConfig} config
   * @return {Observable}
   */
  connect(config?: WebSocketConfig): Observable<Socket>;
  /**
   * @param {string} event
   * @param {any} data
   * @return {void}
   */
  emit(event: string, data: any): void;
  /**
   * @param {string} event
   * @return {Observable}
   */
  on(event: string): Observable<any>;
  /**
   * @return {void}
   */
  disconnect(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<WebSocketService, [{
    optional: true;
  }, {
    optional: true;
  }, null]>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare function appInitializerFactory(translateService: TranslateService, localeService: LocaleService, injector: Injector): () => Promise<any>;
export declare class CustomMissingTranslationHandler implements MissingTranslationHandler {
  /**
   * @param {MissingTranslationHandlerParams} params
   * @return {string}
   */
  handle(params: MissingTranslationHandlerParams): string;
}
export declare class MultiTranslateHttpLoader implements TranslateLoader {
  resources: {
    prefix: string;
    suffix: string;
  }[];
  private _http;
  /**
   * @constructor
   * @param {{prefix: string, suffix: string }[]} resources
   * @param {HttpClient} _http
   */
  constructor(resources: {
    prefix: string;
    suffix: string;
  }[], _http: HttpClient);
  /**
   * @param {string} lang
   * @return {Observable<Record<string, unknown>>}
   */
  getTranslation(lang: string): Observable<any>;
}
export declare class FormHelper {
  /**
   * @static
   * @param {any} value
   * @return {any}
   */
  static copyField(value: any): any;
  /**
   * @static
   * @param {FormGroup} form
   * @param {boolean=} resetValue - Flag to reset value
   * @return {void}
   */
  static resetForm(form: UntypedFormGroup, resetValue?: boolean): void;
}
export declare class FormModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<FormModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<FormModule, never, [typeof i1.FormsModule, typeof i1.ReactiveFormsModule], [typeof i1.FormsModule, typeof i1.ReactiveFormsModule]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<FormModule>;
}
export declare class CopyrightComponent {
  year: number;
  static ɵfac: i0.ɵɵFactoryDeclaration<CopyrightComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<CopyrightComponent, "copyright", never, {}, {}, never, never, false, never>;
}
export declare class DragZoneComponent {
  private _translateService;
  name: string;
  /**
   * @constructor
   * @param {TranslateService} _translateService
   */
  constructor(_translateService: TranslateService);
  static ɵfac: i0.ɵɵFactoryDeclaration<DragZoneComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<DragZoneComponent, "drag-zone", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export type INotFoundSize = 'normal' | 'large';
export type INotFoundMode = 'empty' | 'error' | 'search' | 'custom';
export interface INotFoundData {
  name?: string;
  size?: INotFoundSize;
  mode?: INotFoundMode;
  debounceTime?: number;
  emptyImage?: string;
  emptyImageSize?: number[];
  emptyTitle?: string;
  emptyDescription?: string;
  errorImage?: string;
  errorImageSize?: number[];
  errorTitle?: string;
  errorDescription?: string;
}
export declare class NotFoundComponent implements OnChanges, OnInit, OnDestroy {
  private _cdRef;
  private _translateService;
  private _loader;
  get classLarge(): boolean;
  name: string;
  size: INotFoundSize;
  mode: INotFoundMode;
  debounceTime: number;
  emptyImage: string;
  emptyImageSize: number[];
  emptyTitle: string;
  emptyDescription: string;
  errorImage: string;
  errorImageSize: number[];
  errorTitle: string;
  errorDescription: string;
  customImage: string;
  customImageSize: number[];
  customTitle: string;
  customDescription: string;
  loaded: boolean;
  image: string;
  imageSize: number[];
  title: string;
  description: string;
  private _name;
  private _loaderValue$$;
  private _setLoadedDebounce;
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {TranslateService} _translateService
   * @param {LoadingBarService} _loader
   */
  constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService, _loader: LoadingBarService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @return {void}
   */
  private _init;
  /**
   * @return {void}
   */
  private _changeState;
  /**
   * @param {number=} progress
   * @return {void}
   */
  private _setLoaded;
  static ɵfac: i0.ɵɵFactoryDeclaration<NotFoundComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NotFoundComponent, "not-found", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "debounceTime": {
      "alias": "debounceTime";
      "required": false;
    };
    "emptyImage": {
      "alias": "emptyImage";
      "required": false;
    };
    "emptyImageSize": {
      "alias": "emptyImageSize";
      "required": false;
    };
    "emptyTitle": {
      "alias": "emptyTitle";
      "required": false;
    };
    "emptyDescription": {
      "alias": "emptyDescription";
      "required": false;
    };
    "errorImage": {
      "alias": "errorImage";
      "required": false;
    };
    "errorImageSize": {
      "alias": "errorImageSize";
      "required": false;
    };
    "errorTitle": {
      "alias": "errorTitle";
      "required": false;
    };
    "errorDescription": {
      "alias": "errorDescription";
      "required": false;
    };
    "customImage": {
      "alias": "customImage";
      "required": false;
    };
    "customImageSize": {
      "alias": "customImageSize";
      "required": false;
    };
    "customTitle": {
      "alias": "customTitle";
      "required": false;
    };
    "customDescription": {
      "alias": "customDescription";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class SeenAllComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<SeenAllComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<SeenAllComponent, "seen-all", never, {}, {}, never, never, false, never>;
}
export declare class HighlightStateDirective implements OnChanges {
  private _elementRef;
  highlightType: 'background' | 'border';
  highlightColor: string;
  highlightState: boolean;
  highlightDisabled: boolean;
  autoUnhighlight: boolean;
  autoUnhighlightDelay: number;
  highlightStateChange: EventEmitter<boolean>;
  private _unsetHighlightDebounce;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {boolean=} isForceAutoUnhighlight
   * @return {void}
   */
  setHighlight(isForceAutoUnhighlight?: boolean): void;
  /**
   * @return {void}
   */
  unsetHighlight(): void;
  /**
   * @return {void}
   */
  private _addStyle;
  /**
   * @return {void}
   */
  private _removeStyle;
  static ɵfac: i0.ɵɵFactoryDeclaration<HighlightStateDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<HighlightStateDirective, "[highlightState]", never, {
    "highlightType": {
      "alias": "highlightType";
      "required": false;
    };
    "highlightColor": {
      "alias": "highlightColor";
      "required": false;
    };
    "highlightState": {
      "alias": "highlightState";
      "required": false;
    };
    "highlightDisabled": {
      "alias": "highlightDisabled";
      "required": false;
    };
    "autoUnhighlight": {
      "alias": "autoUnhighlight";
      "required": false;
    };
    "autoUnhighlightDelay": {
      "alias": "autoUnhighlightDelay";
      "required": false;
    };
  }, {
    "highlightStateChange": "highlightStateChange";
  }, never, never, false, never>;
}
export declare class NgCacheIfDirective implements OnChanges, OnDestroy {
  private _templateRef;
  private _vcRef;
  ngCacheIf: any;
  ngCacheIfElse: TemplateRef<any>;
  private _loaded;
  /**
   * @constructor
   * @param {TemplateRef<any>} _templateRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_templateRef: TemplateRef<any>, _vcRef: ViewContainerRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgCacheIfDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgCacheIfDirective, "[ngCacheIf]", ["ngCacheIf"], {
    "ngCacheIf": {
      "alias": "ngCacheIf";
      "required": false;
    };
    "ngCacheIfElse": {
      "alias": "ngCacheIfElse";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class ChannelURLPipe implements PipeTransform {
  private _sanitizer;
  /**
   * @constructor
   * @param {DomSanitizer} _sanitizer
   */
  constructor(_sanitizer: DomSanitizer);
  /**
   * @param {string} channelID
   * @param {boolean} isSafeUrl
   * @return {string | SafeUrl}
   */
  transform(channelID: string, isSafeUrl?: boolean): string | SafeUrl;
  static ɵfac: i0.ɵɵFactoryDeclaration<ChannelURLPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ChannelURLPipe, "channelURL", false>;
}
export declare class ColorPipe implements PipeTransform {
  /**
   * @param {string} name
   * @param {number} weight
   * @param {number} opacity
   * @return {string}
   */
  transform(name: string, weight?: number, opacity?: number): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<ColorPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ColorPipe, "color", false>;
}
export declare class ContrastPipe extends IsContrastPipe implements PipeTransform {
  /**
   * @param {string} hex
   * @param {string} textColor
   * @return {any}
   */
  transform(hex: string, textColor?: string): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<ContrastPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ContrastPipe, "contrast", false>;
}
export declare class ControlErrorsPipe implements PipeTransform {
  private _translateService;
  static TRANSLATE_KEY_LOOKUP: IObject;
  /**
   * @constructor
   * @param {TranslateService} _translateService
   */
  constructor(_translateService: TranslateService);
  /**
   * @param {ValidationErrors} errors
   * @param {string} field
   * @param {boolean} multiple
   * @return {string[]}
   */
  transform(errors: ValidationErrors, field: string, multiple?: boolean): string[];
  /**
   * @param {ValidationErrors} errors
   * @param {string} field
   * @param {boolean} multiple
   * @return {string[]}
   */
  private _getFieldErrors;
  static ɵfac: i0.ɵɵFactoryDeclaration<ControlErrorsPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ControlErrorsPipe, "controlErrors", false>;
}
export declare class EnvironmentPipe implements PipeTransform {
  /**
   * @param {string} propertyName
   * @return {string}
   */
  transform(propertyName: string): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<EnvironmentPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<EnvironmentPipe, "environment", false>;
}
export declare class ExamplePhoneNumberPipe implements PipeTransform {
  /**
   * @param {CountryCode} countryCode
   * @return {string}
   */
  transform(countryCode: CountryCode): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<ExamplePhoneNumberPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<ExamplePhoneNumberPipe, "examplePhoneNumber", false>;
}
export declare class FileIconPipe implements PipeTransform {
  /**
   * @param {string} filename
   * @param {string} size
   * @return {string}
   */
  transform(filename: string, size?: string): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<FileIconPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FileIconPipe, "fileIcon", false>;
}
export declare class FlagImagePipe implements PipeTransform {
  /**
   * @param {CountryCode} countryCode
   * @return {string}
   */
  transform(countryCode: CountryCode): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<FlagImagePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<FlagImagePipe, "flagImage", false>;
}
export interface IMetaEmbed {
  title: string;
  description: string;
  url: string;
  siteName: string;
  contentType: string;
  mediaType: string;
  images: string[];
  favicons: string[];
}
export declare class MetaEmbedPipe implements PipeTransform {
  private _domSanitizer;
  /**
   * @constructor
   * @param {DomSanitizer} _domSanitizer
   */
  constructor(_domSanitizer: DomSanitizer);
  /**
   * @param {IMetaEmbed} meta
   * @return {SafeHtml}
   */
  transform(meta: IMetaEmbed): SafeHtml;
  /**
   * @param {string} siteUrl
   * @param {string} siteName
   * @param {string} contentType
   * @param {string} mediaType
   * @param {string} mediaImage
   * @return {SafeHtml}
   */
  private _render;
  static ɵfac: i0.ɵɵFactoryDeclaration<MetaEmbedPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<MetaEmbedPipe, "metaEmbed", false>;
}
export declare class PhonePipe implements PipeTransform {
  /**
   * @param {string} phone
   * @param {CountryCode} countryCode
   * @return {string}
   */
  transform(phone: string, countryCode: CountryCode): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<PhonePipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<PhonePipe, "phone", false>;
}
export declare class CoreModule {
  /**
   * @constructor
   * @param {AppConfig} _appConfig
   * @param {ServerConfig} _serverConfig
   * @param {DateTimeConfig} _dateTimeConfig
   * @param {StorageConfig} _storageConfig
   */
  constructor();
  static ɵfac: i0.ɵɵFactoryDeclaration<CoreModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<CoreModule, [typeof CopyrightComponent, typeof DragZoneComponent, typeof NotFoundComponent, typeof SeenAllComponent, typeof HighlightStateDirective, typeof NgCacheIfDirective, typeof ChannelURLPipe, typeof ColorPipe, typeof ContrastPipe, typeof ControlErrorsPipe, typeof EnvironmentPipe, typeof ExamplePhoneNumberPipe, typeof FileIconPipe, typeof FlagImagePipe, typeof MetaEmbedPipe, typeof PhonePipe], [typeof i48.TranslatePipe, typeof i48.TranslateDirective, typeof i18.RoundProgressModule, typeof AngularCoreModule, typeof FormModule, typeof i21.LazyLoadImageModule], [typeof i48.TranslatePipe, typeof i48.TranslateDirective, typeof AngularCoreModule, typeof i21.LazyLoadImageModule, typeof CopyrightComponent, typeof DragZoneComponent, typeof NotFoundComponent, typeof SeenAllComponent, typeof HighlightStateDirective, typeof NgCacheIfDirective, typeof ChannelURLPipe, typeof ColorPipe, typeof ContrastPipe, typeof ControlErrorsPipe, typeof EnvironmentPipe, typeof ExamplePhoneNumberPipe, typeof FileIconPipe, typeof FlagImagePipe, typeof MetaEmbedPipe, typeof PhonePipe]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<CoreModule>;
}
export declare class EqualValidators {
  /**
   * @static
   * @param {string} equal
   * @param {boolean} reverse
   * @param {any} options
   * @return {() => {}}
   */
  static validator(equal: string, reverse?: boolean, options?: any): (c: UntypedFormControl) => {};
  /**
   * @static
   * @param {AbstractControl} group
   * @return {ValidationErrors | null}
   */
  static disallowSimilarPassword(group: AbstractControl): ValidationErrors | null;
  /**
   * @static
   * @param {AbstractControl} group
   * @return {ValidationErrors | null}
   */
  static matchPassword(group: AbstractControl): ValidationErrors | null;
  /**
   * @static
   * @param {any[] | Function} array
   * @param {boolean} caseSensitive
   * @param {string} property
   * @return {ValidatorFn}
   */
  static uniqueNameValidator(array: any[] | Function, caseSensitive?: boolean, property?: string): ValidatorFn;
}
export declare class BoilerplateComponent {
  protected destroyed$: Subject<void>;
}
export interface IDebounceOptions {
  leading?: boolean;
  trailing?: boolean;
}
export declare function Debounce(debounceTime?: number, options?: IDebounceOptions): Function;
export interface IThrottleOptions {
  leading?: boolean;
  trailing?: boolean;
}
export declare function Throttle(throttleTime?: number, options?: IThrottleOptions): Function;
export interface IRouteData {
  sidebar?: boolean;
  cache?: boolean;
}
export type IObject<T = any> = Record<string, T>;
export declare const calculateOrders: ReturnType<typeof _.memoize>;
export declare const calculateOrder: ReturnType<typeof _.memoize>;
export declare class AppearanceService {
  /**
   * @param {string} primaryColor
   * @return {void}
   */
  setPrimaryColor(primaryColor?: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<AppearanceService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export interface I18nAnotation {
  prefix?: string;
  loader?: Function;
}
export declare function I18n(data?: I18nAnotation): (_target: Function) => void;
export declare class TranslateModule {
  static forRoot(config?: any): ModuleWithProviders<TranslateModule>;
  static ɵfac: i0.ɵɵFactoryDeclaration<TranslateModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<TranslateModule, never, [typeof i48.TranslatePipe, typeof i48.TranslateDirective], [typeof i48.TranslatePipe, typeof i48.TranslateDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<TranslateModule>;
}
export declare const I18nTranslateModule: ModuleWithProviders<TranslateModule>;
export interface INgcEnvironment {
  PRODUCTION?: boolean;
  SIGN_UP_FEATURE?: boolean;
  SERVER_API_URL?: string;
  SERVER_WEBSOCKET_URL?: string;
  APP_URL?: string;
  APP_DOMAIN?: string;
  APP_NAME?: string;
  APP_TITLE?: string;
  APP_LOGO?: string;
  GOOGLE_DRIVE_CLIENT_ID?: string;
  ONEDRIVE_CLIENT_ID?: string;
  DROPBOX_APP_KEY?: string;
  [key: string]: any;
}
export declare const NGC_ENVIRONMENT: InjectionToken<INgcEnvironment>;
export declare const DEFAULT_ENVIRONMENT: INgcEnvironment;
export declare const ENVIRONMENT: INgcEnvironment;
export declare const COLOR: {
  readonly WHITE: "#fff";
  readonly BLACK: "#000";
  readonly PRIMARY: "#444446";
  readonly SECONDARY: "#fafafa";
  readonly DEFAULT: "#f5f5f5";
  readonly INFO: "#0a84ff";
  readonly SUCCESS: "#34c759";
  readonly WARNING: "#dfbf00";
  readonly DANGER: "#ff3130";
  readonly TEXT: "#242426";
  readonly LABEL: "#8e8e93";
  readonly DISABLED: "#c4c4c6";
  readonly PLACEHOLDER: "#c4c4c6";
  readonly BORDER_SUPER_THICK: "#8e8e93";
  readonly BORDER_THICK: "#babcc0";
  readonly BORDER: "#e4e4e6";
  readonly HIGHLIGHT: "#f4f0d9";
  readonly BLUE: {
    readonly 700: "#0040dd";
    readonly 500: "#0a84ff";
    readonly 400: "#409cff";
  };
  readonly GREEN: {
    readonly 700: "#248a3d";
    readonly 500: "#34c759";
    readonly 400: "#30db5b";
  };
  readonly YELLOW: {
    readonly 700: "#b79900";
    readonly 500: "#dfbf00";
    readonly 400: "#ffd426";
  };
  readonly RED: {
    readonly 700: "#d70015";
    readonly 500: "#ff3130";
    readonly 400: "#ff6961";
  };
  readonly ORANGE: {
    readonly 700: "#cb6f10";
    readonly 500: "#ff9500";
    readonly 400: "#ffb35b";
  };
  readonly PURPLE: {
    readonly 700: "#8944ab";
    readonly 500: "#af52de";
    readonly 400: "#da8fff";
  };
  readonly PINK: {
    readonly 700: "#d30f45";
    readonly 500: "#ff2d55";
    readonly 400: "#ff6482";
  };
  readonly INDIGO: {
    readonly 700: "#3634a3";
    readonly 500: "#5856d6";
    readonly 400: "#7d7aff";
  };
  readonly TEAL: {
    readonly 700: "#0071a4";
    readonly 500: "#5ac8fa";
    readonly 400: "#70d7ff";
  };
  readonly MINT: {
    readonly 700: "#3fb077";
    readonly 500: "#4cdd94";
    readonly 400: "#69f0ac";
  };
  readonly DARK_GRAY: {
    readonly 700: "#242426";
    readonly 500: "#444446";
    readonly 400: "#545456";
    readonly 300: "#6c6c70";
    readonly 200: "#7c7c80";
  };
  readonly LIGHT_GRAY: {
    readonly 700: "#8e8e93";
    readonly 500: "#babcc0";
    readonly 400: "#c4c4c6";
    readonly 300: "#e4e4e6";
    readonly 200: "#eee";
  };
  readonly OTHERS: readonly ["#0040dd", "#0a84ff", "#409cff", "#248a3d", "#34c759", "#8ecba8", "#b79900", "#dfbf00", "#ffd426", "#d70015", "#ff3130", "#ff6961", "#cb6f10", "#ff9500", "#ffb35b", "#8944ab", "#af52de", "#da8fff", "#d30f45", "#ff2d55", "#ff6482", "#3634a3", "#5856d6", "#7d7aff", "#0071a4", "#5ac8fa", "#70d7ff", "#3fb077", "#4cdd94", "#69f0ac", "#242426", "#444446", "#545456"];
};
declare const CONSTANT$1: {
  readonly USE_VIRTUAL_SCROLL_WITH: 20;
  readonly WORKING_WEEKDAYS: readonly [0, 1, 1, 1, 1, 1, 0];
  readonly CLOUD_STORAGE: {
    readonly googleDrive: true;
    readonly dropbox: true;
    readonly oneDrive: true;
  };
  readonly MAIN_PATH: "collection";
  readonly API_HEADER: {
    readonly FORCE_RELOAD: {
      readonly 'Force-Reload': "true";
    };
  };
  readonly SOCKET_TOPIC: {
    readonly NOTIFICATION: "notification";
    readonly NOTIFICATION_HIGHLIGHT: "notification_highlight";
    readonly BOARD_DUPLICATE_PROCESS: "board_duplicate_process";
  };
  readonly DIALOG_UNIQ_KEY: {
    readonly AUTOMATION: "automation";
    readonly BOARD_INFO: "board_info";
    readonly BOARD_ITEM: "board_item";
    readonly CONFIRM_PASSWORD: "confirm_password";
    readonly DOCUMENT: "document";
    readonly EXPORT_DOCUMENT: "export_document";
    readonly FORM_FIELD: "form_field";
    readonly PERMISSION: "permission";
    readonly VALIDATION: "validation";
  };
  readonly LOCALE: "en-gb";
  readonly TIMEZONE: "Asia/Ho_Chi_Minh";
  readonly DATE_FORMAT: "L";
  readonly TIME_FORMAT: "HH:mm";
  readonly WEEK_START: 1;
  readonly ALLOW_FILE_SIZE: 52428800;
  readonly ALLOW_IMAGE_FILES: readonly ["image/jpg", "image/jpeg", "image/png"];
  readonly ALLOW_VIDEO_FILES: readonly ["video/mp4", "video/mov", "video/avi", "video/wmv", "video/flv", "video/webm"];
  readonly ALLOW_DATE_FORMATS: readonly ["DD/MM/YYYY", "DD-MM-YYYY", "DD/MM/YY", "DD-MM-YY", "MM/DD/YYYY", "MM-DD-YYYY", "MM/DD/YY", "MM-DD-YY", "YYYY/MM/DD", "YYYY-MM-DD", "YY/MM/DD", "YY-MM-DD", "MMMM DD, YYYY", "DD MMMM, YYYY", "MMM DD, YYYY", "DD MMM, YYYY"];
  readonly ALLOW_DOCUMENT_FILES: readonly ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/csv", "application/pdf", "text/csv"];
};
export declare const CURRENCIES: {
  readonly USD: {
    readonly symbol: "$";
    readonly name: "US Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "USD";
    readonly namePlural: "US dollars";
  };
  readonly CAD: {
    readonly symbol: "CA$";
    readonly name: "Canadian Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "CAD";
    readonly namePlural: "Canadian dollars";
  };
  readonly EUR: {
    readonly symbol: "€";
    readonly name: "Euro";
    readonly symbolNative: "€";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "EUR";
    readonly namePlural: "euros";
  };
  readonly AED: {
    readonly symbol: "AED";
    readonly name: "United Arab Emirates Dirham";
    readonly symbolNative: "د.إ.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "AED";
    readonly namePlural: "UAE dirhams";
  };
  readonly AFN: {
    readonly symbol: "Af";
    readonly name: "Afghan Afghani";
    readonly symbolNative: "؋";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "AFN";
    readonly namePlural: "Afghan Afghanis";
  };
  readonly ALL: {
    readonly symbol: "ALL";
    readonly name: "Albanian Lek";
    readonly symbolNative: "Lek";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "ALL";
    readonly namePlural: "Albanian lekë";
  };
  readonly AMD: {
    readonly symbol: "AMD";
    readonly name: "Armenian Dram";
    readonly symbolNative: "դր.";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "AMD";
    readonly namePlural: "Armenian drams";
  };
  readonly ARS: {
    readonly symbol: "AR$";
    readonly name: "Argentine Peso";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "ARS";
    readonly namePlural: "Argentine pesos";
  };
  readonly AUD: {
    readonly symbol: "AU$";
    readonly name: "Australian Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "AUD";
    readonly namePlural: "Australian dollars";
  };
  readonly AZN: {
    readonly symbol: "man.";
    readonly name: "Azerbaijani Manat";
    readonly symbolNative: "ман.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "AZN";
    readonly namePlural: "Azerbaijani manats";
  };
  readonly BAM: {
    readonly symbol: "KM";
    readonly name: "Bosnia-Herzegovina Convertible Mark";
    readonly symbolNative: "KM";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BAM";
    readonly namePlural: "Bosnia-Herzegovina convertible marks";
  };
  readonly BDT: {
    readonly symbol: "Tk";
    readonly name: "Bangladeshi Taka";
    readonly symbolNative: "৳";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BDT";
    readonly namePlural: "Bangladeshi takas";
  };
  readonly BGN: {
    readonly symbol: "BGN";
    readonly name: "Bulgarian Lev";
    readonly symbolNative: "лв.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BGN";
    readonly namePlural: "Bulgarian leva";
  };
  readonly BHD: {
    readonly symbol: "BD";
    readonly name: "Bahraini Dinar";
    readonly symbolNative: "د.ب.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "BHD";
    readonly namePlural: "Bahraini dinars";
  };
  readonly BIF: {
    readonly symbol: "FBu";
    readonly name: "Burundian Franc";
    readonly symbolNative: "FBu";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "BIF";
    readonly namePlural: "Burundian francs";
  };
  readonly BND: {
    readonly symbol: "BN$";
    readonly name: "Brunei Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BND";
    readonly namePlural: "Brunei dollars";
  };
  readonly BOB: {
    readonly symbol: "Bs";
    readonly name: "Bolivian Boliviano";
    readonly symbolNative: "Bs";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BOB";
    readonly namePlural: "Bolivian bolivianos";
  };
  readonly BRL: {
    readonly symbol: "R$";
    readonly name: "Brazilian Real";
    readonly symbolNative: "R$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BRL";
    readonly namePlural: "Brazilian reals";
  };
  readonly BWP: {
    readonly symbol: "BWP";
    readonly name: "Botswanan Pula";
    readonly symbolNative: "P";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BWP";
    readonly namePlural: "Botswanan pulas";
  };
  readonly BYN: {
    readonly symbol: "Br";
    readonly name: "Belarusian Ruble";
    readonly symbolNative: "руб.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BYN";
    readonly namePlural: "Belarusian rubles";
  };
  readonly BZD: {
    readonly symbol: "BZ$";
    readonly name: "Belize Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "BZD";
    readonly namePlural: "Belize dollars";
  };
  readonly CDF: {
    readonly symbol: "CDF";
    readonly name: "Congolese Franc";
    readonly symbolNative: "FrCD";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "CDF";
    readonly namePlural: "Congolese francs";
  };
  readonly CHF: {
    readonly symbol: "CHF";
    readonly name: "Swiss Franc";
    readonly symbolNative: "CHF";
    readonly decimalDigits: 2;
    readonly rounding: 0.05;
    readonly code: "CHF";
    readonly namePlural: "Swiss francs";
  };
  readonly CLP: {
    readonly symbol: "CL$";
    readonly name: "Chilean Peso";
    readonly symbolNative: "$";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "CLP";
    readonly namePlural: "Chilean pesos";
  };
  readonly CNY: {
    readonly symbol: "CN¥";
    readonly name: "Chinese Yuan";
    readonly symbolNative: "CN¥";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "CNY";
    readonly namePlural: "Chinese yuan";
  };
  readonly COP: {
    readonly symbol: "CO$";
    readonly name: "Colombian Peso";
    readonly symbolNative: "$";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "COP";
    readonly namePlural: "Colombian pesos";
  };
  readonly CRC: {
    readonly symbol: "₡";
    readonly name: "Costa Rican Colón";
    readonly symbolNative: "₡";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "CRC";
    readonly namePlural: "Costa Rican colóns";
  };
  readonly CVE: {
    readonly symbol: "CV$";
    readonly name: "Cape Verdean Escudo";
    readonly symbolNative: "CV$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "CVE";
    readonly namePlural: "Cape Verdean escudos";
  };
  readonly CZK: {
    readonly symbol: "Kč";
    readonly name: "Czech Republic Koruna";
    readonly symbolNative: "Kč";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "CZK";
    readonly namePlural: "Czech Republic korunas";
  };
  readonly DJF: {
    readonly symbol: "Fdj";
    readonly name: "Djiboutian Franc";
    readonly symbolNative: "Fdj";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "DJF";
    readonly namePlural: "Djiboutian francs";
  };
  readonly DKK: {
    readonly symbol: "Dkr";
    readonly name: "Danish Krone";
    readonly symbolNative: "kr";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "DKK";
    readonly namePlural: "Danish kroner";
  };
  readonly DOP: {
    readonly symbol: "RD$";
    readonly name: "Dominican Peso";
    readonly symbolNative: "RD$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "DOP";
    readonly namePlural: "Dominican pesos";
  };
  readonly DZD: {
    readonly symbol: "DA";
    readonly name: "Algerian Dinar";
    readonly symbolNative: "د.ج.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "DZD";
    readonly namePlural: "Algerian dinars";
  };
  readonly EEK: {
    readonly symbol: "Ekr";
    readonly name: "Estonian Kroon";
    readonly symbolNative: "kr";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "EEK";
    readonly namePlural: "Estonian kroons";
  };
  readonly EGP: {
    readonly symbol: "EGP";
    readonly name: "Egyptian Pound";
    readonly symbolNative: "ج.م.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "EGP";
    readonly namePlural: "Egyptian pounds";
  };
  readonly ERN: {
    readonly symbol: "Nfk";
    readonly name: "Eritrean Nakfa";
    readonly symbolNative: "Nfk";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "ERN";
    readonly namePlural: "Eritrean nakfas";
  };
  readonly ETB: {
    readonly symbol: "Br";
    readonly name: "Ethiopian Birr";
    readonly symbolNative: "Br";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "ETB";
    readonly namePlural: "Ethiopian birrs";
  };
  readonly GBP: {
    readonly symbol: "£";
    readonly name: "British Pound Sterling";
    readonly symbolNative: "£";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "GBP";
    readonly namePlural: "British pounds sterling";
  };
  readonly GEL: {
    readonly symbol: "GEL";
    readonly name: "Georgian Lari";
    readonly symbolNative: "GEL";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "GEL";
    readonly namePlural: "Georgian laris";
  };
  readonly GHS: {
    readonly symbol: "GH₵";
    readonly name: "Ghanaian Cedi";
    readonly symbolNative: "GH₵";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "GHS";
    readonly namePlural: "Ghanaian cedis";
  };
  readonly GNF: {
    readonly symbol: "FG";
    readonly name: "Guinean Franc";
    readonly symbolNative: "FG";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "GNF";
    readonly namePlural: "Guinean francs";
  };
  readonly GTQ: {
    readonly symbol: "GTQ";
    readonly name: "Guatemalan Quetzal";
    readonly symbolNative: "Q";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "GTQ";
    readonly namePlural: "Guatemalan quetzals";
  };
  readonly HKD: {
    readonly symbol: "HK$";
    readonly name: "Hong Kong Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "HKD";
    readonly namePlural: "Hong Kong dollars";
  };
  readonly HNL: {
    readonly symbol: "HNL";
    readonly name: "Honduran Lempira";
    readonly symbolNative: "L";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "HNL";
    readonly namePlural: "Honduran lempiras";
  };
  readonly HRK: {
    readonly symbol: "kn";
    readonly name: "Croatian Kuna";
    readonly symbolNative: "kn";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "HRK";
    readonly namePlural: "Croatian kunas";
  };
  readonly HUF: {
    readonly symbol: "Ft";
    readonly name: "Hungarian Forint";
    readonly symbolNative: "Ft";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "HUF";
    readonly namePlural: "Hungarian forints";
  };
  readonly IDR: {
    readonly symbol: "Rp";
    readonly name: "Indonesian Rupiah";
    readonly symbolNative: "Rp";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "IDR";
    readonly namePlural: "Indonesian rupiahs";
  };
  readonly ILS: {
    readonly symbol: "₪";
    readonly name: "Israeli New Sheqel";
    readonly symbolNative: "₪";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "ILS";
    readonly namePlural: "Israeli new sheqels";
  };
  readonly INR: {
    readonly symbol: "Rs";
    readonly name: "Indian Rupee";
    readonly symbolNative: "টকা";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "INR";
    readonly namePlural: "Indian rupees";
  };
  readonly IQD: {
    readonly symbol: "IQD";
    readonly name: "Iraqi Dinar";
    readonly symbolNative: "د.ع.‏";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "IQD";
    readonly namePlural: "Iraqi dinars";
  };
  readonly IRR: {
    readonly symbol: "IRR";
    readonly name: "Iranian Rial";
    readonly symbolNative: "﷼";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "IRR";
    readonly namePlural: "Iranian rials";
  };
  readonly ISK: {
    readonly symbol: "Ikr";
    readonly name: "Icelandic Króna";
    readonly symbolNative: "kr";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "ISK";
    readonly namePlural: "Icelandic krónur";
  };
  readonly JMD: {
    readonly symbol: "J$";
    readonly name: "Jamaican Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "JMD";
    readonly namePlural: "Jamaican dollars";
  };
  readonly JOD: {
    readonly symbol: "JD";
    readonly name: "Jordanian Dinar";
    readonly symbolNative: "د.أ.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "JOD";
    readonly namePlural: "Jordanian dinars";
  };
  readonly JPY: {
    readonly symbol: "¥";
    readonly name: "Japanese Yen";
    readonly symbolNative: "￥";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "JPY";
    readonly namePlural: "Japanese yen";
  };
  readonly KES: {
    readonly symbol: "Ksh";
    readonly name: "Kenyan Shilling";
    readonly symbolNative: "Ksh";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "KES";
    readonly namePlural: "Kenyan shillings";
  };
  readonly KHR: {
    readonly symbol: "KHR";
    readonly name: "Cambodian Riel";
    readonly symbolNative: "៛";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "KHR";
    readonly namePlural: "Cambodian riels";
  };
  readonly KMF: {
    readonly symbol: "CF";
    readonly name: "Comorian Franc";
    readonly symbolNative: "FC";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "KMF";
    readonly namePlural: "Comorian francs";
  };
  readonly KRW: {
    readonly symbol: "₩";
    readonly name: "South Korean Won";
    readonly symbolNative: "₩";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "KRW";
    readonly namePlural: "South Korean won";
  };
  readonly KWD: {
    readonly symbol: "KD";
    readonly name: "Kuwaiti Dinar";
    readonly symbolNative: "د.ك.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "KWD";
    readonly namePlural: "Kuwaiti dinars";
  };
  readonly KZT: {
    readonly symbol: "KZT";
    readonly name: "Kazakhstani Tenge";
    readonly symbolNative: "тңг.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "KZT";
    readonly namePlural: "Kazakhstani tenges";
  };
  readonly LBP: {
    readonly symbol: "LB£";
    readonly name: "Lebanese Pound";
    readonly symbolNative: "ل.ل.‏";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "LBP";
    readonly namePlural: "Lebanese pounds";
  };
  readonly LKR: {
    readonly symbol: "SLRs";
    readonly name: "Sri Lankan Rupee";
    readonly symbolNative: "SL Re";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "LKR";
    readonly namePlural: "Sri Lankan rupees";
  };
  readonly LTL: {
    readonly symbol: "Lt";
    readonly name: "Lithuanian Litas";
    readonly symbolNative: "Lt";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "LTL";
    readonly namePlural: "Lithuanian litai";
  };
  readonly LVL: {
    readonly symbol: "Ls";
    readonly name: "Latvian Lats";
    readonly symbolNative: "Ls";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "LVL";
    readonly namePlural: "Latvian lati";
  };
  readonly LYD: {
    readonly symbol: "LD";
    readonly name: "Libyan Dinar";
    readonly symbolNative: "د.ل.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "LYD";
    readonly namePlural: "Libyan dinars";
  };
  readonly MAD: {
    readonly symbol: "MAD";
    readonly name: "Moroccan Dirham";
    readonly symbolNative: "د.م.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MAD";
    readonly namePlural: "Moroccan dirhams";
  };
  readonly MDL: {
    readonly symbol: "MDL";
    readonly name: "Moldovan Leu";
    readonly symbolNative: "MDL";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MDL";
    readonly namePlural: "Moldovan lei";
  };
  readonly MGA: {
    readonly symbol: "MGA";
    readonly name: "Malagasy Ariary";
    readonly symbolNative: "MGA";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "MGA";
    readonly namePlural: "Malagasy Ariaries";
  };
  readonly MKD: {
    readonly symbol: "MKD";
    readonly name: "Macedonian Denar";
    readonly symbolNative: "MKD";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MKD";
    readonly namePlural: "Macedonian denari";
  };
  readonly MMK: {
    readonly symbol: "MMK";
    readonly name: "Myanma Kyat";
    readonly symbolNative: "K";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "MMK";
    readonly namePlural: "Myanma kyats";
  };
  readonly MOP: {
    readonly symbol: "MOP$";
    readonly name: "Macanese Pataca";
    readonly symbolNative: "MOP$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MOP";
    readonly namePlural: "Macanese patacas";
  };
  readonly MUR: {
    readonly symbol: "MURs";
    readonly name: "Mauritian Rupee";
    readonly symbolNative: "MURs";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "MUR";
    readonly namePlural: "Mauritian rupees";
  };
  readonly MXN: {
    readonly symbol: "MX$";
    readonly name: "Mexican Peso";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MXN";
    readonly namePlural: "Mexican pesos";
  };
  readonly MYR: {
    readonly symbol: "RM";
    readonly name: "Malaysian Ringgit";
    readonly symbolNative: "RM";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MYR";
    readonly namePlural: "Malaysian ringgits";
  };
  readonly MZN: {
    readonly symbol: "MTn";
    readonly name: "Mozambican Metical";
    readonly symbolNative: "MTn";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "MZN";
    readonly namePlural: "Mozambican meticals";
  };
  readonly NAD: {
    readonly symbol: "N$";
    readonly name: "Namibian Dollar";
    readonly symbolNative: "N$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NAD";
    readonly namePlural: "Namibian dollars";
  };
  readonly NGN: {
    readonly symbol: "₦";
    readonly name: "Nigerian Naira";
    readonly symbolNative: "₦";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NGN";
    readonly namePlural: "Nigerian nairas";
  };
  readonly NIO: {
    readonly symbol: "C$";
    readonly name: "Nicaraguan Córdoba";
    readonly symbolNative: "C$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NIO";
    readonly namePlural: "Nicaraguan córdobas";
  };
  readonly NOK: {
    readonly symbol: "Nkr";
    readonly name: "Norwegian Krone";
    readonly symbolNative: "kr";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NOK";
    readonly namePlural: "Norwegian kroner";
  };
  readonly NPR: {
    readonly symbol: "NPRs";
    readonly name: "Nepalese Rupee";
    readonly symbolNative: "नेरू";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NPR";
    readonly namePlural: "Nepalese rupees";
  };
  readonly NZD: {
    readonly symbol: "NZ$";
    readonly name: "New Zealand Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "NZD";
    readonly namePlural: "New Zealand dollars";
  };
  readonly OMR: {
    readonly symbol: "OMR";
    readonly name: "Omani Rial";
    readonly symbolNative: "ر.ع.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "OMR";
    readonly namePlural: "Omani rials";
  };
  readonly PAB: {
    readonly symbol: "B/.";
    readonly name: "Panamanian Balboa";
    readonly symbolNative: "B/.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "PAB";
    readonly namePlural: "Panamanian balboas";
  };
  readonly PEN: {
    readonly symbol: "S/.";
    readonly name: "Peruvian Nuevo Sol";
    readonly symbolNative: "S/.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "PEN";
    readonly namePlural: "Peruvian nuevos soles";
  };
  readonly PHP: {
    readonly symbol: "₱";
    readonly name: "Philippine Peso";
    readonly symbolNative: "₱";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "PHP";
    readonly namePlural: "Philippine pesos";
  };
  readonly PKR: {
    readonly symbol: "PKRs";
    readonly name: "Pakistani Rupee";
    readonly symbolNative: "₨";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "PKR";
    readonly namePlural: "Pakistani rupees";
  };
  readonly PLN: {
    readonly symbol: "zł";
    readonly name: "Polish Zloty";
    readonly symbolNative: "zł";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "PLN";
    readonly namePlural: "Polish zlotys";
  };
  readonly PYG: {
    readonly symbol: "₲";
    readonly name: "Paraguayan Guarani";
    readonly symbolNative: "₲";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "PYG";
    readonly namePlural: "Paraguayan guaranis";
  };
  readonly QAR: {
    readonly symbol: "QR";
    readonly name: "Qatari Rial";
    readonly symbolNative: "ر.ق.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "QAR";
    readonly namePlural: "Qatari rials";
  };
  readonly RON: {
    readonly symbol: "RON";
    readonly name: "Romanian Leu";
    readonly symbolNative: "RON";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "RON";
    readonly namePlural: "Romanian lei";
  };
  readonly RSD: {
    readonly symbol: "din.";
    readonly name: "Serbian Dinar";
    readonly symbolNative: "дин.";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "RSD";
    readonly namePlural: "Serbian dinars";
  };
  readonly RUB: {
    readonly symbol: "RUB";
    readonly name: "Russian Ruble";
    readonly symbolNative: "₽.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "RUB";
    readonly namePlural: "Russian rubles";
  };
  readonly RWF: {
    readonly symbol: "RWF";
    readonly name: "Rwandan Franc";
    readonly symbolNative: "FR";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "RWF";
    readonly namePlural: "Rwandan francs";
  };
  readonly SAR: {
    readonly symbol: "SR";
    readonly name: "Saudi Riyal";
    readonly symbolNative: "ر.س.‏";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "SAR";
    readonly namePlural: "Saudi riyals";
  };
  readonly SDG: {
    readonly symbol: "SDG";
    readonly name: "Sudanese Pound";
    readonly symbolNative: "SDG";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "SDG";
    readonly namePlural: "Sudanese pounds";
  };
  readonly SEK: {
    readonly symbol: "Skr";
    readonly name: "Swedish Krona";
    readonly symbolNative: "kr";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "SEK";
    readonly namePlural: "Swedish kronor";
  };
  readonly SGD: {
    readonly symbol: "S$";
    readonly name: "Singapore Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "SGD";
    readonly namePlural: "Singapore dollars";
  };
  readonly SOS: {
    readonly symbol: "Ssh";
    readonly name: "Somali Shilling";
    readonly symbolNative: "Ssh";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "SOS";
    readonly namePlural: "Somali shillings";
  };
  readonly SYP: {
    readonly symbol: "SY£";
    readonly name: "Syrian Pound";
    readonly symbolNative: "ل.س.‏";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "SYP";
    readonly namePlural: "Syrian pounds";
  };
  readonly THB: {
    readonly symbol: "฿";
    readonly name: "Thai Baht";
    readonly symbolNative: "฿";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "THB";
    readonly namePlural: "Thai baht";
  };
  readonly TND: {
    readonly symbol: "DT";
    readonly name: "Tunisian Dinar";
    readonly symbolNative: "د.ت.‏";
    readonly decimalDigits: 3;
    readonly rounding: 0;
    readonly code: "TND";
    readonly namePlural: "Tunisian dinars";
  };
  readonly TOP: {
    readonly symbol: "T$";
    readonly name: "Tongan Paʻanga";
    readonly symbolNative: "T$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "TOP";
    readonly namePlural: "Tongan paʻanga";
  };
  readonly TRY: {
    readonly symbol: "TL";
    readonly name: "Turkish Lira";
    readonly symbolNative: "TL";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "TRY";
    readonly namePlural: "Turkish Lira";
  };
  readonly TTD: {
    readonly symbol: "TT$";
    readonly name: "Trinidad and Tobago Dollar";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "TTD";
    readonly namePlural: "Trinidad and Tobago dollars";
  };
  readonly TWD: {
    readonly symbol: "NT$";
    readonly name: "New Taiwan Dollar";
    readonly symbolNative: "NT$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "TWD";
    readonly namePlural: "New Taiwan dollars";
  };
  readonly TZS: {
    readonly symbol: "TSh";
    readonly name: "Tanzanian Shilling";
    readonly symbolNative: "TSh";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "TZS";
    readonly namePlural: "Tanzanian shillings";
  };
  readonly UAH: {
    readonly symbol: "₴";
    readonly name: "Ukrainian Hryvnia";
    readonly symbolNative: "₴";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "UAH";
    readonly namePlural: "Ukrainian hryvnias";
  };
  readonly UGX: {
    readonly symbol: "USh";
    readonly name: "Ugandan Shilling";
    readonly symbolNative: "USh";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "UGX";
    readonly namePlural: "Ugandan shillings";
  };
  readonly UYU: {
    readonly symbol: "$U";
    readonly name: "Uruguayan Peso";
    readonly symbolNative: "$";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "UYU";
    readonly namePlural: "Uruguayan pesos";
  };
  readonly UZS: {
    readonly symbol: "UZS";
    readonly name: "Uzbekistan Som";
    readonly symbolNative: "UZS";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "UZS";
    readonly namePlural: "Uzbekistan som";
  };
  readonly VEF: {
    readonly symbol: "Bs.F.";
    readonly name: "Venezuelan Bolívar";
    readonly symbolNative: "Bs.F.";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "VEF";
    readonly namePlural: "Venezuelan bolívars";
  };
  readonly VND: {
    readonly symbol: "₫";
    readonly name: "Vietnamese Dong";
    readonly symbolNative: "₫";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "VND";
    readonly namePlural: "Vietnamese dong";
  };
  readonly XAF: {
    readonly symbol: "FCFA";
    readonly name: "CFA Franc BEAC";
    readonly symbolNative: "FCFA";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "XAF";
    readonly namePlural: "CFA francs BEAC";
  };
  readonly XOF: {
    readonly symbol: "CFA";
    readonly name: "CFA Franc BCEAO";
    readonly symbolNative: "CFA";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "XOF";
    readonly namePlural: "CFA francs BCEAO";
  };
  readonly YER: {
    readonly symbol: "YR";
    readonly name: "Yemeni Rial";
    readonly symbolNative: "ر.ي.‏";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "YER";
    readonly namePlural: "Yemeni rials";
  };
  readonly ZAR: {
    readonly symbol: "R";
    readonly name: "South African Rand";
    readonly symbolNative: "R";
    readonly decimalDigits: 2;
    readonly rounding: 0;
    readonly code: "ZAR";
    readonly namePlural: "South African rand";
  };
  readonly ZMK: {
    readonly symbol: "ZK";
    readonly name: "Zambian Kwacha";
    readonly symbolNative: "ZK";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "ZMK";
    readonly namePlural: "Zambian kwachas";
  };
  readonly ZWL: {
    readonly symbol: "ZWL$";
    readonly name: "Zimbabwean Dollar";
    readonly symbolNative: "ZWL$";
    readonly decimalDigits: 0;
    readonly rounding: 0;
    readonly code: "ZWL";
    readonly namePlural: "Zimbabwean Dollar";
  };
};
export declare const PHONE_COUNTRIES: readonly [{
  readonly name: "Israel";
  readonly dialCode: "+972";
  readonly code: "IL";
}, {
  readonly name: "Afghanistan";
  readonly dialCode: "+93";
  readonly code: "AF";
}, {
  readonly name: "Albania";
  readonly dialCode: "+355";
  readonly code: "AL";
}, {
  readonly name: "Algeria";
  readonly dialCode: "+213";
  readonly code: "DZ";
}, {
  readonly name: "AmericanSamoa";
  readonly dialCode: "+1 684";
  readonly code: "AS";
}, {
  readonly name: "Andorra";
  readonly dialCode: "+376";
  readonly code: "AD";
}, {
  readonly name: "Angola";
  readonly dialCode: "+244";
  readonly code: "AO";
}, {
  readonly name: "Anguilla";
  readonly dialCode: "+1 264";
  readonly code: "AI";
}, {
  readonly name: "Antigua and Barbuda";
  readonly dialCode: "+1268";
  readonly code: "AG";
}, {
  readonly name: "Argentina";
  readonly dialCode: "+54";
  readonly code: "AR";
}, {
  readonly name: "Armenia";
  readonly dialCode: "+374";
  readonly code: "AM";
}, {
  readonly name: "Aruba";
  readonly dialCode: "+297";
  readonly code: "AW";
}, {
  readonly name: "Australia";
  readonly dialCode: "+61";
  readonly code: "AU";
}, {
  readonly name: "Austria";
  readonly dialCode: "+43";
  readonly code: "AT";
}, {
  readonly name: "Azerbaijan";
  readonly dialCode: "+994";
  readonly code: "AZ";
}, {
  readonly name: "Bahamas";
  readonly dialCode: "+1 242";
  readonly code: "BS";
}, {
  readonly name: "Bahrain";
  readonly dialCode: "+973";
  readonly code: "BH";
}, {
  readonly name: "Bangladesh";
  readonly dialCode: "+880";
  readonly code: "BD";
}, {
  readonly name: "Barbados";
  readonly dialCode: "+1 246";
  readonly code: "BB";
}, {
  readonly name: "Belarus";
  readonly dialCode: "+375";
  readonly code: "BY";
}, {
  readonly name: "Belgium";
  readonly dialCode: "+32";
  readonly code: "BE";
}, {
  readonly name: "Belize";
  readonly dialCode: "+501";
  readonly code: "BZ";
}, {
  readonly name: "Benin";
  readonly dialCode: "+229";
  readonly code: "BJ";
}, {
  readonly name: "Bermuda";
  readonly dialCode: "+1 441";
  readonly code: "BM";
}, {
  readonly name: "Bhutan";
  readonly dialCode: "+975";
  readonly code: "BT";
}, {
  readonly name: "Bosnia and Herzegovina";
  readonly dialCode: "+387";
  readonly code: "BA";
}, {
  readonly name: "Botswana";
  readonly dialCode: "+267";
  readonly code: "BW";
}, {
  readonly name: "Brazil";
  readonly dialCode: "+55";
  readonly code: "BR";
}, {
  readonly name: "British Indian Ocean Territory";
  readonly dialCode: "+246";
  readonly code: "IO";
}, {
  readonly name: "Bulgaria";
  readonly dialCode: "+359";
  readonly code: "BG";
}, {
  readonly name: "Burkina Faso";
  readonly dialCode: "+226";
  readonly code: "BF";
}, {
  readonly name: "Burundi";
  readonly dialCode: "+257";
  readonly code: "BI";
}, {
  readonly name: "Cambodia";
  readonly dialCode: "+855";
  readonly code: "KH";
}, {
  readonly name: "Cameroon";
  readonly dialCode: "+237";
  readonly code: "CM";
}, {
  readonly name: "Canada";
  readonly dialCode: "+1";
  readonly code: "CA";
}, {
  readonly name: "Cape Verde";
  readonly dialCode: "+238";
  readonly code: "CV";
}, {
  readonly name: "Cayman Islands";
  readonly dialCode: "+ 345";
  readonly code: "KY";
}, {
  readonly name: "Central African Republic";
  readonly dialCode: "+236";
  readonly code: "CF";
}, {
  readonly name: "Chad";
  readonly dialCode: "+235";
  readonly code: "TD";
}, {
  readonly name: "Chile";
  readonly dialCode: "+56";
  readonly code: "CL";
}, {
  readonly name: "China";
  readonly dialCode: "+86";
  readonly code: "CN";
}, {
  readonly name: "Christmas Island";
  readonly dialCode: "+61";
  readonly code: "CX";
}, {
  readonly name: "Colombia";
  readonly dialCode: "+57";
  readonly code: "CO";
}, {
  readonly name: "Comoros";
  readonly dialCode: "+269";
  readonly code: "KM";
}, {
  readonly name: "Congo";
  readonly dialCode: "+242";
  readonly code: "CG";
}, {
  readonly name: "Cook Islands";
  readonly dialCode: "+682";
  readonly code: "CK";
}, {
  readonly name: "Costa Rica";
  readonly dialCode: "+506";
  readonly code: "CR";
}, {
  readonly name: "Croatia";
  readonly dialCode: "+385";
  readonly code: "HR";
}, {
  readonly name: "Cuba";
  readonly dialCode: "+53";
  readonly code: "CU";
}, {
  readonly name: "Cyprus";
  readonly dialCode: "+537";
  readonly code: "CY";
}, {
  readonly name: "Czech Republic";
  readonly dialCode: "+420";
  readonly code: "CZ";
}, {
  readonly name: "Denmark";
  readonly dialCode: "+45";
  readonly code: "DK";
}, {
  readonly name: "Djibouti";
  readonly dialCode: "+253";
  readonly code: "DJ";
}, {
  readonly name: "Dominica";
  readonly dialCode: "+1 767";
  readonly code: "DM";
}, {
  readonly name: "Dominican Republic";
  readonly dialCode: "+1 849";
  readonly code: "DO";
}, {
  readonly name: "Ecuador";
  readonly dialCode: "+593";
  readonly code: "EC";
}, {
  readonly name: "Egypt";
  readonly dialCode: "+20";
  readonly code: "EG";
}, {
  readonly name: "El Salvador";
  readonly dialCode: "+503";
  readonly code: "SV";
}, {
  readonly name: "Equatorial Guinea";
  readonly dialCode: "+240";
  readonly code: "GQ";
}, {
  readonly name: "Eritrea";
  readonly dialCode: "+291";
  readonly code: "ER";
}, {
  readonly name: "Estonia";
  readonly dialCode: "+372";
  readonly code: "EE";
}, {
  readonly name: "Ethiopia";
  readonly dialCode: "+251";
  readonly code: "ET";
}, {
  readonly name: "Fiji";
  readonly dialCode: "+679";
  readonly code: "FJ";
}, {
  readonly name: "Finland";
  readonly dialCode: "+358";
  readonly code: "FI";
}, {
  readonly name: "France";
  readonly dialCode: "+33";
  readonly code: "FR";
}, {
  readonly name: "French Polynesia";
  readonly dialCode: "+689";
  readonly code: "PF";
}, {
  readonly name: "Gabon";
  readonly dialCode: "+241";
  readonly code: "GA";
}, {
  readonly name: "Gambia";
  readonly dialCode: "+220";
  readonly code: "GM";
}, {
  readonly name: "Georgia";
  readonly dialCode: "+995";
  readonly code: "GE";
}, {
  readonly name: "Germany";
  readonly dialCode: "+49";
  readonly code: "DE";
}, {
  readonly name: "Ghana";
  readonly dialCode: "+233";
  readonly code: "GH";
}, {
  readonly name: "Gibraltar";
  readonly dialCode: "+350";
  readonly code: "GI";
}, {
  readonly name: "Greece";
  readonly dialCode: "+30";
  readonly code: "GR";
}, {
  readonly name: "Greenland";
  readonly dialCode: "+299";
  readonly code: "GL";
}, {
  readonly name: "Grenada";
  readonly dialCode: "+1 473";
  readonly code: "GD";
}, {
  readonly name: "Guam";
  readonly dialCode: "+1 671";
  readonly code: "GU";
}, {
  readonly name: "Guatemala";
  readonly dialCode: "+502";
  readonly code: "GT";
}, {
  readonly name: "Guinea";
  readonly dialCode: "+224";
  readonly code: "GN";
}, {
  readonly name: "Guinea-Bissau";
  readonly dialCode: "+245";
  readonly code: "GW";
}, {
  readonly name: "Guyana";
  readonly dialCode: "+595";
  readonly code: "GY";
}, {
  readonly name: "Haiti";
  readonly dialCode: "+509";
  readonly code: "HT";
}, {
  readonly name: "Honduras";
  readonly dialCode: "+504";
  readonly code: "HN";
}, {
  readonly name: "Hungary";
  readonly dialCode: "+36";
  readonly code: "HU";
}, {
  readonly name: "Iceland";
  readonly dialCode: "+354";
  readonly code: "IS";
}, {
  readonly name: "India";
  readonly dialCode: "+91";
  readonly code: "IN";
}, {
  readonly name: "Indonesia";
  readonly dialCode: "+62";
  readonly code: "ID";
}, {
  readonly name: "Iraq";
  readonly dialCode: "+964";
  readonly code: "IQ";
}, {
  readonly name: "Ireland";
  readonly dialCode: "+353";
  readonly code: "IE";
}, {
  readonly name: "Israel";
  readonly dialCode: "+972";
  readonly code: "IL";
}, {
  readonly name: "Italy";
  readonly dialCode: "+39";
  readonly code: "IT";
}, {
  readonly name: "Jamaica";
  readonly dialCode: "+1 876";
  readonly code: "JM";
}, {
  readonly name: "Japan";
  readonly dialCode: "+81";
  readonly code: "JP";
}, {
  readonly name: "Jordan";
  readonly dialCode: "+962";
  readonly code: "JO";
}, {
  readonly name: "Kazakhstan";
  readonly dialCode: "+7 7";
  readonly code: "KZ";
}, {
  readonly name: "Kenya";
  readonly dialCode: "+254";
  readonly code: "KE";
}, {
  readonly name: "Kiribati";
  readonly dialCode: "+686";
  readonly code: "KI";
}, {
  readonly name: "Kuwait";
  readonly dialCode: "+965";
  readonly code: "KW";
}, {
  readonly name: "Kyrgyzstan";
  readonly dialCode: "+996";
  readonly code: "KG";
}, {
  readonly name: "Latvia";
  readonly dialCode: "+371";
  readonly code: "LV";
}, {
  readonly name: "Lebanon";
  readonly dialCode: "+961";
  readonly code: "LB";
}, {
  readonly name: "Lesotho";
  readonly dialCode: "+266";
  readonly code: "LS";
}, {
  readonly name: "Liberia";
  readonly dialCode: "+231";
  readonly code: "LR";
}, {
  readonly name: "Liechtenstein";
  readonly dialCode: "+423";
  readonly code: "LI";
}, {
  readonly name: "Lithuania";
  readonly dialCode: "+370";
  readonly code: "LT";
}, {
  readonly name: "Luxembourg";
  readonly dialCode: "+352";
  readonly code: "LU";
}, {
  readonly name: "Madagascar";
  readonly dialCode: "+261";
  readonly code: "MG";
}, {
  readonly name: "Malawi";
  readonly dialCode: "+265";
  readonly code: "MW";
}, {
  readonly name: "Malaysia";
  readonly dialCode: "+60";
  readonly code: "MY";
}, {
  readonly name: "Maldives";
  readonly dialCode: "+960";
  readonly code: "MV";
}, {
  readonly name: "Mali";
  readonly dialCode: "+223";
  readonly code: "ML";
}, {
  readonly name: "Malta";
  readonly dialCode: "+356";
  readonly code: "MT";
}, {
  readonly name: "Marshall Islands";
  readonly dialCode: "+692";
  readonly code: "MH";
}, {
  readonly name: "Martinique";
  readonly dialCode: "+596";
  readonly code: "MQ";
}, {
  readonly name: "Mauritania";
  readonly dialCode: "+222";
  readonly code: "MR";
}, {
  readonly name: "Mauritius";
  readonly dialCode: "+230";
  readonly code: "MU";
}, {
  readonly name: "Mexico";
  readonly dialCode: "+52";
  readonly code: "MX";
}, {
  readonly name: "Monaco";
  readonly dialCode: "+377";
  readonly code: "MC";
}, {
  readonly name: "Mongolia";
  readonly dialCode: "+976";
  readonly code: "MN";
}, {
  readonly name: "Montenegro";
  readonly dialCode: "+382";
  readonly code: "ME";
}, {
  readonly name: "Montserrat";
  readonly dialCode: "+1664";
  readonly code: "MS";
}, {
  readonly name: "Morocco";
  readonly dialCode: "+212";
  readonly code: "MA";
}, {
  readonly name: "Myanmar";
  readonly dialCode: "+95";
  readonly code: "MM";
}, {
  readonly name: "Namibia";
  readonly dialCode: "+264";
  readonly code: "NA";
}, {
  readonly name: "Nauru";
  readonly dialCode: "+674";
  readonly code: "NR";
}, {
  readonly name: "Nepal";
  readonly dialCode: "+977";
  readonly code: "NP";
}, {
  readonly name: "Netherlands";
  readonly dialCode: "+31";
  readonly code: "NL";
}, {
  readonly name: "New Zealand";
  readonly dialCode: "+64";
  readonly code: "NZ";
}, {
  readonly name: "Nicaragua";
  readonly dialCode: "+505";
  readonly code: "NI";
}, {
  readonly name: "Niger";
  readonly dialCode: "+227";
  readonly code: "NE";
}, {
  readonly name: "Nigeria";
  readonly dialCode: "+234";
  readonly code: "NG";
}, {
  readonly name: "Niue";
  readonly dialCode: "+683";
  readonly code: "NU";
}, {
  readonly name: "Norfolk Island";
  readonly dialCode: "+672";
  readonly code: "NF";
}, {
  readonly name: "Northern Mariana Islands";
  readonly dialCode: "+1 670";
  readonly code: "MP";
}, {
  readonly name: "Norway";
  readonly dialCode: "+47";
  readonly code: "NO";
}, {
  readonly name: "Oman";
  readonly dialCode: "+968";
  readonly code: "OM";
}, {
  readonly name: "Pakistan";
  readonly dialCode: "+92";
  readonly code: "PK";
}, {
  readonly name: "Palau";
  readonly dialCode: "+680";
  readonly code: "PW";
}, {
  readonly name: "Panama";
  readonly dialCode: "+507";
  readonly code: "PA";
}, {
  readonly name: "Papua New Guinea";
  readonly dialCode: "+675";
  readonly code: "PG";
}, {
  readonly name: "Paraguay";
  readonly dialCode: "+595";
  readonly code: "PY";
}, {
  readonly name: "Peru";
  readonly dialCode: "+51";
  readonly code: "PE";
}, {
  readonly name: "Philippines";
  readonly dialCode: "+63";
  readonly code: "PH";
}, {
  readonly name: "Poland";
  readonly dialCode: "+48";
  readonly code: "PL";
}, {
  readonly name: "Portugal";
  readonly dialCode: "+351";
  readonly code: "PT";
}, {
  readonly name: "Puerto Rico";
  readonly dialCode: "+1 939";
  readonly code: "PR";
}, {
  readonly name: "Qatar";
  readonly dialCode: "+974";
  readonly code: "QA";
}, {
  readonly name: "Romania";
  readonly dialCode: "+40";
  readonly code: "RO";
}, {
  readonly name: "Rwanda";
  readonly dialCode: "+250";
  readonly code: "RW";
}, {
  readonly name: "Samoa";
  readonly dialCode: "+685";
  readonly code: "WS";
}, {
  readonly name: "San Marino";
  readonly dialCode: "+378";
  readonly code: "SM";
}, {
  readonly name: "Saudi Arabia";
  readonly dialCode: "+966";
  readonly code: "SA";
}, {
  readonly name: "Senegal";
  readonly dialCode: "+221";
  readonly code: "SN";
}, {
  readonly name: "Serbia";
  readonly dialCode: "+381";
  readonly code: "RS";
}, {
  readonly name: "Seychelles";
  readonly dialCode: "+248";
  readonly code: "SC";
}, {
  readonly name: "Sierra Leone";
  readonly dialCode: "+232";
  readonly code: "SL";
}, {
  readonly name: "Singapore";
  readonly dialCode: "+65";
  readonly code: "SG";
}, {
  readonly name: "Slovakia";
  readonly dialCode: "+421";
  readonly code: "SK";
}, {
  readonly name: "Slovenia";
  readonly dialCode: "+386";
  readonly code: "SI";
}, {
  readonly name: "Solomon Islands";
  readonly dialCode: "+677";
  readonly code: "SB";
}, {
  readonly name: "South Africa";
  readonly dialCode: "+27";
  readonly code: "ZA";
}, {
  readonly name: "Spain";
  readonly dialCode: "+34";
  readonly code: "ES";
}, {
  readonly name: "Sri Lanka";
  readonly dialCode: "+94";
  readonly code: "LK";
}, {
  readonly name: "Sudan";
  readonly dialCode: "+249";
  readonly code: "SD";
}, {
  readonly name: "Suriname";
  readonly dialCode: "+597";
  readonly code: "SR";
}, {
  readonly name: "Swaziland";
  readonly dialCode: "+268";
  readonly code: "SZ";
}, {
  readonly name: "Sweden";
  readonly dialCode: "+46";
  readonly code: "SE";
}, {
  readonly name: "Switzerland";
  readonly dialCode: "+41";
  readonly code: "CH";
}, {
  readonly name: "Tajikistan";
  readonly dialCode: "+992";
  readonly code: "TJ";
}, {
  readonly name: "Thailand";
  readonly dialCode: "+66";
  readonly code: "TH";
}, {
  readonly name: "Togo";
  readonly dialCode: "+228";
  readonly code: "TG";
}, {
  readonly name: "Tokelau";
  readonly dialCode: "+690";
  readonly code: "TK";
}, {
  readonly name: "Tonga";
  readonly dialCode: "+676";
  readonly code: "TO";
}, {
  readonly name: "Trinidad and Tobago";
  readonly dialCode: "+1 868";
  readonly code: "TT";
}, {
  readonly name: "Tunisia";
  readonly dialCode: "+216";
  readonly code: "TN";
}, {
  readonly name: "Turkey";
  readonly dialCode: "+90";
  readonly code: "TR";
}, {
  readonly name: "Turkmenistan";
  readonly dialCode: "+993";
  readonly code: "TM";
}, {
  readonly name: "Turks and Caicos Islands";
  readonly dialCode: "+1 649";
  readonly code: "TC";
}, {
  readonly name: "Tuvalu";
  readonly dialCode: "+688";
  readonly code: "TV";
}, {
  readonly name: "Uganda";
  readonly dialCode: "+256";
  readonly code: "UG";
}, {
  readonly name: "Ukraine";
  readonly dialCode: "+380";
  readonly code: "UA";
}, {
  readonly name: "United Arab Emirates";
  readonly dialCode: "+971";
  readonly code: "AE";
}, {
  readonly name: "United Kingdom";
  readonly dialCode: "+44";
  readonly code: "GB";
}, {
  readonly name: "United States";
  readonly dialCode: "+1";
  readonly code: "US";
}, {
  readonly name: "Uruguay";
  readonly dialCode: "+598";
  readonly code: "UY";
}, {
  readonly name: "Uzbekistan";
  readonly dialCode: "+998";
  readonly code: "UZ";
}, {
  readonly name: "Vanuatu";
  readonly dialCode: "+678";
  readonly code: "VU";
}, {
  readonly name: "Yemen";
  readonly dialCode: "+967";
  readonly code: "YE";
}, {
  readonly name: "Zambia";
  readonly dialCode: "+260";
  readonly code: "ZM";
}, {
  readonly name: "Zimbabwe";
  readonly dialCode: "+263";
  readonly code: "ZW";
}, {
  readonly name: "Bolivia, Plurinational State of";
  readonly dialCode: "+591";
  readonly code: "BO";
}, {
  readonly name: "Brunei Darussalam";
  readonly dialCode: "+673";
  readonly code: "BN";
}, {
  readonly name: "Cocos (Keeling) Islands";
  readonly dialCode: "+61";
  readonly code: "CC";
}, {
  readonly name: "Congo, The Democratic Republic of the";
  readonly dialCode: "+243";
  readonly code: "CD";
}, {
  readonly name: "Cote d'Ivoire";
  readonly dialCode: "+225";
  readonly code: "CI";
}, {
  readonly name: "Falkland Islands (Malvinas)";
  readonly dialCode: "+500";
  readonly code: "FK";
}, {
  readonly name: "Guernsey";
  readonly dialCode: "+44";
  readonly code: "GG";
}, {
  readonly name: "Holy See (Vatican City State)";
  readonly dialCode: "+379";
  readonly code: "VA";
}, {
  readonly name: "Hong Kong";
  readonly dialCode: "+852";
  readonly code: "HK";
}, {
  readonly name: "Iran, Islamic Republic of";
  readonly dialCode: "+98";
  readonly code: "IR";
}, {
  readonly name: "Isle of Man";
  readonly dialCode: "+44";
  readonly code: "IM";
}, {
  readonly name: "Jersey";
  readonly dialCode: "+44";
  readonly code: "JE";
}, {
  readonly name: "Korea, Democratic People's Republic of";
  readonly dialCode: "+850";
  readonly code: "KP";
}, {
  readonly name: "Korea, Republic of";
  readonly dialCode: "+82";
  readonly code: "KR";
}, {
  readonly name: "Lao People's Democratic Republic";
  readonly dialCode: "+856";
  readonly code: "LA";
}, {
  readonly name: "Libyan Arab Jamahiriya";
  readonly dialCode: "+218";
  readonly code: "LY";
}, {
  readonly name: "Macao";
  readonly dialCode: "+853";
  readonly code: "MO";
}, {
  readonly name: "Macedonia, The Former Yugoslav Republic of";
  readonly dialCode: "+389";
  readonly code: "MK";
}, {
  readonly name: "Micronesia, Federated States of";
  readonly dialCode: "+691";
  readonly code: "FM";
}, {
  readonly name: "Moldova, Republic of";
  readonly dialCode: "+373";
  readonly code: "MD";
}, {
  readonly name: "Mozambique";
  readonly dialCode: "+258";
  readonly code: "MZ";
}, {
  readonly name: "Palestinian Territory, Occupied";
  readonly dialCode: "+970";
  readonly code: "PS";
}, {
  readonly name: "Pitcairn";
  readonly dialCode: "+872";
  readonly code: "PN";
}, {
  readonly name: "Réunion";
  readonly dialCode: "+262";
  readonly code: "RE";
}, {
  readonly name: "Russia";
  readonly dialCode: "+7";
  readonly code: "RU";
}, {
  readonly name: "Saint Barthélemy";
  readonly dialCode: "+590";
  readonly code: "BL";
}, {
  readonly name: "Saint Kitts and Nevis";
  readonly dialCode: "+1 869";
  readonly code: "KN";
}, {
  readonly name: "Saint Lucia";
  readonly dialCode: "+1 758";
  readonly code: "LC";
}, {
  readonly name: "Saint Vincent and the Grenadines";
  readonly dialCode: "+1 784";
  readonly code: "VC";
}, {
  readonly name: "Sao Tome and Principe";
  readonly dialCode: "+239";
  readonly code: "ST";
}, {
  readonly name: "Somalia";
  readonly dialCode: "+252";
  readonly code: "SO";
}, {
  readonly name: "Syrian Arab Republic";
  readonly dialCode: "+963";
  readonly code: "SY";
}, {
  readonly name: "Taiwan, Province of China";
  readonly dialCode: "+886";
  readonly code: "TW";
}, {
  readonly name: "Tanzania, United Republic of";
  readonly dialCode: "+255";
  readonly code: "TZ";
}, {
  readonly name: "Timor-Leste";
  readonly dialCode: "+670";
  readonly code: "TL";
}, {
  readonly name: "Venezuela, Bolivarian Republic of";
  readonly dialCode: "+58";
  readonly code: "VE";
}, {
  readonly name: "Viet Nam";
  readonly dialCode: "+84";
  readonly code: "VN";
}, {
  readonly name: "Virgin Islands, British";
  readonly dialCode: "+1 284";
  readonly code: "VG";
}, {
  readonly name: "Virgin Islands, U.S.";
  readonly dialCode: "+1 340";
  readonly code: "VI";
}];
declare const REGEX$1: {
  readonly IP_ADDRESS: RegExp;
  readonly NUMBER: RegExp;
  readonly EMAIL: RegExp;
  readonly WEBSITE: RegExp;
  readonly CHARACTER: RegExp;
  readonly PHONE: RegExp;
  readonly EMOJI: RegExp;
};
export declare class NgcAlertComponent implements AfterViewInit, OnChanges {
  private _elementRef;
  get styleBorderColor(): string;
  get styleBgColor(): string;
  get styleTextColor(): string;
  color: string;
  textColor: string;
  background: string;
  borderColor: string;
  icon: string;
  closeable: boolean;
  closed: EventEmitter<void>;
  isClosed: boolean;
  get classHidden(): boolean;
  get isCustomColor(): boolean;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  close(event?: Event): void;
  private _applyColorClass;
  private _hexToRgba;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAlertComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcAlertComponent, "ngc-alert, [ngcAlert]", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "textColor": {
      "alias": "textColor";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "closeable": {
      "alias": "closeable";
      "required": false;
    };
  }, {
    "closed": "closed";
  }, never, ["*"], false, never>;
}
export declare class NgcIconComponent implements OnInit {
  get styleColor(): string;
  get styleFontSize(): string;
  get styleLineHeight(): string;
  name: string;
  color: string;
  size: string;
  get isIonic(): boolean;
  constructor();
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcIconComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcIconComponent, "ngc-icon", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcIconModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcIconModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcIconModule, [typeof NgcIconComponent], [typeof i45.CommonModule], [typeof NgcIconComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcIconModule>;
}
export declare class NgcIconButtonComponent implements AfterViewInit, OnChanges {
  private _elementRef;
  private _contrastPipe;
  get attrType(): string;
  get attrDisabled(): boolean;
  get styleColor(): string;
  get styleSize(): string;
  get styleIconColor(): string;
  get styleIconSize(): string;
  get styleBorderColor(): string;
  get styleBorderStyle(): string;
  get styleBorderWidth(): string;
  get classDisabled(): boolean;
  get classSquare(): boolean;
  type: string;
  color: string;
  size: string;
  icon: string;
  iconColor: string;
  iconSize: string;
  borderColor: string;
  borderStyle: string;
  borderWidth: string;
  disabled: boolean;
  square: boolean;
  private _bkIconColor;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
  triggerKeyDownEnterAndSpace(event: KeyboardEvent): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcIconButtonComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcIconButtonComponent, "button[ngcIconButton]", never, {
    "type": {
      "alias": "type";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconColor": {
      "alias": "iconColor";
      "required": false;
    };
    "iconSize": {
      "alias": "iconSize";
      "required": false;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
    };
    "borderStyle": {
      "alias": "borderStyle";
      "required": false;
    };
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "square": {
      "alias": "square";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcButtonIconDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonIconDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcButtonIconDirective, "[ngcButtonIcon]", ["ngcButtonIcon"], {}, {}, never, never, false, never>;
}
type NgcIBasicButtonAlignment = 'left' | 'right' | 'center';
export declare class NgcBasicButtonComponent implements AfterViewInit {
  private _elementRef;
  get attrType(): string;
  get attrDisabled(): boolean;
  get styleColor(): string;
  get styleIconSize(): string;
  get classHasIcon(): boolean;
  get classDisabled(): boolean;
  get classLeft(): boolean;
  get classRight(): boolean;
  get classCenter(): boolean;
  buttonIcon: NgcButtonIconDirective;
  type: string;
  color: string;
  icon: string;
  iconSize: string;
  disabled: boolean;
  alignment: NgcIBasicButtonAlignment;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  triggerKeyDownEnterAndSpace(event: KeyboardEvent): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBasicButtonComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcBasicButtonComponent, "button[ngcBasicButton]", never, {
    "type": {
      "alias": "type";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSize": {
      "alias": "iconSize";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "alignment": {
      "alias": "alignment";
      "required": false;
    };
  }, {}, ["buttonIcon"], ["[ngcButtonIcon]", "*"], false, never>;
}
type ngcIButtonAlignment = 'left' | 'right' | 'center';
export declare class NgcButtonComponent implements AfterViewInit, OnChanges {
  private _elementRef;
  private _contrastPipe;
  get attrType(): string;
  get attrDisabled(): boolean;
  get styleColor(): string;
  get styleTextColor(): string;
  get styleSize(): string;
  get styleIconSize(): string;
  get styleBorderColor(): string;
  get styleBorderStyle(): string;
  get styleWidth(): string;
  get classHasIcon(): boolean;
  get classDisabled(): boolean;
  get classLoading(): boolean;
  get classLeft(): boolean;
  get classRight(): boolean;
  get classCenter(): boolean;
  buttonIcon: NgcButtonIconDirective;
  type: string;
  color: string;
  textColor: string;
  size: string;
  icon: string;
  iconSize: string;
  borderColor: string;
  borderStyle: string;
  borderWidth: string;
  disabled: boolean;
  loading: boolean;
  alignment: ngcIButtonAlignment;
  private _bkTextColor;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
  triggerKeyDownEnterAndSpace(event: KeyboardEvent): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonComponent, "button[ngcButton]", never, {
    "type": {
      "alias": "type";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "textColor": {
      "alias": "textColor";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSize": {
      "alias": "iconSize";
      "required": false;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
    };
    "borderStyle": {
      "alias": "borderStyle";
      "required": false;
    };
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "loading": {
      "alias": "loading";
      "required": false;
    };
    "alignment": {
      "alias": "alignment";
      "required": false;
    };
  }, {}, ["buttonIcon"], ["[ngcButtonIcon]", "*"], false, never>;
}
export declare class NgcLoadingComponent {
  color: string;
  backgroundColor: string;
  size: number;
  fullPage: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcLoadingComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcLoadingComponent, "ngc-loading", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "backgroundColor": {
      "alias": "backgroundColor";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "fullPage": {
      "alias": "fullPage";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcLoadingModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcLoadingModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcLoadingModule, [typeof NgcLoadingComponent], [typeof i18.RoundProgressModule, typeof CoreModule], [typeof NgcLoadingComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcLoadingModule>;
}
export declare class NgcButtonModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcButtonModule, [typeof NgcIconButtonComponent, typeof NgcBasicButtonComponent, typeof NgcButtonComponent, typeof NgcButtonIconDirective], [typeof CoreModule, typeof NgcLoadingModule, typeof NgcIconModule], [typeof NgcIconButtonComponent, typeof NgcBasicButtonComponent, typeof NgcButtonComponent, typeof NgcButtonIconDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcButtonModule>;
}
export declare class NgcAlertModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAlertModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcAlertModule, [typeof NgcAlertComponent], [typeof i45.CommonModule, typeof CoreModule, typeof NgcIconModule, typeof NgcButtonModule], [typeof NgcAlertComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcAlertModule>;
}
export declare class NgcScrollBarViewPortDirective {
  elementRef: ElementRef;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarViewPortDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBarViewPortDirective, "[ngcScrollBarViewPort]", ["ngcScrollBarViewPort"], {}, {}, never, never, false, never>;
}
export declare class NgcScrollBarViewPortItemDirective {
  elementRef: ElementRef;
  private _cdRef;
  private _ngZone;
  viewPortOffset: number[];
  inViewPort: EventEmitter<boolean>;
  isInViewPort: boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {NgZone} _ngZone
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
  /**
   * @param {ElementRef} parent
   * @return {void}
   */
  checkInViewPort(parent?: HTMLElement): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarViewPortItemDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBarViewPortItemDirective, "[ngcScrollBarViewPortItem]", ["ngcScrollBarViewPortItem"], {
    "viewPortOffset": {
      "alias": "viewPortOffset";
      "required": false;
    };
  }, {
    "inViewPort": "inViewPort";
  }, never, never, false, never>;
}
export type INgcScrollBarMode = 'auto' | 'overlay';
export type INgcScrollBarSuppressMode = 'visible' | 'hidden';
export declare class NgcScrollBar implements AfterContentInit, OnDestroy {
  container: NgcScrollBarViewPortDirective;
  items: QueryList<NgcScrollBarViewPortItemDirective>;
  suppress: boolean;
  suppressScrollX: boolean;
  suppressScrollY: boolean;
  mode: INgcScrollBarMode;
  suppressMode: INgcScrollBarSuppressMode;
  viewPortChanged: EventEmitter<NgcScrollBarViewPortDirective>;
  elementRef: ElementRef;
  protected ngZone: NgZone;
  private _lastScrollTop;
  private _lastScrollLeft;
  private _resizeObserver;
  private _loadItemsThrottle;
  get nativeElement(): HTMLElement;
  get clientHeight(): number;
  get clientWidth(): number;
  get scrollHeight(): number;
  get scrollWidth(): number;
  get scrollTop(): number;
  get scrollLeft(): number;
  triggerScroll(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @return {void}
   */
  reset(): void;
  /**
   * @param {number} scrollLeft
   * @param {number} scrollTop
   * @param {number} duration
   * @return {void}
   */
  scrollTo(scrollLeft: number, scrollTop: number, duration?: number): void;
  /**
   * @param {number} duration
   * @return {void}
   */
  scrollToLeft(duration?: number): void;
  /**
   * @param {number} duration
   * @return {void}
   */
  scrollToRight(duration?: number): void;
  /**
   * @param {number} duration
   * @return {void}
   */
  scrollToTop(duration?: number): void;
  /**
   * @param {number} duration
   * @return {void}
   */
  scrollToBottom(duration?: number): void;
  /**
   * @param {number} scrollLeft
   * @param {number} scrollTop
   * @param {number} duration
   * @param {Element} element
   * @return {void}
   */
  private _animateScrollTo;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBar, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBar, never, never, {
    "suppress": {
      "alias": "suppress";
      "required": false;
    };
    "suppressScrollX": {
      "alias": "suppressScrollX";
      "required": false;
    };
    "suppressScrollY": {
      "alias": "suppressScrollY";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "suppressMode": {
      "alias": "suppressMode";
      "required": false;
    };
  }, {
    "viewPortChanged": "viewPortChanged";
  }, ["container", "items"], never, true, never>;
}
export declare class NgcScrollBarComponent extends NgcScrollBar {
  elementRef: ElementRef;
  protected ngZone: NgZone;
  get styleMode(): string;
  get styleSuppressMode(): string;
  get attrScrollBar(): boolean;
  get attrScrollBarSuppressX(): boolean;
  get attrScrollBarSuppressY(): boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {NgZone} ngZone
   */
  constructor(elementRef: ElementRef, ngZone: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcScrollBarComponent, "ngc-scroll-bar", never, {}, {}, never, ["*"], false, never>;
}
export declare class NgcScrollBarDirective extends NgcScrollBar {
  elementRef: ElementRef;
  protected ngZone: NgZone;
  get styleMode(): string;
  get attrScrollBar(): boolean;
  get attrScrollBarSuppressX(): boolean;
  get attrScrollBarSuppressY(): boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {NgZone} ngZone
   */
  constructor(elementRef: ElementRef, ngZone: NgZone);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcScrollBarDirective, "[ngcScrollBar]", ["ngcScrollBar"], {}, {}, never, never, false, never>;
}
export declare class NgcScrollBarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcScrollBarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcScrollBarModule, [typeof NgcScrollBarComponent, typeof NgcScrollBarDirective, typeof NgcScrollBarViewPortDirective, typeof NgcScrollBarViewPortItemDirective], [typeof CoreModule], [typeof NgcScrollBarComponent, typeof NgcScrollBarDirective, typeof NgcScrollBarViewPortDirective, typeof NgcScrollBarViewPortItemDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcScrollBarModule>;
}
export declare class NgcPageHeaderDirective {
  elementRef: ElementRef;
  paddingVertical: string;
  paddingHorizontal: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  divider: boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPageHeaderDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcPageHeaderDirective, "[ngcPageHeader]", ["ngcPageHeader"], {
    "paddingVertical": {
      "alias": "paddingVertical";
      "required": false;
    };
    "paddingHorizontal": {
      "alias": "paddingHorizontal";
      "required": false;
    };
    "paddingTop": {
      "alias": "paddingTop";
      "required": false;
    };
    "paddingBottom": {
      "alias": "paddingBottom";
      "required": false;
    };
    "paddingLeft": {
      "alias": "paddingLeft";
      "required": false;
    };
    "paddingRight": {
      "alias": "paddingRight";
      "required": false;
    };
    "divider": {
      "alias": "divider";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcPageContentDirective {
  elementRef: ElementRef;
  paddingVertical: string;
  paddingHorizontal: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPageContentDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcPageContentDirective, "[ngcPageContent]", ["ngcPageContent"], {
    "paddingVertical": {
      "alias": "paddingVertical";
      "required": false;
    };
    "paddingHorizontal": {
      "alias": "paddingHorizontal";
      "required": false;
    };
    "paddingTop": {
      "alias": "paddingTop";
      "required": false;
    };
    "paddingBottom": {
      "alias": "paddingBottom";
      "required": false;
    };
    "paddingLeft": {
      "alias": "paddingLeft";
      "required": false;
    };
    "paddingRight": {
      "alias": "paddingRight";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcPageComponent {
  get styleHeaderPaddingTop(): string;
  get styleHeaderPaddingBottom(): string;
  get styleHeaderPaddingLeft(): string;
  get styleHeaderPaddingRight(): string;
  get styleContentPaddingTop(): string;
  get styleContentPaddingBottom(): string;
  get styleContentPaddingLeft(): string;
  get styleContentPaddingRight(): string;
  get classStretch(): boolean;
  get classScrolling(): boolean;
  scroller: DetectScrollDirective;
  scrollBar: NgcScrollBarDirective;
  pageHeader: NgcPageHeaderDirective;
  pageContent: NgcPageContentDirective;
  stretch: boolean;
  suppressScrollX: boolean;
  suppressScrollY: boolean;
  scrollBarMode: INgcScrollBarMode;
  isScrolling: boolean;
  get headerPaddingTop(): string;
  get headerPaddingBottom(): string;
  get headerPaddingLeft(): string;
  get headerPaddingRight(): string;
  get contentPaddingTop(): string;
  get contentPaddingBottom(): string;
  get contentPaddingLeft(): string;
  get contentPaddingRight(): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPageComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcPageComponent, "ngc-page", never, {
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "suppressScrollX": {
      "alias": "suppressScrollX";
      "required": false;
    };
    "suppressScrollY": {
      "alias": "suppressScrollY";
      "required": false;
    };
    "scrollBarMode": {
      "alias": "scrollBarMode";
      "required": false;
    };
  }, {}, ["pageHeader", "pageContent"], ["[ngcPageHeader]", "[ngcPageContent]"], false, never>;
}
export declare class NgcPageModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPageModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcPageModule, [typeof NgcPageComponent, typeof NgcPageHeaderDirective, typeof NgcPageContentDirective], [typeof CoreModule, typeof NgcScrollBarModule], [typeof NgcPageComponent, typeof NgcPageHeaderDirective, typeof NgcPageContentDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcPageModule>;
}
export declare class NgcMenuButtonCloseDirective {
  elementRef: ElementRef;
  disabled: boolean;
  clicked$: Subject<Event>;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  triggerClick(event: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuButtonCloseDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuButtonCloseDirective, "[ngcMenuButtonClose]", ["ngcMenuButtonClose"], {
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcMenuItemPrefixDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuItemPrefixDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuItemPrefixDirective, "[ngcMenuItemPrefix]", ["ngcMenuItemPrefix"], {}, {}, never, never, false, never>;
}
export declare class WGCMenuItemSuffixDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<WGCMenuItemSuffixDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<WGCMenuItemSuffixDirective, "[ngcMenuItemSuffix]", ["ngcMenuItemSuffix"], {}, {}, never, never, false, never>;
}
export declare class NgcMenuItemIconDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuItemIconDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuItemIconDirective, "[ngcMenuItemIcon]", ["ngcMenuItemIcon"], {}, {}, never, never, false, never>;
}
export declare class NgcMenuItemComponent implements OnChanges {
  elementRef: ElementRef;
  get styleColor(): string;
  get classDisabled(): boolean;
  get classActive(): boolean;
  get classFocusing(): boolean;
  menuItemIcon: NgcMenuItemIconDirective;
  icon: string;
  color: string;
  iconColor: string;
  dotColor: string;
  autoClose: boolean;
  active: boolean;
  disabled: boolean;
  focusing: boolean;
  activeChange: EventEmitter<boolean>;
  clickEventEmitter: EventEmitter<Event>;
  focusEventEmitter: EventEmitter<Event>;
  blurEventEmitter: EventEmitter<Event>;
  clicked$: Subject<Event>;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  click(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  focus(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  blur(event?: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuItemComponent, "button[ngcMenuItem]", never, {
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "iconColor": {
      "alias": "iconColor";
      "required": false;
    };
    "dotColor": {
      "alias": "dotColor";
      "required": false;
    };
    "autoClose": {
      "alias": "autoClose";
      "required": false;
    };
    "active": {
      "alias": "active";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
  }, {
    "activeChange": "activeChange";
    "clickEventEmitter": "click";
    "focusEventEmitter": "focus";
    "blurEventEmitter": "blur";
  }, ["menuItemIcon"], ["[ngcMenuItemPrefix]", "[ngcMenuItemIcon]", "*", "[ngcMenuItemSuffix]"], false, never>;
}
export declare class NgcMenuHeaderTitleComponent implements AfterViewInit, OnDestroy {
  private _cdRef;
  private _templateRef;
  templateRef: TemplateRef<any>;
  private _classList;
  get classList(): string;
  set classList(classes: string);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuHeaderTitleComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuHeaderTitleComponent, "ngc-menu-header-title", never, {
    "classList": {
      "alias": "class";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcMenuHeaderComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  private _cdRef;
  private _templateRef;
  private _menuHeader;
  menuHeaderTitle: NgcMenuHeaderTitleComponent;
  templateRef: TemplateRef<any>;
  private _classList;
  get classList(): string;
  set classList(classes: string);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuHeaderComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuHeaderComponent, "ngc-menu-header", never, {
    "classList": {
      "alias": "class";
      "required": false;
    };
  }, {}, ["_menuHeader", "menuHeaderTitle"], ["*"], false, never>;
}
export declare class NgcMenuContentComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  private _cdRef;
  private _templateRef;
  private _menuContent;
  templateRef: TemplateRef<any>;
  private _classList;
  get classList(): string;
  set classList(classes: string);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuContentComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuContentComponent, "ngc-menu-content", never, {
    "classList": {
      "alias": "class";
      "required": false;
    };
  }, {}, ["_menuContent"], ["*"], false, never>;
}
export declare class NgcMenuFooterComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  private _cdRef;
  private _templateRef;
  private _menuFooter;
  templateRef: TemplateRef<any>;
  private _classList;
  get classList(): string;
  set classList(classes: string);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuFooterComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuFooterComponent, "ngc-menu-footer", never, {
    "classList": {
      "alias": "class";
      "required": false;
    };
  }, {}, ["_menuFooter"], ["*"], false, never>;
}
export type NgcIMenuPosition = 'above' | 'below' | 'before' | 'after';
export type NgcIMenuDirection = 'start' | 'end' | 'center';
export declare class NgcMenuComponent {
  elementRef: ElementRef;
  private _cdRef;
  private _ngZone;
  templateRef: TemplateRef<any>;
  set _scroller(scroller: DetectScrollDirective);
  set _scrollBar(scrollBar: NgcScrollBarDirective);
  menuButtonCloseList: QueryList<NgcMenuButtonCloseDirective>;
  menuItems: QueryList<NgcMenuItemComponent>;
  menuHeader: NgcMenuHeaderComponent;
  menuContent: NgcMenuContentComponent;
  menuFooter: NgcMenuFooterComponent;
  title: string;
  backdropClass: string;
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  hasScrollBar: boolean;
  hasBackdrop: boolean;
  hasArrow: boolean;
  hasButtonClose: boolean;
  closeOnClickOutside: boolean;
  scrollBarMode: INgcScrollBarMode;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  backdropPress: EventEmitter<MouseEvent>;
  loadMore: EventEmitter<boolean>;
  scroller: DetectScrollDirective;
  scrollBar: NgcScrollBarDirective;
  isRefreshing: boolean;
  isOpened: boolean;
  isAllItemsActivated: boolean;
  data: IObject;
  classList: IObject<boolean>;
  close: (event?: Event) => void;
  reopen: () => void;
  private _previousPanelClass;
  set panelClass(classes: string);
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {NgZone} _ngZone
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
  /**
   * @param {IObject} data
   * @return {void}
   */
  onOpened(data: any): void;
  /**
   * @return {void}
   */
  onClosed(): void;
  /**
   * @param {NgcIMenuPosition} position
   * @param {NgcIMenuDirection} direction
   * @return {void}
   */
  setPositionClasses(position: NgcIMenuPosition, direction: NgcIMenuDirection): void;
  /**
   * @return {void}
   */
  reattach(): void;
  /**
   * @return {void}
   */
  detach(): void;
  /**
   * @return {void}
   */
  markForCheck(): void;
  /**
   * @return {void}
   */
  detectChanges(): void;
  /**
   * @param {NgcMenuItemComponent} item
   * @return {void}
   */
  scrollToElement(item: NgcMenuItemComponent): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  chooseItem(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  focusNextItem(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  focusPreviousItem(event?: Event): void;
  /**
   * @param {number} focusingIndex
   * @param {number} focusIndex
   * @param {Event=} event
   * @return {void}
   */
  private _focusItem;
  /**
   * @return {void}
   */
  private _checkAllItemsSelected;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMenuComponent, "ngc-menu", never, {
    "title": {
      "alias": "title";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "hasScrollBar": {
      "alias": "hasScrollBar";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "hasArrow": {
      "alias": "hasArrow";
      "required": false;
    };
    "hasButtonClose": {
      "alias": "hasButtonClose";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "scrollBarMode": {
      "alias": "scrollBarMode";
      "required": false;
    };
    "panelClass": {
      "alias": "class";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "backdropPress": "backdropPress";
    "loadMore": "loadMore";
  }, ["menuHeader", "menuContent", "menuFooter", "menuButtonCloseList", "menuItems"], never, false, never>;
}
export declare class NgcMenuTriggerForDirective implements OnDestroy {
  private _overlay;
  private _elementRef;
  private _vcRef;
  panelClass: string | string[];
  backdropClass: string | string[];
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  programmatically: boolean;
  autoFit: boolean;
  disabled: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  layoutDir: Direction;
  position: NgcIMenuPosition;
  menuData: IObject;
  menuInit: EventEmitter<NgcMenuTriggerForDirective>;
  menuOpened: EventEmitter<Event>;
  menuClosed: EventEmitter<Event>;
  menuBackdropPress: EventEmitter<Event>;
  private _portal;
  private _isPositionStrategyUpdated;
  private _isMenuOpened;
  private _overlayRef;
  private _menu;
  private _resizeObserver;
  get menu(): NgcMenuComponent;
  set menu(menu: NgcMenuComponent);
  get isMenuOpened(): boolean;
  set isMenuOpened(value: boolean);
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _vcRef: ViewContainerRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {Event} event
   * @param {IObject} data
   * @return {void}
   */
  open(event?: Event, data?: IObject): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @return {void}
   */
  reopen(): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {TemplatePortal}
   */
  private _createTemplatePortal;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  /**
   * @return {void}
   */
  private _autoFitMenuPosition;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuTriggerForDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuTriggerForDirective, "[ngcMenuTriggerFor]", ["ngcMenuTriggerFor"], {
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "programmatically": {
      "alias": "programmatically";
      "required": false;
    };
    "autoFit": {
      "alias": "autoFit";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "layoutDir": {
      "alias": "layoutDir";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "menuData": {
      "alias": "menuData";
      "required": false;
    };
    "menu": {
      "alias": "ngcMenuTriggerFor";
      "required": false;
    };
  }, {
    "menuInit": "menuInit";
    "menuOpened": "menuOpened";
    "menuClosed": "menuClosed";
    "menuBackdropPress": "menuBackdropPress";
  }, never, never, false, never>;
}
export declare class NgcMenuHeaderDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuHeaderDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuHeaderDirective, "[ngcMenuHeader]", ["ngcMenuHeader"], {}, {}, never, never, false, never>;
}
export declare class NgcMenuContentDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuContentDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuContentDirective, "[ngcMenuContent]", ["ngcMenuContent"], {}, {}, never, never, false, never>;
}
export declare class NgcMenuFooterDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuFooterDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMenuFooterDirective, "[ngcMenuFooter]", ["ngcMenuFooter"], {}, {}, never, never, false, never>;
}
type NGCITooltipTheme = 'default' | 'light';
type NGCITooltipPosition = 'above' | 'below' | 'before' | 'after';
type NGCITooltipDirection = 'start' | 'end' | 'center';
export declare class NgcTooltipComponent {
  private _elementRef;
  private _cdRef;
  private _ngZone;
  templateRef: TemplateRef<any>;
  color: string;
  backdropClass: string;
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  messageOnly: boolean;
  theme: NGCITooltipTheme;
  message: string;
  close: (event?: MouseEvent) => void;
  classList: IObject<boolean>;
  private _previousPanelClass;
  set panelClass(classes: string);
  get nativeElement(): HTMLElement;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {NgZone} _ngZone
   */
  constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngZone: NgZone);
  /**
   * @param {NGCITooltipPosition} position
   * @param {NGCITooltipDirection} direction
   * @return {void}
   */
  setPositionClasses(position: NGCITooltipPosition, direction?: NGCITooltipDirection): void;
  /**
   * @return {void}
   */
  reattach(): void;
  /**
   * @return {void}
   */
  detach(): void;
  /**
   * @return {void}
   */
  markForCheck(): void;
  /**
   * @return {void}
   */
  detectChanges(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTooltipComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTooltipComponent, "ngc-tooltip", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "messageOnly": {
      "alias": "messageOnly";
      "required": false;
    };
    "theme": {
      "alias": "theme";
      "required": false;
    };
    "panelClass": {
      "alias": "class";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
type NGCITooltipTriggerType = 'hover' | 'press';
export declare class NgcTooltipDirective implements OnChanges, AfterViewInit, OnDestroy {
  private _overlay;
  private _elementRef;
  private _cdRef;
  private _vcRef;
  private _focusMonitor;
  panelClass: string | string[];
  backdropClass: string | string[];
  tooltipColor: string;
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  disabled: boolean;
  once: boolean;
  programmatically: boolean;
  autoClose: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  openDelay: number;
  closeDelay: number;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  layoutDir: Direction;
  position: NGCITooltipPosition;
  triggerType: NGCITooltipTriggerType;
  opened: EventEmitter<MouseEvent>;
  closed: EventEmitter<MouseEvent>;
  isOpened: boolean;
  private _openTimeout;
  private _closeTimeout;
  private _closeAllTimeout;
  private _portal;
  private _tooltip;
  private _isPositionStrategyUpdated;
  private _visibleOnce;
  private _overlayElementHover;
  private _overlayRef;
  private _instance;
  private _resizeObserver;
  private _resizeObserver2;
  private _closeDebounce;
  get tooltip(): any;
  set tooltip(tooltip: any);
  get canAttach(): boolean;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {ViewContainerRef} _vcRef
   * @param {FocusMonitor} _focusMonitor
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef, _focusMonitor: FocusMonitor);
  triggerMouseClick(event: MouseEvent): void;
  triggerMouseEnter(event: MouseEvent): void;
  triggerMouseLeave(event: MouseEvent): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  open(event?: MouseEvent): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  close(event?: MouseEvent): void;
  /**
   * @return {void}
   */
  closeAll(): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  private _open;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  private _close;
  /**
   * @return {void}
   */
  private _closeAll;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  /**
   * @return {void}
   */
  private _setTooltipMessage;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTooltipDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTooltipDirective, "[ngcTooltip]", ["ngcTooltip"], {
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "tooltipColor": {
      "alias": "tooltipColor";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "once": {
      "alias": "once";
      "required": false;
    };
    "programmatically": {
      "alias": "programmatically";
      "required": false;
    };
    "autoClose": {
      "alias": "autoClose";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "openDelay": {
      "alias": "openDelay";
      "required": false;
    };
    "closeDelay": {
      "alias": "closeDelay";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "layoutDir": {
      "alias": "layoutDir";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "triggerType": {
      "alias": "triggerType";
      "required": false;
    };
    "tooltip": {
      "alias": "ngcTooltip";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
  }, never, never, false, never>;
}
export declare class NgcTruncateComponent implements AfterViewInit, AfterContentInit, OnDestroy {
  private _cdRef;
  get styleLine(): number;
  get classSingleLine(): boolean;
  get classDisabled(): boolean;
  get classEmpty(): boolean;
  wrapperEle: ElementRef<HTMLSpanElement>;
  limitLine: number;
  disabled: boolean;
  tooltip: any;
  ngcTooltip: NgcTooltipDirective;
  wgcTruncate: any;
  internalTooltip: any;
  internalLimitLine: number;
  isEmpty: boolean;
  private _checkTextOverDebounce;
  private _resizeObserver;
  private _mutationObserver;
  get textEle(): HTMLElement;
  get content(): string;
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  triggerMouseMove(): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @return {boolean}
   */
  private _checkTextOver;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTruncateComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTruncateComponent, "ngc-truncate", never, {
    "limitLine": {
      "alias": "limitLine";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "tooltip": {
      "alias": "tooltip";
      "required": false;
    };
    "ngcTooltip": {
      "alias": "ngcTooltip";
      "required": false;
    };
    "wgcTruncate": {
      "alias": "wgcTruncate";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcBlockTruncateDirective implements OnChanges, OnDestroy, AfterViewInit {
  _elementRef: ElementRef;
  private _cdRef;
  blocks: QueryList<ElementRef>;
  limit: number;
  maximum: number;
  length: number;
  parent: HTMLElement;
  maxDisplay: number;
  private _currentParentWidth;
  private _isRendering;
  private _render$;
  private _resizeObserver;
  private _markAsDoneDebounce;
  get moreDisplay(): number;
  get isFixedLimit(): boolean;
  get isTruncated(): boolean;
  get ele(): HTMLElement;
  get parentEle(): HTMLElement;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {number} maxDisplay
   * @return {void}
   */
  protected setMaxDisplay(maxDisplay: number): void;
  /**
   * @param {number} parentWidth
   * @return {void}
   */
  protected markAsDone(parentWidth: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBlockTruncateDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcBlockTruncateDirective, "[ngcBlockTruncate]", ["ngcBlockTruncate"], {
    "limit": {
      "alias": "limit";
      "required": false;
    };
    "maximum": {
      "alias": "maximum";
      "required": false;
    };
    "length": {
      "alias": "length";
      "required": false;
    };
    "parent": {
      "alias": "parent";
      "required": false;
    };
  }, {}, ["blocks"], never, false, never>;
}
export declare class NgcTooltipModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTooltipModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTooltipModule, [typeof NgcTooltipComponent, typeof NgcTooltipDirective], [typeof i45.CommonModule, typeof CoreModule, typeof i5.OverlayModule, typeof i6$2.PortalModule], [typeof NgcTooltipDirective, typeof NgcTooltipComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTooltipModule>;
}
export declare class NgcTruncateModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTruncateModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTruncateModule, [typeof NgcTruncateComponent, typeof NgcBlockTruncateDirective], [typeof i45.CommonModule, typeof NgcTooltipModule], [typeof NgcTruncateComponent, typeof NgcBlockTruncateDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTruncateModule>;
}
type NgcIColorPickerMode = 'default' | 'inline';
type NgcIColorPickerPosition = 'above' | 'below';
type NgcIColorPickerEmptyMode = 'color' | 'background';
export declare class NgcColorPickerComponent {
  get classInline(): boolean;
  pickedColor: string;
  mode: NgcIColorPickerMode;
  emptyMode: NgcIColorPickerEmptyMode;
  picked: EventEmitter<string>;
  pickedColorChange: EventEmitter<string>;
  close: (event?: Event) => void;
  onPicked: (color: string) => void;
  selectedTabIndex: number;
  isPickOther: boolean;
  pickedColorObj: IObject;
  colors: string[];
  get colorCode(): string;
  /**
   * @param {string} color
   * @return {void}
   */
  pick(color: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorPickerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcColorPickerComponent, "ngc-color-picker", never, {
    "pickedColor": {
      "alias": "pickedColor";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "emptyMode": {
      "alias": "emptyMode";
      "required": false;
    };
  }, {
    "picked": "picked";
    "pickedColorChange": "pickedColorChange";
  }, never, never, false, never>;
}
export declare class NgcColorDotComponent {
  get styleColor(): string;
  get styleSize(): string;
  get classHidden(): boolean;
  get classCircle(): boolean;
  color: string;
  size: string;
  circle: boolean;
  viewOnly: boolean;
  visible: boolean;
  ngcColorDot: string;
  colorChange: EventEmitter<string>;
  /**
   * @param {string} color
   * @return {void}
   */
  onColorPicked(color: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorDotComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcColorDotComponent, "ngc-color-dot, [ngcColorDot]", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "circle": {
      "alias": "circle";
      "required": false;
    };
    "viewOnly": {
      "alias": "viewOnly";
      "required": false;
    };
    "visible": {
      "alias": "visible";
      "required": false;
    };
    "ngcColorDot": {
      "alias": "ngcColorDot";
      "required": false;
    };
  }, {
    "colorChange": "colorChange";
  }, never, ["*"], false, never>;
}
export declare class NgcColorPickerDirective implements OnDestroy, OnChanges {
  private _overlay;
  private _elementRef;
  private _cdRef;
  private _vcRef;
  pickedColor: string;
  panelClass: string | string[];
  backdropClass: string | string[];
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  disabled: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  direction: Direction;
  position: NgcIColorPickerPosition;
  emptyMode: NgcIColorPickerEmptyMode;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  picked: EventEmitter<string>;
  backdropPress: EventEmitter<MouseEvent>;
  pickedColorChange: EventEmitter<string>;
  isOpened: boolean;
  private _isPositionStrategyUpdated;
  private _instance;
  private _portal;
  private _overlayRef;
  private _resizeObserver;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {string} color
   * @return {void}
   */
  onColorPicked(color: string): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorPickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcColorPickerDirective, "[ngcColorPicker]", ["ngcColorPicker"], {
    "pickedColor": {
      "alias": "pickedColor";
      "required": false;
    };
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "emptyMode": {
      "alias": "emptyMode";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "picked": "picked";
    "backdropPress": "backdropPress";
    "pickedColorChange": "pickedColorChange";
  }, never, never, false, never>;
}
export declare class NgcColorPickerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcColorPickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcColorPickerModule, [typeof NgcColorPickerComponent, typeof NgcColorDotComponent, typeof NgcColorPickerDirective], [typeof i45.CommonModule, typeof CoreModule, typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof i8.ColorSketchModule, typeof i9.ColorPhotoshopModule, typeof NgcTooltipModule, typeof NgcButtonModule], [typeof NgcColorPickerComponent, typeof NgcColorDotComponent, typeof NgcColorPickerDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcColorPickerModule>;
}
export declare class NgcMenuModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMenuModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcMenuModule, [typeof NgcMenuComponent, typeof NgcMenuItemComponent, typeof NgcMenuHeaderComponent, typeof NgcMenuHeaderDirective, typeof NgcMenuHeaderTitleComponent, typeof NgcMenuFooterComponent, typeof NgcMenuFooterDirective, typeof NgcMenuContentComponent, typeof NgcMenuContentDirective, typeof NgcMenuTriggerForDirective, typeof NgcMenuButtonCloseDirective, typeof NgcMenuItemIconDirective, typeof NgcMenuItemPrefixDirective, typeof NgcMenuItemPrefixDirective], [typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof CoreModule, typeof NgcIconModule, typeof NgcScrollBarModule, typeof NgcTruncateModule, typeof NgcButtonModule, typeof NgcTooltipModule, typeof NgcColorPickerModule], [typeof NgcMenuComponent, typeof NgcMenuItemComponent, typeof NgcMenuHeaderComponent, typeof NgcMenuHeaderDirective, typeof NgcMenuHeaderTitleComponent, typeof NgcMenuFooterComponent, typeof NgcMenuFooterDirective, typeof NgcMenuContentComponent, typeof NgcMenuContentDirective, typeof NgcMenuTriggerForDirective, typeof NgcMenuButtonCloseDirective, typeof NgcMenuItemIconDirective, typeof NgcMenuItemPrefixDirective, typeof NgcMenuItemPrefixDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcMenuModule>;
}
export declare class NgcGridItemComponent {
  elementRef: ElementRef;
  templateRef: TemplateRef<any>;
  id: number;
  classes: string;
  ngClass: string;
  active: boolean;
  disabled: boolean;
  focusing: boolean;
  hovering: boolean;
  dragging: boolean;
  draggable: boolean;
  highlight: boolean;
  autoUnhighlight: boolean;
  highlightChange: EventEmitter<boolean>;
  clickEventEmitter: EventEmitter<Event>;
  focusEventEmitter: EventEmitter<Event>;
  blurEventEmitter: EventEmitter<Event>;
  isForceAutoUnhighlight: boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  /**
   * @param {boolean=} isForceAutoUnhighlight
   * @return {void}
   */
  setHighlight(isForceAutoUnhighlight?: boolean): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  click(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  focus(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  blur(event?: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcGridItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcGridItemComponent, "ngc-grid-item", never, {
    "id": {
      "alias": "id";
      "required": false;
    };
    "classes": {
      "alias": "class";
      "required": false;
    };
    "ngClass": {
      "alias": "ngClass";
      "required": false;
    };
    "active": {
      "alias": "active";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
    "hovering": {
      "alias": "hovering";
      "required": false;
    };
    "dragging": {
      "alias": "dragging";
      "required": false;
    };
    "draggable": {
      "alias": "draggable";
      "required": false;
    };
    "highlight": {
      "alias": "highlight";
      "required": false;
    };
    "autoUnhighlight": {
      "alias": "autoUnhighlight";
      "required": false;
    };
  }, {
    "highlightChange": "highlightChange";
    "clickEventEmitter": "click";
    "focusEventEmitter": "focus";
    "blurEventEmitter": "blur";
  }, never, ["*"], false, never>;
}
export interface NgcIGridItemMoved {
  previousIndex: number;
  currentIndex: number;
  item: NgcGridItemComponent;
}
export declare class NgcGridComponent implements AfterViewInit, AfterContentInit {
  get styleItemWidth(): string;
  get styleItemActiveColor(): string;
  get classStretch(): boolean;
  listGroup: CdkDropListGroup<CdkDropList>;
  placeholder: CdkDropList;
  scroller: DetectScrollDirective;
  scrollBar: NgcScrollBarDirective;
  gridItems: QueryList<NgcGridItemComponent>;
  itemsPerRow: number;
  activeColor: string;
  stretch: boolean;
  scrollBarMode: INgcScrollBarMode;
  itemsSelected: EventEmitter<NgcGridItemComponent[]>;
  itemMoved: EventEmitter<NgcIGridItemMoved>;
  loadMore: EventEmitter<boolean>;
  items: NgcGridItemComponent[];
  private _sourceIndex;
  private _targetIndex;
  private _source;
  private _target;
  get width(): string;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @return {void}
   */
  onItemsSelected(): void;
  /**
   * @return {void}
   */
  deselectItems(): void;
  /**
   * @return {void}
   */
  onDropped(): void;
  enter: (drag: CdkDrag, drop: CdkDropList) => boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcGridComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcGridComponent, "ngc-grid", never, {
    "itemsPerRow": {
      "alias": "itemsPerRow";
      "required": false;
    };
    "activeColor": {
      "alias": "activeColor";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "scrollBarMode": {
      "alias": "scrollBarMode";
      "required": false;
    };
  }, {
    "itemsSelected": "itemsSelected";
    "itemMoved": "itemMoved";
    "loadMore": "loadMore";
  }, ["gridItems"], never, false, never>;
}
export declare class NgcRadioComponent implements AfterViewInit {
  private _elementRef;
  get styleColor(): string;
  get styleBgColor(): string;
  get styleLabelColor(): string;
  get styleSize(): string;
  get classChecked(): boolean;
  get classDisabled(): boolean;
  get classReadonly(): boolean;
  get attrTabindex(): number;
  value: any;
  label: string;
  color: string;
  bgColor: string;
  labelColor: string;
  size: string;
  tabindex: number;
  checked: boolean;
  disabled: boolean;
  readonly: boolean;
  checkedChange: EventEmitter<boolean>;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  triggerClick(event: MouseEvent): void;
  triggerKeyDownSpace(event: Event): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @return {void}
   */
  toggle(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcRadioComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcRadioComponent, "ngc-radio", never, {
    "value": {
      "alias": "value";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "bgColor": {
      "alias": "bgColor";
      "required": false;
    };
    "labelColor": {
      "alias": "labelColor";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "tabindex": {
      "alias": "tabindex";
      "required": false;
    };
    "checked": {
      "alias": "checked";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
  }, {
    "checkedChange": "checkedChange";
  }, never, ["*"], false, never>;
}
type NgcRadioGroupDirection = 'vertical' | 'horizontal';
export declare class NgcRadioGroupComponent implements OnChanges, AfterContentInit, ControlValueAccessor {
  get classVertical(): boolean;
  get classHorizontal(): boolean;
  radioList: QueryList<NgcRadioComponent>;
  ngModel: any;
  label: any;
  disableControl: boolean;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  direction: NgcRadioGroupDirection;
  formControl: FormControl;
  ngModelChange: EventEmitter<any>;
  private _innerValue;
  triggerClick(event: MouseEvent): void;
  /**
   * @constructor
   * @param {any} value
   */
  writeValue(value: any): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnChange(fn: Function): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnTouched(fn: Function): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  private _onTouchedCallback;
  private _onChangeCallback;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcRadioGroupComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcRadioGroupComponent, "ngc-radio-group", never, {
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
  }, ["radioList"], ["*"], false, never>;
}
export declare class NgcRadioModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcRadioModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcRadioModule, [typeof NgcRadioComponent, typeof NgcRadioGroupComponent], [typeof i45.CommonModule], [typeof NgcRadioComponent, typeof NgcRadioGroupComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcRadioModule>;
}
export declare class NgcGridModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcGridModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcGridModule, [typeof NgcGridComponent, typeof NgcGridItemComponent], [typeof i3$1.DragDropModule, typeof CoreModule, typeof NgcIconModule, typeof NgcRadioModule, typeof NgcScrollBarModule], [typeof NgcGridComponent, typeof NgcGridItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcGridModule>;
}
export declare class NgcTabContentDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabContentDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTabContentDirective, "[ngcTabContent]", ["ngcTabContent"], {}, {}, never, never, false, never>;
}
export declare class NgcTabComponent implements OnChanges {
  templateRef: TemplateRef<any>;
  tabHeader: NgcTabContentDirective;
  tabContent: NgcTabContentDirective;
  label: string;
  icon: string;
  classes: string;
  ngClass: string;
  disabled: boolean;
  changes$: Subject<void>;
  get header(): TemplateRef<any>;
  get content(): TemplateRef<any>;
  /**
   * @constructor
   */
  ngOnChanges(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTabComponent, "ngc-tab", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "classes": {
      "alias": "class";
      "required": false;
    };
    "ngClass": {
      "alias": "ngClass";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {}, ["tabHeader", "tabContent"], ["*"], false, never>;
}
export interface NgcIBeforeTabChangeEvent {
  tabGroup: NgcTabGroupComponent;
  tabIndex: number;
}
export type NgcITabAlignment = 'left' | 'right' | 'center';
export declare class NgcTabGroupComponent implements OnChanges, OnDestroy, AfterContentInit, AfterViewInit {
  private _elementRef;
  private _cdRef;
  get styleHeaderHeight(): string;
  get styleContentPaddingTop(): string;
  get styleContentPaddingBottom(): string;
  get styleContentPaddingLeft(): string;
  get styleContentPaddingRight(): string;
  get classStretch(): boolean;
  get classLeft(): boolean;
  get classRight(): boolean;
  get classCenter(): boolean;
  scroller: DetectScrollDirective;
  scrollBar: NgcScrollBarDirective;
  tabGroupHeader: ElementRef;
  tabInkBar: ElementRef;
  tabHeaderList: QueryList<ElementRef>;
  tabItems: QueryList<NgcTabComponent>;
  headerHeight: string;
  contentPaddingVertical: string;
  contentPaddingHorizontal: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  selectedIndex: number;
  hasScrollBar: boolean;
  stretch: boolean;
  stretchTab: boolean;
  headerVerticalDivider: boolean;
  headerHorizontalDivider: boolean;
  alwaysOnDisplay: boolean;
  noTabContent: boolean;
  alignment: NgcITabAlignment;
  scrollBarMode: INgcScrollBarMode;
  selectedIndexChange: EventEmitter<number>;
  tabChanged: EventEmitter<NgcTabComponent>;
  items: NgcTabComponent[];
  private _tabHeaderItems;
  private _resizeObserver;
  private _initInkBarThrottle;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @param {number} index
   * @return {void}
   */
  select(index: number): void;
  /**
   * @param {number} index
   * @return {void}
   */
  private _initInkBar;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabGroupComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTabGroupComponent, "ngc-tab-group", never, {
    "headerHeight": {
      "alias": "headerHeight";
      "required": false;
    };
    "contentPaddingVertical": {
      "alias": "contentPaddingVertical";
      "required": false;
    };
    "contentPaddingHorizontal": {
      "alias": "contentPaddingHorizontal";
      "required": false;
    };
    "contentPaddingTop": {
      "alias": "contentPaddingTop";
      "required": false;
    };
    "contentPaddingBottom": {
      "alias": "contentPaddingBottom";
      "required": false;
    };
    "contentPaddingLeft": {
      "alias": "contentPaddingLeft";
      "required": false;
    };
    "contentPaddingRight": {
      "alias": "contentPaddingRight";
      "required": false;
    };
    "selectedIndex": {
      "alias": "selectedIndex";
      "required": false;
    };
    "hasScrollBar": {
      "alias": "hasScrollBar";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "stretchTab": {
      "alias": "stretchTab";
      "required": false;
    };
    "headerVerticalDivider": {
      "alias": "headerVerticalDivider";
      "required": false;
    };
    "headerHorizontalDivider": {
      "alias": "headerHorizontalDivider";
      "required": false;
    };
    "alwaysOnDisplay": {
      "alias": "alwaysOnDisplay";
      "required": false;
    };
    "noTabContent": {
      "alias": "noTabContent";
      "required": false;
    };
    "alignment": {
      "alias": "alignment";
      "required": false;
    };
    "scrollBarMode": {
      "alias": "scrollBarMode";
      "required": false;
    };
  }, {
    "selectedIndexChange": "selectedIndexChange";
    "tabChanged": "tabChanged";
  }, ["tabItems"], never, false, never>;
}
export declare class NgcTabHeaderDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabHeaderDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTabHeaderDirective, "[ngcTabHeader]", ["ngcTabHeader"], {}, {}, never, never, false, never>;
}
export declare class NgcDividerComponent {
  get classVertical(): boolean;
  vertical: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDividerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDividerComponent, "ngc-divider", never, {
    "vertical": {
      "alias": "vertical";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcDividerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDividerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDividerModule, [typeof NgcDividerComponent], [typeof CoreModule], [typeof NgcDividerComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDividerModule>;
}
export declare class NgcTabsModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTabsModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTabsModule, [typeof NgcTabGroupComponent, typeof NgcTabComponent, typeof NgcTabHeaderDirective, typeof NgcTabContentDirective], [typeof CoreModule, typeof NgcIconModule, typeof NgcScrollBarModule, typeof NgcDividerModule], [typeof NgcTabGroupComponent, typeof NgcTabComponent, typeof NgcTabHeaderDirective, typeof NgcTabContentDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTabsModule>;
}
export type NgcIAvatarMode = 'auto' | 'text' | 'photo' | 'icon';
export type NgcIAvatarSize = 'xlarge' | 'large' | 'medium' | 'small';
export interface NgcIAvatarOptions {
  characters?: number;
  labelColor?: string;
  size?: string;
}
export interface NgcIAvatar {
  photo?: string;
  color?: string;
  icon?: string;
  mode?: NgcIAvatarMode;
}
export declare class NgcAvatarComponent implements OnChanges, AfterViewInit {
  pageComp: NgcPageComponent;
  gridComp: NgcGridComponent;
  menuComp: NgcMenuComponent;
  tabGroupComp: NgcTabGroupComponent;
  private _elementRef;
  get styleColor(): string;
  get styleSize(): string;
  get styleLabelColor(): string;
  get classAuto(): boolean;
  label: string;
  labelColor: string;
  size: string | NgcIAvatarSize;
  defaultPhoto: string;
  errorPhoto: string;
  characters: number;
  lazy: boolean;
  avatar: NgcIAvatar;
  scrolling$: Subject<any>;
  scroll$: Observable<any>;
  parsedLabel: string;
  parsedLabelColor: string;
  isPhotoLoaded$: Observable<boolean>;
  /**
   * @constructor
   * @param {NgcPageComponent} pageComp
   * @param {NgcGridComponent} gridComp
   * @param {NgcMenuComponent} menuComp
   * @param {NgcTabGroupComponent} tabGroupComp
   * @param {ElementRef} _elementRef
   */
  constructor(pageComp: NgcPageComponent, gridComp: NgcGridComponent, menuComp: NgcMenuComponent, tabGroupComp: NgcTabGroupComponent, _elementRef: ElementRef);
  /**
   * @param {string} label
   * @param {number} characters
   * @return {string}
   */
  static parseLabel(label?: string, characters?: number): string;
  /**
   * @param {string} avatarColor
   * @return {string}
   */
  static parseLabelColor(avatarColor: string): string;
  /**
   * @param {string} label
   * @param {NgcIAvatar} avatar
   * @param {NgcIAvatarOptions} options
   * @return {string}
   */
  static parseAvatar(label: string, avatar: NgcIAvatar, options?: NgcIAvatarOptions): string;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {NgcIAvatarMode} mode
   * @return {boolean}
   */
  isAutoMode(mode: NgcIAvatarMode): boolean;
  /**
   * @param {NgcIAvatarMode} mode
   * @return {boolean}
   */
  isPhotoMode(mode: NgcIAvatarMode): boolean;
  /**
   * @param {NgcIAvatarMode} mode
   * @return {boolean}
   */
  isIconMode(mode: NgcIAvatarMode): boolean;
  /**
   * @param {NgcIAvatarMode} mode
   * @return {boolean}
   */
  isTextMode(mode: NgcIAvatarMode): boolean;
  /**
   * @param {string} photo
   * @return {Observable}
   */
  private _checkPhotoLoaded;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarComponent, [{
    optional: true;
  }, {
    optional: true;
  }, {
    optional: true;
  }, {
    optional: true;
  }, null]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcAvatarComponent, "ngc-avatar", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "labelColor": {
      "alias": "labelColor";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "defaultPhoto": {
      "alias": "defaultPhoto";
      "required": false;
    };
    "errorPhoto": {
      "alias": "errorPhoto";
      "required": false;
    };
    "characters": {
      "alias": "characters";
      "required": false;
    };
    "lazy": {
      "alias": "lazy";
      "required": false;
    };
    "avatar": {
      "alias": "avatar";
      "required": false;
    };
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export type NgcIEmojiPickerMode = 'default' | 'inline';
export type NgcIEmojiPickerPosition = 'above' | 'below';
export type NgcIEmojiData = EmojiData;
export declare class NgcEmojiPickerComponent {
  get classInline(): boolean;
  perLine: number;
  mode: NgcIEmojiPickerMode;
  picked: EventEmitter<NgcIEmojiData>;
  close: (event?: Event) => void;
  onPicked: (event: NgcIEmojiData) => void;
  /**
   * @param {NgcIEmojiData} emoji
   * @return {void}
   */
  pick(emoji: NgcIEmojiData): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiPickerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcEmojiPickerComponent, "ngc-emoji-picker", never, {
    "perLine": {
      "alias": "perLine";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
  }, {
    "picked": "picked";
  }, never, never, false, never>;
}
export declare class NgcEmojiPickerDirective implements OnDestroy, OnChanges {
  private _overlay;
  private _elementRef;
  private _cdRef;
  private _vcRef;
  panelClass: string | string[];
  backdropClass: string | string[];
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  disabled: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  perLine: number;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  direction: Direction;
  position: NgcIEmojiPickerPosition;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  picked: EventEmitter<NgcIEmojiData>;
  backdropPress: EventEmitter<MouseEvent>;
  isOpened: boolean;
  private _isPositionStrategyUpdated;
  private _instance;
  private _portal;
  private _overlayRef;
  private _resizeObserver;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {NgcIEmojiData} event
   * @return {void}
   */
  onEmojiPicked(event: NgcIEmojiData): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiPickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcEmojiPickerDirective, "[ngcEmojiPicker]", ["ngcEmojiPicker"], {
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "perLine": {
      "alias": "perLine";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "picked": "picked";
    "backdropPress": "backdropPress";
  }, never, never, false, never>;
}
export declare class NgcEmojiComponent {
  get styleSize(): string;
  emoji: string;
  size: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcEmojiComponent, "ngc-emoji, [ngcEmoji]", never, {
    "emoji": {
      "alias": "emoji";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcEmojiPickerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcEmojiPickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcEmojiPickerModule, [typeof NgcEmojiPickerComponent, typeof NgcEmojiPickerDirective, typeof NgcEmojiComponent], [typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof i6$1.PickerModule, typeof CoreModule, typeof NgcButtonModule, typeof NgcTooltipModule], [typeof NgcEmojiPickerComponent, typeof NgcEmojiPickerDirective, typeof NgcEmojiComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcEmojiPickerModule>;
}
export declare class NgcAvatarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcAvatarModule, [typeof NgcAvatarComponent], [typeof CoreModule, typeof NgcEmojiPickerModule], [typeof NgcAvatarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcAvatarModule>;
}
export interface NgcIGoogleDriveFile {
  description: string;
  embedUrl: string;
  iconUrl: string;
  id: string;
  isShared: boolean;
  lastEditedUtc: number;
  mimeType: string;
  name: string;
  organizationDisplayName: string;
  rotation: number;
  rotationDegree: number;
  serviceId: string;
  sizeBytes: number;
  type: string;
  url: string;
}
export declare class NgcGoogleDrivePickerDirective {
  mimeTypes: string[];
  multiSelect: boolean;
  disabled: boolean;
  picked: EventEmitter<NgcIGoogleDriveFile[]>;
  pickerApiLoaded: boolean;
  triggerClick(event: Event): void;
  /**
   * @return {void}
   */
  private _loadPicker;
  /**
   * @return {void}
   */
  private _onAuthApiLoaded;
  /**
   * @return {void}
   */
  private _onPickerApiLoaded;
  /**
   * @param {IObject} authResult
   * @return {void}
   */
  private _handleAuthResult;
  /**
   * @param {IObject} event
   * @return {void}
   */
  private _onPicked;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcGoogleDrivePickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcGoogleDrivePickerDirective, "[ngcGoogleDrivePicker]", ["ngcGoogleDrivePicker"], {
    "mimeTypes": {
      "alias": "mimeTypes";
      "required": false;
    };
    "multiSelect": {
      "alias": "multiSelect";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {
    "picked": "picked";
  }, never, never, false, never>;
}
export interface NgcIDropboxFile {
  bytes: number;
  icon: string;
  id: string;
  isDir: boolean;
  link: string;
  linkType: string;
  name: string;
  thumbnailLink: string;
}
export declare class NgcDropboxPickerDirective {
  extensions: string[];
  linkType: string;
  sizeLimit: number;
  folderSelect: boolean;
  multiSelect: boolean;
  disabled: boolean;
  picked: EventEmitter<NgcIDropboxFile[]>;
  cancelled: EventEmitter<void>;
  triggerClick(event: Event): void;
  /**
   * @return {void}
   */
  private _loadPicker;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropboxPickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDropboxPickerDirective, "[ngcDropboxPicker]", ["ngcDropboxPicker"], {
    "extensions": {
      "alias": "extensions";
      "required": false;
    };
    "linkType": {
      "alias": "linkType";
      "required": false;
    };
    "sizeLimit": {
      "alias": "sizeLimit";
      "required": false;
    };
    "folderSelect": {
      "alias": "folderSelect";
      "required": false;
    };
    "multiSelect": {
      "alias": "multiSelect";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {
    "picked": "picked";
    "cancelled": "cancelled";
  }, never, never, false, never>;
}
export interface NgcIOneDriveFile {
  '@microsoft.graph.downloadUrl': string;
  '@odata.context': string;
  id: string;
  name: string;
  size: number;
}
export declare class NgcOneDrivePickerDirective {
  extensions: string[];
  action: string;
  multiSelect: boolean;
  disabled: boolean;
  picked: EventEmitter<NgcIOneDriveFile[]>;
  cancelled: EventEmitter<void>;
  error: EventEmitter<unknown>;
  triggerClick(event: Event): void;
  /**
   * @return {void}
   */
  private _loadPicker;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcOneDrivePickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcOneDrivePickerDirective, "[ngcOneDrivePicker]", ["ngcOneDrivePicker"], {
    "extensions": {
      "alias": "extensions";
      "required": false;
    };
    "action": {
      "alias": "action";
      "required": false;
    };
    "multiSelect": {
      "alias": "multiSelect";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {
    "picked": "picked";
    "cancelled": "cancelled";
    "error": "error";
  }, never, never, false, never>;
}
type NgcIToastType = 'default' | 'info' | 'success' | 'warning' | 'danger';
type NgcIToastPosition = 'bottom' | 'top' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface NgcIToastConfig {
  icon?: string;
  color?: string;
  textColor?: string;
  duration?: number;
  canClose?: boolean;
  translate?: boolean;
  type?: NgcIToastType;
  position?: NgcIToastPosition;
  translateParams?: IObject;
  buttons?: NgcIToastButton[];
}
interface NgcIToastButton {
  label: string;
  onClicked: () => void;
}
export declare class NgcToastComponent implements OnChanges {
  private _contrastPipe;
  get styleColor(): string;
  get styleTextColor(): string;
  get classInfo(): boolean;
  get classSuccess(): boolean;
  get classWarning(): boolean;
  get classDanger(): boolean;
  get classHasDescription(): boolean;
  title: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
  buttons: NgcIToastButton[];
  canClose: boolean;
  translate: boolean;
  translateParams: IObject;
  type: NgcIToastType;
  closed: EventEmitter<MouseEvent>;
  private _icons;
  private _bkTextColor;
  get iconName(): string;
  /**
   * @constructor
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_contrastPipe: ContrastPipe);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcToastComponent, "ngc-toast", never, {
    "title": {
      "alias": "title";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "textColor": {
      "alias": "textColor";
      "required": false;
    };
    "buttons": {
      "alias": "buttons";
      "required": false;
    };
    "canClose": {
      "alias": "canClose";
      "required": false;
    };
    "translate": {
      "alias": "translate";
      "required": false;
    };
    "translateParams": {
      "alias": "translateParams";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
  }, {
    "closed": "closed";
  }, never, never, false, never>;
}
export declare class NgcToastService {
  private _overlay;
  private _topOverlayRef;
  private _bottomOverlayRef;
  private _topPortal;
  private _bottomPortal;
  private _topInstance;
  private _bottomInstance;
  private _defaultConfig;
  /**
   * @constructor
   * @param {Overlay} _overlay
   */
  constructor(_overlay: Overlay);
  /**
   * @param {string} title
   * @param {any} arg
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  show(title: string, arg?: any, config?: NgcIToastConfig): number;
  /**
   * @param {number} id
   * @return {void}
   */
  close(id: number): void;
  /**
   * @return {void}
   */
  closeAll(): void;
  /**
   * @param {string} title
   * @param {any} arg
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  info(title: string, arg?: any, config?: NgcIToastConfig): number;
  /**
   * @param {string} title
   * @param {any} arg
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  success(title: string, arg?: any, config?: NgcIToastConfig): number;
  /**
   * @param {string} title
   * @param {any} arg
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  warning(title: string, arg?: any, config?: NgcIToastConfig): number;
  /**
   * @param {string} title
   * @param {any} arg
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  danger(title: string, arg?: any, config?: NgcIToastConfig): number;
  /**
   * @param {string} title
   * @param {string} description
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  private _showOnTop;
  /**
   * @param {string} title
   * @param {string} description
   * @param {NgcIToastConfig} config
   * @return {number}
   */
  private _showOnBottom;
  /**
   * @param {NgcIToastPosition} position
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {ComponentPortal}
   */
  private _createPortal;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export type NgcIFilePickerMode = 'default' | 'inline';
export type NgcIFilePickerPosition = 'above' | 'below';
export type NgcIFileAttachmentType = 'local' | 'google-drive' | 'one-drive' | 'dropbox';
export interface NgcIFilePickerEvent {
  files: NgcIFile[];
  type: NgcIFileAttachmentType;
  localFiles?: FileList | File[];
}
export interface NgcIUploadedFile {
  destination: string;
  encoding: string;
  fieldname: string;
  filename: string;
  location: string;
  mimetype: string;
  originalname: string;
  path: string;
  size: number;
}
export type NgcIFile = Partial<NgcIUploadedFile> & Partial<NgcIGoogleDriveFile> & Partial<NgcIDropboxFile> & Partial<NgcIOneDriveFile> & {
  name: string;
  size: number;
  attachmentType: string;
  createdAt: Moment;
  '@previewUrl'?: string;
};
export interface NgcIFileService<TUploadedFile = NgcIUploadedFile> {
  upload: (files: File | FileList | File[], options?: IObject) => Observable<TUploadedFile>;
  downloadLocalFile: (file: NgcIFile) => void;
}
export declare const Ngc_FILE_SERVICE: InjectionToken<NgcIFileService>;
export declare class NgcCloudStorageConfig {
  private _googleDrive;
  private _dropbox;
  private _oneDrive;
  get googleDrive(): boolean;
  set googleDrive(value: boolean);
  get dropbox(): boolean;
  set dropbox(value: boolean);
  get oneDrive(): boolean;
  set oneDrive(value: boolean);
}
export declare const Ngc_CLOUD_STORAGE_CONFIG: InjectionToken<NgcCloudStorageConfig>;
export declare class NgcFilePickerComponent {
  cloudStorageConfig: NgcCloudStorageConfig;
  private _fileService;
  private _ngcToastService;
  get classInline(): boolean;
  fileAccept: string;
  googleDriveMimeTypes: string[];
  dropboxExtensions: string[];
  oneDriveExtensions: string[];
  multiSelect: boolean;
  mode: NgcIFilePickerMode;
  picked: EventEmitter<NgcIFilePickerEvent>;
  isUploading: boolean;
  maxFileSize: number;
  uploadingFiles: FileList | File[];
  uploadingFileStates: IObject[];
  file: any;
  close: (event?: Event) => void;
  onPicked: (event: NgcIFilePickerEvent) => void;
  private _imageOnly;
  get imageOnly(): boolean;
  set imageOnly(value: boolean);
  /**
   * @constructor
   * @param {NgcCloudStorageConfig} cloudStorageConfig
   * @param {NgcIFileService} _fileService
   * @param {NgcToastService} _ngcToastService
   */
  constructor(cloudStorageConfig: NgcCloudStorageConfig, _fileService: NgcIFileService, _ngcToastService: NgcToastService);
  /**
   * @param {FileList | File[]} files
   * @return {void}
   */
  onLocalPicked(files: FileList | File[]): void;
  /**
   * @param {NgcIGoogleDriveFile[]} files
   * @return {void}
   */
  onGoogleDrivePicked(files: NgcIGoogleDriveFile[]): void;
  /**
   * @param {NgcIDropboxFile[]} files
   * @return {void}
   */
  onDropboxPicked(files: NgcIDropboxFile[]): void;
  /**
   * @param {NgcIOneDriveFile[]} files
   * @return {void}
   */
  onOneDrivePicked(files: NgcIOneDriveFile[]): void;
  /**
   * @param {NgcIFile[]} files
   * @param {NgcIFileAttachmentType} attachmentType
   * @param {FileList | File[]} localFiles
   * @return {void}
   */
  pick(files: NgcIFile[], attachmentType: NgcIFileAttachmentType, localFiles?: FileList | File[]): void;
  /**
   * @param {NgcIFileAttachmentType} attachmentType
   * @param {NgcIFile} file
   * @return {string}
   */
  private _createPreviewUrl;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFilePickerComponent, [{
    optional: true;
  }, {
    optional: true;
  }, null]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcFilePickerComponent, "ngc-file-picker", never, {
    "fileAccept": {
      "alias": "fileAccept";
      "required": false;
    };
    "googleDriveMimeTypes": {
      "alias": "googleDriveMimeTypes";
      "required": false;
    };
    "dropboxExtensions": {
      "alias": "dropboxExtensions";
      "required": false;
    };
    "oneDriveExtensions": {
      "alias": "oneDriveExtensions";
      "required": false;
    };
    "multiSelect": {
      "alias": "multiSelect";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "imageOnly": {
      "alias": "imageOnly";
      "required": false;
    };
  }, {
    "picked": "picked";
  }, never, never, false, never>;
}
export declare class NgcFilePickerDirective implements OnDestroy, OnChanges {
  private _overlay;
  private _elementRef;
  private _cdRef;
  private _vcRef;
  googleDriveMimeTypes: string[];
  dropboxExtensions: string[];
  oneDriveExtensions: string[];
  fileAccept: string;
  panelClass: string | string[];
  backdropClass: string | string[];
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  imageOnly: boolean;
  multiSelect: boolean;
  disabled: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  direction: Direction;
  position: NgcIFilePickerPosition;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  picked: EventEmitter<NgcIFilePickerEvent>;
  backdropPress: EventEmitter<MouseEvent>;
  isOpened: boolean;
  private _isPositionStrategyUpdated;
  private _instance;
  private _portal;
  private _overlayRef;
  private _resizeObserver;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {NgcIFilePickerEvent} event
   * @return {void}
   */
  onFilePicked(event: NgcIFilePickerEvent): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFilePickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFilePickerDirective, "[ngcFilePicker]", ["ngcFilePicker"], {
    "googleDriveMimeTypes": {
      "alias": "googleDriveMimeTypes";
      "required": false;
    };
    "dropboxExtensions": {
      "alias": "dropboxExtensions";
      "required": false;
    };
    "oneDriveExtensions": {
      "alias": "oneDriveExtensions";
      "required": false;
    };
    "fileAccept": {
      "alias": "fileAccept";
      "required": false;
    };
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "imageOnly": {
      "alias": "imageOnly";
      "required": false;
    };
    "multiSelect": {
      "alias": "multiSelect";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "picked": "picked";
    "backdropPress": "backdropPress";
  }, never, never, false, never>;
}
export declare class NgcFilePickerModule {
  /**
   * @constructor
   * @param {Type<NgcIFileService>} fileService
   */
  static forChild(fileService: Type<NgcIFileService>): ModuleWithProviders<NgcFilePickerModule>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFilePickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcFilePickerModule, [typeof NgcGoogleDrivePickerDirective, typeof NgcDropboxPickerDirective, typeof NgcOneDrivePickerDirective, typeof NgcFilePickerComponent, typeof NgcFilePickerDirective], [typeof i18.RoundProgressModule, typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof CoreModule, typeof NgcIconModule, typeof NgcButtonModule, typeof NgcTruncateModule, typeof NgcTooltipModule], [typeof NgcGoogleDrivePickerDirective, typeof NgcDropboxPickerDirective, typeof NgcOneDrivePickerDirective, typeof NgcFilePickerComponent, typeof NgcFilePickerDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcFilePickerModule>;
}
export declare function openFile(file: NgcIFile): boolean;
export declare function openNewWindow(url: string): void;
export interface NgcICroppedEvent {
  image: string;
  blob: Blob;
}
export declare class NgcCropperComponent implements AfterViewInit {
  ngcPrefix: string;
  get styleWidth(): string;
  get styleHeight(): string;
  get classCircle(): boolean;
  cropperEle: ElementRef<HTMLImageElement>;
  image: string | Blob;
  options: Cropper.Options;
  circle: boolean;
  width: string;
  height: string;
  init: EventEmitter<NgcCropperComponent>;
  cropped: EventEmitter<NgcICroppedEvent>;
  private _image;
  private _cropper;
  private _defaultOptions;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @return {void}
   */
  crop(): void;
  /**
   * @param {Cropper.ViewMode} viewMode
   * @return {void}
   */
  setViewMode(viewMode: Cropper.ViewMode): void;
  /**
   * @param {Cropper.Options} options
   * @return {void}
   */
  private _initCropper;
  /**
   * @param {Blob} blob
   * @param {Function} callback
   * @return {void}
   */
  private _readImage;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCropperComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCropperComponent, "ngc-cropper", never, {
    "image": {
      "alias": "image";
      "required": false;
    };
    "options": {
      "alias": "options";
      "required": false;
    };
    "circle": {
      "alias": "circle";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
  }, {
    "init": "init";
    "cropped": "cropped";
  }, never, never, false, never>;
}
export declare class NgcCropperModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCropperModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCropperModule, [typeof NgcCropperComponent], [typeof CoreModule, typeof NgcButtonModule, typeof NgcMenuModule, typeof NgcTooltipModule], [typeof NgcCropperComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCropperModule>;
}
export type NgcIDialogPagerType = 'previous' | 'next';
export declare class NgcDialogContainerComponent extends BasePortalOutlet {
  viewContainerRef: ViewContainerRef;
  private _cdRef;
  portalOutlet: CdkPortalOutlet;
  isPreviousPagerDisplayed: boolean;
  isPreviousPagerDisabled: boolean;
  isNextPagerDisplayed: boolean;
  isNextPagerDisabled: boolean;
  isFreezing: boolean;
  isFullscreen: boolean;
  close: (data?: any) => void;
  freeze: () => void;
  unfreeze: () => void;
  fullscreen: () => void;
  exitFullscreen: () => void;
  pagerClick: (type: NgcIDialogPagerType) => void;
  /**
   * @constructor
   * @param {ViewContainerRef} viewContainerRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(viewContainerRef: ViewContainerRef, _cdRef: ChangeDetectorRef);
  /**
   * @param {ComponentPortal} portal
   * @return {ComponentRef}
   */
  attachComponentPortal(portal: ComponentPortal<any>): ComponentRef<any>;
  /**
   * @param {TemplatePortal} portal
   * @return {EmbeddedViewRef}
   */
  attachTemplatePortal(portal: TemplatePortal<any>): EmbeddedViewRef<any>;
  /**
   * @param {NgcIDialogPagerType} type
   * @return {void}
   */
  enablePager(type?: NgcIDialogPagerType): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @return {void}
   */
  disablePager(type?: NgcIDialogPagerType): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @return {void}
   */
  showPager(type?: NgcIDialogPagerType): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @return {void}
   */
  hidePager(type?: NgcIDialogPagerType): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDialogContainerComponent, "ngc-dialog-container", never, {}, {}, never, never, false, never>;
}
export declare const NGC_DIALOG_DATA: InjectionToken<any>;
export declare const NGC_DIALOG_REF: InjectionToken<NgcIDialogRef>;
export interface NgcIDialogRef {
  uniqKey: string;
  container: NgcDialogContainerComponent;
  config: NgcIDialogConfig;
  isFreezing: boolean;
  isFullscreen: boolean;
  close: (data?: any) => void;
  freeze: () => void;
  unfreeze: () => void;
  fullscreen: () => void;
  exitFullscreen: () => void;
  pagerClick: (type: NgcIDialogPagerType) => void;
  enablePager: (type?: NgcIDialogPagerType) => void;
  disablePager: (type?: NgcIDialogPagerType) => void;
  showPager: (type?: NgcIDialogPagerType) => void;
  hidePager: (type?: NgcIDialogPagerType) => void;
  afterOpened: () => Subject<ComponentType<any>>;
  afterClosed: () => Subject<any>;
  afterFreezed: () => Subject<void>;
  afterUnfreezed: () => Subject<void>;
  afterFullscreen: () => Subject<void>;
  afterExitFullscreen: () => Subject<void>;
  afterPagerClicked: () => Subject<NgcIDialogPagerType>;
  onBeforeClose?: (...args: any[]) => any;
  onBeforeAutoClose?: (...args: any[]) => any;
}
export interface NgcIDialogConfig {
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  uniqKey?: string;
  panelClass?: string;
  backdropClass?: string;
  hasBackdrop?: boolean;
  autoClose?: boolean;
  fullscreen?: boolean;
  pager?: boolean;
  viewContainerRef?: ViewContainerRef;
  data?: IObject;
}
export declare class NgcDialogService {
  private _overlay;
  private _injector;
  private _router;
  private _ngcToastService;
  opened$: Subject<ComponentType<any>>;
  closed$: Subject<any>;
  freezed$: Subject<void>;
  unfreezed$: Subject<void>;
  fullscreen$: Subject<void>;
  exitFullscreen$: Subject<void>;
  pagerClicked$: Subject<NgcIDialogPagerType>;
  private _defaultConfig;
  private _overlayRef;
  private _dialogRef;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {Injector} _injector
   * @param {Router} _router
   * @param {NgcToastService} _ngcToastService
   */
  constructor(_overlay: Overlay, _injector: Injector, _router: Router, _ngcToastService: NgcToastService);
  /**
   * @param {ComponentType} component
   * @param {NgcIDialogConfig} config
   * @return {NgcIDialogRef}
   */
  open(component: any, config?: NgcIDialogConfig): NgcIDialogRef;
  /**
   * @param {any} data
   * @param {string} uniqKey
   * @return {void}
   */
  close(data?: any, uniqKey?: string): void;
  /**
   * @param {string} uniqKey
   * @return {void}
   */
  freeze(uniqKey?: string): void;
  /**
   * @param {string} uniqKey
   * @return {void}
   */
  unfreeze(uniqKey?: string): void;
  /**
   * @param {string} uniqKey
   * @return {void}
   */
  fullscreen(uniqKey?: string): void;
  /**
   * @param {string} uniqKey
   * @return {void}
   */
  exitFullscreen(uniqKey?: string): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @param {string} uniqKey
   * @return {void}
   */
  pagerClick(type: NgcIDialogPagerType, uniqKey?: string): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @param {string} uniqKey
   * @return {void}
   */
  enablePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @param {string} uniqKey
   * @return {void}
   */
  disablePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @param {string} uniqKey
   * @return {void}
   */
  showPager(type?: NgcIDialogPagerType, uniqKey?: string): void;
  /**
   * @param {NgcIDialogPagerType} type
   * @param {string} uniqKey
   * @return {void}
   */
  hidePager(type?: NgcIDialogPagerType, uniqKey?: string): void;
  /**
   * @return {void}
   */
  closeAll(): void;
  /**
   * @param {NgcIDialogConfig} config
   * @param {string} uniqKey
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @param {IObject} data
   * @param {NgcIDialogRef} dialogRef
   * @return {Injector}
   */
  private _createInjector;
  /**
   * @param {NgcIDialogConfig} config
   * @param {string} uniqKey
   * @return {NgcIDialogRef}
   */
  private _createDialogRef;
  /**
   * @param {string} uniqKey
   * @return {OverlayRef}
   */
  private _getOverlayRef;
  /**
   * @param {string} uniqKey
   * @return {NgcIDialogRef}
   */
  private _getDialogRef;
  /**
   * @param {string} uniqKey
   * @return {void}
   */
  private _autoClose;
  /**
   * @param {NgcIDialogRef} dialogRef
   * @return {void}
   */
  private _markAllSubjectsAsComplete;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class NgcDialogHeaderDirective {
  divider: boolean;
  boxShadow: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogHeaderDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDialogHeaderDirective, "[ngcDialogHeader]", ["ngcDialogHeader"], {
    "divider": {
      "alias": "divider";
      "required": false;
    };
    "boxShadow": {
      "alias": "boxShadow";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcDialogContentDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogContentDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDialogContentDirective, "[ngcDialogContent]", ["ngcDialogContent"], {}, {}, never, never, false, never>;
}
export declare class NgcDialogFooterDirective {
  divider: boolean;
  boxShadow: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogFooterDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDialogFooterDirective, "[ngcDialogFooter]", ["ngcDialogFooter"], {
    "divider": {
      "alias": "divider";
      "required": false;
    };
    "boxShadow": {
      "alias": "boxShadow";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcDialogModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDialogModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDialogModule, [typeof NgcDialogContainerComponent, typeof NgcDialogHeaderDirective, typeof NgcDialogContentDirective, typeof NgcDialogFooterDirective], [typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof CoreModule, typeof NgcButtonModule, typeof NgcTooltipModule], [typeof NgcDialogContainerComponent, typeof NgcDialogHeaderDirective, typeof NgcDialogContentDirective, typeof NgcDialogFooterDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDialogModule>;
}
export declare class NgcToastGroupComponent {
  toasts: IObject[];
  createToast(title: string, description?: string, config?: NgcIToastConfig): number;
  deleteToast(id: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastGroupComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcToastGroupComponent, "ngc-toast-group", never, {}, {}, never, never, false, never>;
}
export declare class NgcToastModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcToastModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcToastModule, [typeof NgcToastComponent, typeof NgcToastGroupComponent], [typeof CoreModule, typeof i45.CommonModule, typeof NgcIconModule, typeof NgcAlertModule], [typeof NgcToastComponent, typeof NgcToastGroupComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcToastModule>;
}
export interface NgcIAvatarPickedEvent {
  text?: string;
  avatar?: NgcIAvatar;
  file?: Blob;
  response?: NgcIUploadedFile;
}
export declare class NgcAvatarPickerComponent {
  private _fileService;
  private _ngcDialogService;
  private _ngcToastService;
  label: string;
  text: string;
  photo: string;
  color: string;
  icon: string;
  mode: NgcIAvatarMode;
  scrolling$: Subject<any>;
  picked: EventEmitter<NgcIAvatarPickedEvent>;
  isCropping: boolean;
  croppedImage: string;
  defaultIcon: string;
  selectedFile: Blob;
  cropper: NgcCropperComponent;
  dialogRef: NgcIDialogRef;
  /**
   * @constructor
   * @param {NgcIFileService} _fileService
   * @param {NgcDialogService} _ngcDialogService
   * @param {NgcToastService} _ngcToastService
   */
  constructor(_fileService: NgcIFileService, _ngcDialogService: NgcDialogService, _ngcToastService: NgcToastService);
  /**
   * @return {void}
   */
  refresh(): void;
  /**
   * @return {void}
   */
  pick(): void;
  /**
   * @return {void}
   */
  cropImage(): void;
  /**
   * @return {void}
   */
  pickImage(): void;
  /**
   * @param {TemplateRef} dialog
   * @return {void}
   */
  openDialog(dialog: TemplateRef<any>): void;
  /**
   * @param {Blob} file
   * @return {void}
   */
  onFileSelected(file: Blob): void;
  /**
   * @param {NgcICroppedEvent} event
   * @return {void}
   */
  onCropped(event: NgcICroppedEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarPickerComponent, [{
    optional: true;
  }, null, null]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcAvatarPickerComponent, "ngc-avatar-picker", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "text": {
      "alias": "text";
      "required": false;
    };
    "photo": {
      "alias": "photo";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
  }, {
    "picked": "picked";
  }, never, never, false, never>;
}
export declare class NgcAvatarPickerModule {
  /**
   * @constructor
   * @param {Type<NgcIFileService>} fileService
   */
  static forChild(fileService: Type<NgcIFileService>): ModuleWithProviders<NgcAvatarPickerModule>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAvatarPickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcAvatarPickerModule, [typeof NgcAvatarPickerComponent], [typeof CoreModule, typeof NgcAvatarModule, typeof NgcButtonModule, typeof NgcColorPickerModule, typeof NgcCropperModule, typeof NgcDialogModule, typeof NgcEmojiPickerModule, typeof NgcIconModule, typeof NgcMenuModule, typeof NgcRadioModule, typeof NgcToastModule, typeof NgcTooltipModule, typeof NgcTruncateModule], [typeof NgcAvatarPickerComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcAvatarPickerModule>;
}
export type WGCIBadgePositionMode = 'default' | 'inline' | 'absolute';
export declare class NgcBadgeComponent implements AfterViewInit, OnChanges {
  private _elementRef;
  private _contrastPipe;
  get styleColor(): string;
  get styleTextColor(): string;
  get classPosInline(): boolean;
  get classPosAbsolute(): boolean;
  get styleBorderColor(): string;
  count: string;
  color: string;
  background: string;
  textColor: string;
  positionMode: WGCIBadgePositionMode;
  wgcBadge: string;
  private _bkTextColor;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBadgeComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcBadgeComponent, "ngc-badge, [ngcBadge]", never, {
    "count": {
      "alias": "count";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "background": {
      "alias": "background";
      "required": false;
    };
    "textColor": {
      "alias": "textColor";
      "required": false;
    };
    "positionMode": {
      "alias": "positionMode";
      "required": false;
    };
    "wgcBadge": {
      "alias": "wgcBadge";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcBadgeModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBadgeModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcBadgeModule, [typeof NgcBadgeComponent], [typeof CoreModule], [typeof NgcBadgeComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcBadgeModule>;
}
export declare class NgcBreadcrumbItemComponent {
  private _router;
  templateRef: TemplateRef<any>;
  commands: any[];
  extras: NavigationExtras;
  disabled: boolean;
  truncate: boolean;
  truncateLimitLine: number;
  navigated: EventEmitter<void>;
  get isActive(): boolean;
  /**
   * @constructor
   * @param {Router} _router
   */
  constructor(_router: Router);
  /**
   * @return {void}
   */
  navigate(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBreadcrumbItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcBreadcrumbItemComponent, "ngc-breadcrumb-item", never, {
    "commands": {
      "alias": "commands";
      "required": false;
    };
    "extras": {
      "alias": "extras";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "truncate": {
      "alias": "truncate";
      "required": false;
    };
    "truncateLimitLine": {
      "alias": "truncateLimitLine";
      "required": false;
    };
  }, {
    "navigated": "navigated";
  }, never, ["*"], false, never>;
}
export declare class NgcBreadcrumbComponent {
  breadcrumbItems: QueryList<NgcBreadcrumbItemComponent>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBreadcrumbComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcBreadcrumbComponent, "ngc-breadcrumb", never, {}, {}, ["breadcrumbItems"], never, false, never>;
}
export declare class NgcBreadcrumbModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcBreadcrumbModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcBreadcrumbModule, [typeof NgcBreadcrumbItemComponent, typeof NgcBreadcrumbComponent], [typeof i45.CommonModule, typeof NgcTruncateModule, typeof NgcIconModule], [typeof NgcBreadcrumbItemComponent, typeof NgcBreadcrumbComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcBreadcrumbModule>;
}
export declare class NgcButtonToggleItemComponent {
  elementRef: ElementRef;
  get classActive(): boolean;
  get classDisabled(): boolean;
  get classOnlyIcon(): boolean;
  icon: string;
  iconSize: string;
  label: string;
  activeState: boolean;
  disabled: boolean;
  onlyIcon: boolean;
  clicked$: Subject<Event>;
  isActive: boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  triggerClick(event: Event): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonToggleItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonToggleItemComponent, "ngc-button-toggle-item", never, {
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "iconSize": {
      "alias": "iconSize";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "activeState": {
      "alias": "activeState";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "onlyIcon": {
      "alias": "onlyIcon";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export type NgcIButtonToggleTheme = 'default' | 'background';
export declare class NgcButtonToggleComponent implements AfterContentInit, OnChanges {
  get classStretch(): boolean;
  get classReverse(): boolean;
  get classHasBorder(): boolean;
  get classHasShadow(): boolean;
  get classThemeBackground(): boolean;
  buttonToggleItems: QueryList<NgcButtonToggleItemComponent>;
  selectedIndex: number;
  stretch: boolean;
  reverse: boolean;
  hasBorder: boolean;
  hasShadow: boolean;
  theme: NgcIButtonToggleTheme;
  selectedIndexChange: EventEmitter<number>;
  changed: EventEmitter<NgcButtonToggleItemComponent>;
  items: NgcButtonToggleItemComponent[];
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {number} index
   * @param {boolean} markAsDirty
   * @return {void}
   */
  select(index: number, markAsDirty?: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonToggleComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcButtonToggleComponent, "ngc-button-toggle", never, {
    "selectedIndex": {
      "alias": "selectedIndex";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "reverse": {
      "alias": "reverse";
      "required": false;
    };
    "hasBorder": {
      "alias": "hasBorder";
      "required": false;
    };
    "hasShadow": {
      "alias": "hasShadow";
      "required": false;
    };
    "theme": {
      "alias": "theme";
      "required": false;
    };
  }, {
    "selectedIndexChange": "selectedIndexChange";
    "changed": "changed";
  }, ["buttonToggleItems"], ["*"], false, never>;
}
export declare class NgcButtonToggleModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcButtonToggleModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcButtonToggleModule, [typeof NgcButtonToggleComponent, typeof NgcButtonToggleItemComponent], [typeof CoreModule, typeof NgcIconModule], [typeof NgcButtonToggleComponent, typeof NgcButtonToggleItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcButtonToggleModule>;
}
export type NgcICalendarView = 'day' | 'week' | 'month';
export type NgcICalendarWeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export interface NgcICalendarPeriod {
  startDate: Moment;
  endDate: Moment;
}
export interface NgcICalendarEvent {
  id: number;
  name: string;
  moment: Moment;
  isEditing?: boolean;
  actionable?: boolean;
  inactive?: boolean;
  deletable?: boolean;
  color?: string;
  data?: any;
}
export interface NgcICalendarEventChange {
  id: number;
  name: string;
}
export interface NgcICalendarEventCreate {
  name: string;
  moment: Moment;
  color?: string;
}
export interface NgcICalendarEventBlock {
  showCurrentTime: boolean;
  seeMore: boolean;
  isAdding: boolean;
  index: string;
  moment: Moment;
  events: NgcICalendarEvent[];
}
export declare abstract class NgcCalendarViewBaseComponent implements OnChanges {
  protected cdRef: ChangeDetectorRef;
  protected translateService: TranslateService;
  protected indexBy: 'H' | 'DDHH' | 'DDD';
  activeState: boolean;
  creatable: boolean;
  displayHighlight: boolean;
  name: string;
  placeholder: string;
  events: NgcICalendarEvent[];
  selectedEventID: number;
  viewDate: Moment;
  eventTemplate: TemplateRef<any>;
  actionMenu: TemplateRef<any>;
  nameFormControl: UntypedFormControl;
  selectedEventIDChange: EventEmitter<number>;
  periodChange: EventEmitter<NgcICalendarPeriod>;
  eventChange: EventEmitter<NgcICalendarEventChange>;
  eventCreate: EventEmitter<NgcICalendarEventCreate>;
  currentTime: Moment;
  eventBlocks: NgcICalendarEventBlock[];
  newEvent: NgcICalendarEventCreate;
  protected startDate: Moment;
  protected endDate: Moment;
  /**
   * @constructor
   * @param {ChangeDetectorRef} cdRef
   * @param {TranslateService} translateService
   * @param {string} indexBy
   */
  constructor(cdRef: ChangeDetectorRef, translateService: TranslateService, indexBy: 'H' | 'DDHH' | 'DDD');
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {NgcICalendarEvent} event
   * @return {void}
   */
  selectEvent(event: NgcICalendarEvent): void;
  /**
   * @param {NgcICalendarEvent} event
   * @param {string} name
   * @return {void}
   */
  updateEvent(event: NgcICalendarEvent, name: string): void;
  /**
   * @param {NgcICalendarEventBlock} eventBlock
   * @return {void}
   */
  createEvent(eventBlock: NgcICalendarEventBlock): void;
  /**
   * @param {NgcICalendarEventBlock} eventBlock
   * @return {void}
   */
  addingNewEvent(eventBlock: NgcICalendarEventBlock): void;
  /**
   * @param {NgcICalendarEventBlock} eventBlock
   * @return {void}
   */
  cancelAddNewEvent(eventBlock: NgcICalendarEventBlock): void;
  /**
   * @param {NgcICalendarEvent} event
   * @param {Moment} newMoment
   * @return {void}
   */
  updateEventMoment(event: NgcICalendarEvent, newMoment: Moment): void;
  /**
   * @return {void}
   */
  markForCheck(): void;
  /**
   * @return {void}
   */
  private _refreshNewEventInput;
  /**
   * @return {void}
   */
  protected abstract generatePeriod(): any;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarViewBaseComponent, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcCalendarViewBaseComponent, never, never, {
    "activeState": {
      "alias": "activeState";
      "required": false;
    };
    "creatable": {
      "alias": "creatable";
      "required": false;
    };
    "displayHighlight": {
      "alias": "displayHighlight";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "events": {
      "alias": "events";
      "required": false;
    };
    "selectedEventID": {
      "alias": "selectedEventID";
      "required": false;
    };
    "viewDate": {
      "alias": "viewDate";
      "required": false;
    };
    "eventTemplate": {
      "alias": "eventTemplate";
      "required": false;
    };
    "actionMenu": {
      "alias": "actionMenu";
      "required": false;
    };
    "nameFormControl": {
      "alias": "nameFormControl";
      "required": false;
    };
  }, {
    "selectedEventIDChange": "selectedEventIDChange";
    "periodChange": "periodChange";
    "eventChange": "eventChange";
    "eventCreate": "eventCreate";
  }, never, never, true, never>;
}
export declare class NgcCalendarDayViewComponent extends NgcCalendarViewBaseComponent {
  protected cdRef: ChangeDetectorRef;
  protected translateService: TranslateService;
  maxEventPerHour: number;
  /**
   * @constructor
   * @param {ChangeDetectorRef} cdRef
   * @param {TranslateService} translateService
   */
  constructor(cdRef: ChangeDetectorRef, translateService: TranslateService);
  /**
   * @return {void}
   */
  protected generatePeriod(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarDayViewComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarDayViewComponent, "ngc-calendar-day-view", never, {
    "maxEventPerHour": {
      "alias": "maxEventPerHour";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcCalendarMonthViewComponent extends NgcCalendarViewBaseComponent {
  private _dateTimeConfig;
  protected cdRef: ChangeDetectorRef;
  protected translateService: TranslateService;
  firstWeekDay: NgcICalendarWeekDay;
  /**
   * @constructor
   * @param {DateTimeConfig} _dateTimeConfig
   * @param {ChangeDetectorRef} cdRef
   * @param {TranslateService} translateService
   */
  constructor(_dateTimeConfig: DateTimeConfig, cdRef: ChangeDetectorRef, translateService: TranslateService);
  /**
   * @return {void}
   */
  protected generatePeriod(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarMonthViewComponent, [{
    optional: true;
  }, null, null]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarMonthViewComponent, "ngc-calendar-month-view", never, {
    "firstWeekDay": {
      "alias": "firstWeekDay";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcCalendarWeekViewComponent extends NgcCalendarViewBaseComponent {
  private _dateTimeConfig;
  protected cdRef: ChangeDetectorRef;
  protected translateService: TranslateService;
  firstWeekDay: NgcICalendarWeekDay;
  hourBlocks: {
    showCurrentTime: boolean;
    moment: Moment;
  }[];
  /**
   * @constructor
   * @param {DateTimeConfig} _dateTimeConfig
   * @param {ChangeDetectorRef} cdRef
   * @param {TranslateService} translateService
   */
  constructor(_dateTimeConfig: DateTimeConfig, cdRef: ChangeDetectorRef, translateService: TranslateService);
  /**
   * @return {void}
   */
  protected generatePeriod(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarWeekViewComponent, [{
    optional: true;
  }, null, null]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarWeekViewComponent, "ngc-calendar-week-view", never, {
    "firstWeekDay": {
      "alias": "firstWeekDay";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcCalendarComponent implements OnChanges {
  get classStretch(): boolean;
  calendarView: NgcCalendarViewBaseComponent;
  stretch: boolean;
  activeState: boolean;
  creatable: boolean;
  displayHighlight: boolean;
  maxEventPerHour: number;
  selectedEventID: number;
  events: NgcICalendarEvent[];
  firstWeekDay: NgcICalendarWeekDay;
  name: string;
  placeholder: string;
  view: NgcICalendarView;
  eventTemplate: TemplateRef<any>;
  actionMenu: TemplateRef<any>;
  nameFormControl: UntypedFormControl;
  selectedEventIDChange: EventEmitter<number>;
  periodChange: EventEmitter<NgcICalendarPeriod>;
  eventChange: EventEmitter<NgcICalendarEventChange>;
  eventCreate: EventEmitter<NgcICalendarEventCreate>;
  selectedIndex: number;
  viewDate: Moment;
  startDate: Moment;
  endDate: Moment;
  /**
   * @contructor
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {Moment} viewDate
   * @param {number} add
   * @return {void}
   */
  changeViewDate(viewDate?: Moment, add?: number): void;
  /**
   * @param {string} view
   * @return {void}
   */
  changeView(view: NgcICalendarView): void;
  /**
   * @param {NgcICalendarPeriod} event
   * @return {void}
   */
  changePeriod(event: NgcICalendarPeriod): void;
  /**
   * @param {NgcICalendarEvent} event
   * @param {Moment} newMoment
   * @return {void}
   */
  updateEventMoment(event: NgcICalendarEvent, newMoment: Moment): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCalendarComponent, "ngc-calendar", never, {
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "activeState": {
      "alias": "activeState";
      "required": false;
    };
    "creatable": {
      "alias": "creatable";
      "required": false;
    };
    "displayHighlight": {
      "alias": "displayHighlight";
      "required": false;
    };
    "maxEventPerHour": {
      "alias": "maxEventPerHour";
      "required": false;
    };
    "selectedEventID": {
      "alias": "selectedEventID";
      "required": false;
    };
    "events": {
      "alias": "events";
      "required": false;
    };
    "firstWeekDay": {
      "alias": "firstWeekDay";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "view": {
      "alias": "view";
      "required": false;
    };
    "eventTemplate": {
      "alias": "eventTemplate";
      "required": false;
    };
    "actionMenu": {
      "alias": "actionMenu";
      "required": false;
    };
    "nameFormControl": {
      "alias": "nameFormControl";
      "required": false;
    };
  }, {
    "selectedEventIDChange": "selectedEventIDChange";
    "periodChange": "periodChange";
    "eventChange": "eventChange";
    "eventCreate": "eventCreate";
  }, never, never, false, never>;
}
interface NgcIDateInMonth {
  year: number;
  month: number;
  date: number;
  picked?: boolean;
  disabled?: boolean;
  today?: boolean;
  inRange?: boolean;
}
export type NgcIDatePickerMode = 'default' | 'inline';
export type NgcIDatePickerPosition = 'above' | 'below';
export interface NgcIDatePickerPickedEvent {
  range?: Moment[];
  date?: Moment;
  showTime?: boolean;
}
export declare class NgcDatePickerComponent implements AfterViewInit, OnChanges {
  private _cdRef;
  private _dateTimeConfig;
  get classInline(): boolean;
  pickedDate: Moment | Moment[];
  maxDateRange: string;
  dateRange: boolean;
  dateOnly: boolean;
  showTime: boolean;
  clearable: boolean;
  mode: NgcIDatePickerMode;
  picked: EventEmitter<NgcIDatePickerPickedEvent>;
  close: (event?: Event) => void;
  onPicked: (event: NgcIDatePickerPickedEvent) => void;
  tempMinDate: Moment;
  tempMaxDate: Moment;
  currentMoment: Moment;
  currentMonth: number;
  currentYear: number;
  displayingMoment: Moment;
  displayingYear: number;
  displayingMonth: number;
  dateInMonth: NgcIDateInMonth[];
  yearRange: number[];
  months: string[];
  times: Moment[];
  private _minDate;
  private _maxDate;
  private _timeFormat;
  private _weekStart;
  get minDate(): Moment;
  set minDate(value: Moment);
  get maxDate(): Moment;
  set maxDate(value: Moment);
  get timeFormat(): TimeFormat;
  set timeFormat(value: TimeFormat);
  get weekStart(): WeekStart;
  set weekStart(value: WeekStart);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {DateTimeConfig} _dateTimeConfig
   */
  constructor(_cdRef: ChangeDetectorRef, _dateTimeConfig: DateTimeConfig);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @return {void}
   */
  markAsPickedDateChanges(): void;
  /**
   * @param {WeekStart} weekStart
   * @return {string[]}
   */
  getWeekdays(weekStart: WeekStart): string[];
  /**
   * @return {void}
   */
  displayPreviousMonth(): void;
  /**
   * @return {void}
   */
  displayNextMonth(): void;
  /**
   * @param {number} year
   * @param {number} month
   * @return {void}
   */
  displayMonth(year?: number, month?: number): void;
  /**
   * @param {number} year
   * @param {number} month
   * @param {number} date
   * @return {void}
   */
  pickDate(year: number, month: number, date: number): void;
  /**
   * @param {number} hour
   * @param {number} minute
   * @return {void}
   */
  setTime(hour?: number, minute?: number): void;
  /**
   * @return {void}
   */
  clear(): void;
  /**
   * @return {void}
   */
  private _done;
  /**
   * @return {void}
   */
  private _initCalendar;
  /**
   * @return {void}
   */
  private _updateCalendar;
  /**
   * @param {NgcIDateInMonth} dateInMonth
   * @return {NgcIDateInMonthState}
   */
  private _getDateStates;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDatePickerComponent, [null, {
    optional: true;
  }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDatePickerComponent, "ngc-date-picker", never, {
    "pickedDate": {
      "alias": "pickedDate";
      "required": false;
    };
    "maxDateRange": {
      "alias": "maxDateRange";
      "required": false;
    };
    "dateRange": {
      "alias": "dateRange";
      "required": false;
    };
    "dateOnly": {
      "alias": "dateOnly";
      "required": false;
    };
    "showTime": {
      "alias": "showTime";
      "required": false;
    };
    "clearable": {
      "alias": "clearable";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "minDate": {
      "alias": "minDate";
      "required": false;
    };
    "maxDate": {
      "alias": "maxDate";
      "required": false;
    };
    "timeFormat": {
      "alias": "timeFormat";
      "required": false;
    };
    "weekStart": {
      "alias": "weekStart";
      "required": false;
    };
  }, {
    "picked": "picked";
  }, never, never, false, never>;
}
export declare class NgcDatePickerDirective implements OnDestroy, OnChanges {
  private _overlay;
  private _elementRef;
  private _cdRef;
  private _vcRef;
  panelClass: string | string[];
  backdropClass: string | string[];
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  maxDateRange: string;
  dateRange: boolean;
  dateOnly: boolean;
  showTime: boolean;
  disabled: boolean;
  clearable: boolean;
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  offsetX: number;
  offsetY: number;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  direction: Direction;
  position: NgcIDatePickerPosition;
  pickedDate: Moment | Moment[];
  minDate: Moment;
  maxDate: Moment;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  picked: EventEmitter<NgcIDatePickerPickedEvent>;
  backdropPress: EventEmitter<MouseEvent>;
  isOpened: boolean;
  private _isPositionStrategyUpdated;
  private _instance;
  private _portal;
  private _overlayRef;
  private _resizeObserver;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdRef: ChangeDetectorRef, _vcRef: ViewContainerRef);
  triggerClick(event: Event): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {NgcIDatePickerPickedEvent} event
   * @return {void}
   */
  onDatePicked(event: NgcIDatePickerPickedEvent): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDatePickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDatePickerDirective, "[ngcDatePicker]", ["ngcDatePicker"], {
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "maxDateRange": {
      "alias": "maxDateRange";
      "required": false;
    };
    "dateRange": {
      "alias": "dateRange";
      "required": false;
    };
    "dateOnly": {
      "alias": "dateOnly";
      "required": false;
    };
    "showTime": {
      "alias": "showTime";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "clearable": {
      "alias": "clearable";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "pickedDate": {
      "alias": "pickedDate";
      "required": false;
    };
    "minDate": {
      "alias": "minDate";
      "required": false;
    };
    "maxDate": {
      "alias": "maxDate";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "picked": "picked";
    "backdropPress": "backdropPress";
  }, never, never, false, never>;
}
export declare class NgcSwitchComponent implements OnInit {
  label: string;
  color: string;
  labelColor: string;
  ngModel: boolean;
  disabled: boolean;
  readonly: boolean;
  ngModelChange: EventEmitter<boolean>;
  constructor();
  triggerClick(event: MouseEvent): void;
  triggerKeyDownSpace(event: Event): void;
  ngOnInit(): void;
  toggle(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSwitchComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcSwitchComponent, "ngc-switch", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "labelColor": {
      "alias": "labelColor";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
  }, never, ["*"], false, never>;
}
export declare class NgcSwitchModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSwitchModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcSwitchModule, [typeof NgcSwitchComponent], [typeof i45.CommonModule, typeof i1.FormsModule], [typeof NgcSwitchComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcSwitchModule>;
}
export type NgcIFormFieldAlignment = 'left' | 'right' | 'center';
export type NgcIFormFieldConvertType = 'time-string' | 'hour-string';
export interface NgcIFormFieldConvertedEvent {
  hour?: number;
  min?: number;
  sec?: number;
  totalMins: number;
  totalSeconds: number;
  totalMiliseconds: number;
  type: NgcIFormFieldConvertType;
}
export declare class NgcFormFieldInputDirective extends DefaultValueAccessor implements OnChanges, AfterViewInit {
  protected renderer: Renderer2;
  protected elementRef: ElementRef;
  private _dateTimeConfig;
  get attrDisabled(): boolean;
  get attrReadonly(): boolean;
  get attrRequired(): boolean;
  get attr(): string;
  ngModel: any;
  name: string;
  type: string;
  textSize: string;
  min: number;
  max: number;
  trim: boolean;
  disableControl: boolean;
  disabled: boolean;
  required: boolean;
  focusing: boolean;
  readonly: boolean;
  clearable: boolean;
  saveable: boolean;
  cancelable: boolean;
  formControl: FormControl;
  alignment: NgcIFormFieldAlignment;
  convertType: NgcIFormFieldConvertType;
  ngModelChange: EventEmitter<any>;
  changed: EventEmitter<any>;
  saved: EventEmitter<any>;
  cancelled: EventEmitter<any>;
  cleared: EventEmitter<any>;
  pasted: EventEmitter<ClipboardEvent>;
  converted: EventEmitter<NgcIFormFieldConvertedEvent>;
  isDisabledFromFormField: boolean;
  changes$: Subject<any>;
  focus$: Subject<boolean>;
  private _bkValue;
  private _timeFormat;
  get timeFormat(): TimeFormat;
  set timeFormat(value: TimeFormat);
  get value(): any;
  set value(value: any);
  get isTextarea(): boolean;
  get isNumberInput(): boolean;
  get hasValue(): boolean;
  /**
   * @constructor
   * @param {Renderer2} renderer
   * @param {ElementRef} elementRef
   * @param {DateTimeConfig} _dateTimeConfig
   */
  constructor(renderer: Renderer2, elementRef: ElementRef, _dateTimeConfig: DateTimeConfig);
  triggerFocus(event: Event): void;
  triggerBlur(value: string): void;
  triggerInput(): void;
  triggerKeyDownEnter(event: KeyboardEvent): void;
  triggerKeyDownEsc(event: KeyboardEvent): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @constructor
   * @param {any} value
   */
  onChanged(value: any): void;
  /**
   * @constructor
   * @param {any} value
   */
  writeValue(value: any): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  focus(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  blur(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  save(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  cancel(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  clear(event?: Event): void;
  /**
   * @param {any} value
   * @return {boolean}
   */
  private _checkValidValue;
  /**
   * @param {any} value
   * @return {any}
   */
  private _trim;
  /**
   * @param {any} value
   * @return {any}
   */
  private _serialize;
  /**
   * @return {void}
   */
  private _convertTimeString;
  /**
   * @return {void}
   */
  private _convertHourString;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldInputDirective, [null, null, {
    optional: true;
  }]>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldInputDirective, "[ngcFormFieldInput]", ["ngcFormFieldInput"], {
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
    "textSize": {
      "alias": "textSize";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "trim": {
      "alias": "trim";
      "required": false;
    };
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "clearable": {
      "alias": "clearable";
      "required": false;
    };
    "saveable": {
      "alias": "saveable";
      "required": false;
    };
    "cancelable": {
      "alias": "cancelable";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
    "alignment": {
      "alias": "alignment";
      "required": false;
    };
    "convertType": {
      "alias": "convertType";
      "required": false;
    };
    "timeFormat": {
      "alias": "timeFormat";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
    "changed": "changed";
    "saved": "saved";
    "cancelled": "cancelled";
    "cleared": "cleared";
    "pasted": "pasted";
    "converted": "converted";
  }, never, never, false, never>;
}
export declare class NgcFormFieldErrorDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldErrorDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldErrorDirective, "[ngcFormFieldError]", ["ngcFormFieldError"], {}, {}, never, never, false, never>;
}
export type NgcIFormFieldAppearance = 'default' | 'standard' | 'legacy';
export type NgcIFormFieldErrorDisplayMode = 'default' | 'inline';
export declare class NgcFormFieldComponent implements AfterContentInit, OnChanges {
  private _cdRef;
  private _translateService;
  get styleInputTextAlign(): string;
  get styleInputTextSize(): string;
  get classCustomError(): boolean;
  get classValid(): boolean;
  get classInvalid(): boolean;
  get classDirty(): boolean;
  get classPristine(): boolean;
  get classTouched(): boolean;
  get classUntouched(): boolean;
  get classEnabled(): boolean;
  get classDisabled(): boolean;
  get classReadonly(): boolean;
  get classFocusing(): boolean;
  get classTextarea(): boolean;
  get classEmpty(): boolean;
  get classStandard(): boolean;
  get classLegacy(): boolean;
  control: FormControlDirective;
  formFieldInput: NgcFormFieldInputDirective;
  formFieldError: NgcFormFieldErrorDirective;
  label: string;
  dotColor: string;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  focusing: boolean;
  fakeInput: boolean;
  multiErrors: boolean;
  displayColorDot: boolean;
  togglePasswordVisibility: boolean;
  checkWeekPassword: boolean;
  appearance: NgcIFormFieldAppearance;
  errorDisplayMode: NgcIFormFieldErrorDisplayMode;
  dotColorChange: EventEmitter<string>;
  unhidePassword: boolean;
  passwordHighlight: IObject<{
    color: string;
    message: string;
  }>;
  passwordRule: {
    minlength: boolean;
    numberOrSymbol: boolean;
    uppercase: boolean;
    lowercase: boolean;
    percent: number;
  };
  get canAction(): boolean;
  get canClear(): boolean;
  get canSave(): boolean;
  get canCancel(): boolean;
  get canCheckWeekPassword(): boolean;
  get fieldName(): string;
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {TranslateService} _translateService
   */
  constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @return {void}
   */
  togglePassword(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcFormFieldComponent, "ngc-form-field", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "dotColor": {
      "alias": "dotColor";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
    "fakeInput": {
      "alias": "fakeInput";
      "required": false;
    };
    "multiErrors": {
      "alias": "multiErrors";
      "required": false;
    };
    "displayColorDot": {
      "alias": "displayColorDot";
      "required": false;
    };
    "togglePasswordVisibility": {
      "alias": "togglePasswordVisibility";
      "required": false;
    };
    "checkWeekPassword": {
      "alias": "checkWeekPassword";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "errorDisplayMode": {
      "alias": "errorDisplayMode";
      "required": false;
    };
  }, {
    "dotColorChange": "dotColorChange";
  }, ["control", "formFieldInput", "formFieldError"], ["*", "[ngcFormFieldLabel]", "[ngcFormFieldPrefix]", "[ngcFormFieldSuffix]", "[ngcFormFieldDescription]", "[ngcFormFieldHint]", "[ngcFormFieldError]"], false, never>;
}
export declare class NgcFormFieldLabelDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldLabelDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldLabelDirective, "[ngcFormFieldLabel]", ["ngcFormFieldLabel"], {}, {}, never, never, false, never>;
}
export declare class NgcFormFieldHintDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldHintDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldHintDirective, "[ngcFormFieldHint]", ["ngcFormFieldHint"], {}, {}, never, never, false, never>;
}
export declare class NgcFormFieldPrefixDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldPrefixDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldPrefixDirective, "[wgcFormFieldPrefix]", ["wgcFormFieldPrefix"], {}, {}, never, never, false, never>;
}
export declare class NgcFormFieldSuffixDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldSuffixDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldSuffixDirective, "[wgcFormFieldSuffix]", ["wgcFormFieldSuffix"], {}, {}, never, never, false, never>;
}
export declare class NgcFormFieldDescriptionDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldDescriptionDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcFormFieldDescriptionDirective, "[ngcFormFieldDescription]", ["ngcFormFieldDescription"], {}, {}, never, never, false, never>;
}
export declare class NgcFormFieldModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcFormFieldModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcFormFieldModule, [typeof NgcFormFieldComponent, typeof NgcFormFieldErrorDirective, typeof NgcFormFieldInputDirective, typeof NgcFormFieldLabelDirective, typeof NgcFormFieldHintDirective, typeof NgcFormFieldPrefixDirective, typeof NgcFormFieldSuffixDirective, typeof NgcFormFieldDescriptionDirective], [typeof FormModule, typeof CoreModule, typeof NgcButtonModule, typeof NgcIconModule, typeof NgcColorPickerModule, typeof NgcTooltipModule, typeof NgcTruncateModule], [typeof NgcFormFieldComponent, typeof NgcFormFieldErrorDirective, typeof NgcFormFieldInputDirective, typeof NgcFormFieldLabelDirective, typeof NgcFormFieldHintDirective, typeof NgcFormFieldPrefixDirective, typeof NgcFormFieldSuffixDirective, typeof NgcFormFieldDescriptionDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcFormFieldModule>;
}
export declare class NgcDatePickerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDatePickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDatePickerModule, [typeof NgcDatePickerComponent, typeof NgcDatePickerDirective], [typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof CoreModule, typeof NgcButtonModule, typeof NgcIconModule, typeof NgcSwitchModule, typeof NgcMenuModule, typeof NgcFormFieldModule, typeof NgcTooltipModule], [typeof NgcDatePickerComponent, typeof NgcDatePickerDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDatePickerModule>;
}
export declare class NgcCalendarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCalendarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCalendarModule, [typeof NgcCalendarDayViewComponent, typeof NgcCalendarWeekViewComponent, typeof NgcCalendarMonthViewComponent, typeof NgcCalendarComponent], [typeof CoreModule, typeof FormModule, typeof NgcButtonModule, typeof NgcIconModule, typeof NgcTruncateModule, typeof NgcTooltipModule, typeof NgcDatePickerModule, typeof NgcScrollBarModule, typeof NgcButtonToggleModule], [typeof NgcCalendarDayViewComponent, typeof NgcCalendarWeekViewComponent, typeof NgcCalendarMonthViewComponent, typeof NgcCalendarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCalendarModule>;
}
export declare class NgcCardComponent {
  get styleColor(): string;
  get styleBorderWidth(): string;
  get styleBorderColor(): string;
  get styleBorderStyle(): string;
  get styleBorderRadius(): string;
  get styleActiveColor(): string;
  get styleActiveBorderWidth(): string;
  get styleActiveBorderColor(): string;
  get styleActiveBorderStyle(): string;
  get styleActiveBorderRadius(): string;
  get stylePaddingTop(): string;
  get stylePaddingBottom(): string;
  get stylePaddingLeft(): string;
  get stylePaddingRight(): string;
  get classActive(): boolean;
  color: string;
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  activeColor: string;
  activeBorderWidth: string;
  activeBorderColor: string;
  activeBorderStyle: string;
  activeBorderRadius: string;
  borderRadius: string;
  contentPaddingVertical: string;
  contentPaddingHorizontal: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  active: boolean;
  highlight: boolean;
  autoUnhighlight: boolean;
  highlightChange: EventEmitter<boolean>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCardComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCardComponent, "ngc-card", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
    };
    "borderStyle": {
      "alias": "borderStyle";
      "required": false;
    };
    "activeColor": {
      "alias": "activeColor";
      "required": false;
    };
    "activeBorderWidth": {
      "alias": "activeBorderWidth";
      "required": false;
    };
    "activeBorderColor": {
      "alias": "activeBorderColor";
      "required": false;
    };
    "activeBorderStyle": {
      "alias": "activeBorderStyle";
      "required": false;
    };
    "activeBorderRadius": {
      "alias": "activeBorderRadius";
      "required": false;
    };
    "borderRadius": {
      "alias": "borderRadius";
      "required": false;
    };
    "contentPaddingVertical": {
      "alias": "contentPaddingVertical";
      "required": false;
    };
    "contentPaddingHorizontal": {
      "alias": "contentPaddingHorizontal";
      "required": false;
    };
    "contentPaddingTop": {
      "alias": "contentPaddingTop";
      "required": false;
    };
    "contentPaddingBottom": {
      "alias": "contentPaddingBottom";
      "required": false;
    };
    "contentPaddingLeft": {
      "alias": "contentPaddingLeft";
      "required": false;
    };
    "contentPaddingRight": {
      "alias": "contentPaddingRight";
      "required": false;
    };
    "active": {
      "alias": "active";
      "required": false;
    };
    "highlight": {
      "alias": "highlight";
      "required": false;
    };
    "autoUnhighlight": {
      "alias": "autoUnhighlight";
      "required": false;
    };
  }, {
    "highlightChange": "highlightChange";
  }, never, ["[ngcCardHeader]", "[ngcCardContent]", "[ngcCardFooter]"], false, never>;
}
export declare class NgcCardModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCardModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCardModule, [typeof NgcCardComponent], [typeof CoreModule], [typeof NgcCardComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCardModule>;
}
export type NgcICarouselMode = 'auto' | 'cover' | 'contain';
export declare class NgcCarouselComponent implements OnChanges, AfterViewInit {
  elementRef: ElementRef;
  private _cdRef;
  private _ngcDialogService;
  get styleSize(): string;
  get styleRealSize(): number;
  get stylePositionX(): string;
  get stylePositionY(): string;
  get styleMode(): NgcICarouselMode;
  thumbnailList: QueryList<ElementRef>;
  size: string;
  photo: string[];
  delay: number;
  selectedIndex: number;
  interval: number;
  canClose: boolean;
  canFullscreen: boolean;
  positionX: string;
  positionY: string;
  mode: NgcICarouselMode;
  selectedIndexChange: EventEmitter<number>;
  fullscreen: EventEmitter<boolean>;
  closed: EventEmitter<void>;
  isFullscreen: boolean;
  realSize: number;
  private _interval;
  private _dialogRef;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   * @param {NgcDialogService} _ngcDialogService
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef, _ngcDialogService: NgcDialogService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @return {void}
   */
  selectPrevImage(): void;
  /**
   * @return {void}
   */
  selectNextImage(): void;
  /**
   * @param {number} index
   * @return {void}
   */
  selectImage(index: number): void;
  /**
   * @param {TemplateRef<any>} dialog
   * @return {void}
   */
  toggleFullscreen(dialog: TemplateRef<any>): void;
  /**
   * @return {void}
   */
  close(): void;
  /**
   * @return {void}
   */
  private _startInterval;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCarouselComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCarouselComponent, "ngc-carousel", never, {
    "size": {
      "alias": "size";
      "required": false;
    };
    "photo": {
      "alias": "photo";
      "required": false;
    };
    "delay": {
      "alias": "delay";
      "required": false;
    };
    "selectedIndex": {
      "alias": "selectedIndex";
      "required": false;
    };
    "interval": {
      "alias": "interval";
      "required": false;
    };
    "canClose": {
      "alias": "canClose";
      "required": false;
    };
    "canFullscreen": {
      "alias": "canFullscreen";
      "required": false;
    };
    "positionX": {
      "alias": "positionX";
      "required": false;
    };
    "positionY": {
      "alias": "positionY";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
  }, {
    "selectedIndexChange": "selectedIndexChange";
    "fullscreen": "fullscreen";
    "closed": "closed";
  }, never, never, false, never>;
}
export declare class NgcCarouselModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCarouselModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCarouselModule, [typeof NgcCarouselComponent], [typeof CoreModule, typeof NgcButtonModule, typeof NgcIconModule, typeof NgcScrollBarModule, typeof NgcTooltipModule, typeof NgcDialogModule], [typeof NgcCarouselComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCarouselModule>;
}
export declare class NgcCheckboxComponent implements OnInit, ControlValueAccessor {
  cdr: ChangeDetectorRef;
  label: string;
  color: string;
  labelColor: string;
  ngModel: boolean;
  disabled: boolean;
  readonly: boolean;
  indeterminate: boolean;
  get isChecked(): boolean;
  get isIndeterminate(): boolean;
  get isDisabled(): boolean;
  get isReadonly(): boolean;
  ngModelChange: EventEmitter<boolean>;
  constructor(cdr: ChangeDetectorRef);
  triggerClick(event: MouseEvent): void;
  triggerKeyDownSpace(event: KeyboardEvent): void;
  ngOnInit(): void;
  private onChange;
  private onTouched;
  writeValue(value: boolean): void;
  registerOnChange(fn: (value: boolean) => void): void;
  registerOnTouched(fn: () => void): void;
  setDisabledState(isDisabled: boolean): void;
  toggle(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCheckboxComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCheckboxComponent, "ngc-checkbox", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "labelColor": {
      "alias": "labelColor";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "indeterminate": {
      "alias": "indeterminate";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
  }, never, ["*"], false, never>;
}
export declare class NgcCheckboxModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCheckboxModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCheckboxModule, [typeof NgcCheckboxComponent], [typeof i1.FormsModule, typeof CoreModule], [typeof NgcCheckboxComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCheckboxModule>;
}
export declare class NgcClipboardCopyDirective {
  private _overlay;
  private _vcRef;
  private _elementRef;
  clipboardCopy: string;
  copiedMessage: string;
  displayTime: number;
  disabled: boolean;
  copied: EventEmitter<MouseEvent>;
  isCopied: boolean;
  private _overlayRef;
  private _portal;
  private _tooltipInstance;
  constructor(_overlay: Overlay, _vcRef: ViewContainerRef, _elementRef: ElementRef);
  triggerClick(event: MouseEvent): void;
  openTooltip(): void;
  closeTooltip(): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  private _copyURLToClipboard;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcClipboardCopyDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcClipboardCopyDirective, "[ngcClipboardCopy]", ["ngcClipboardCopy"], {
    "clipboardCopy": {
      "alias": "ngcClipboardCopy";
      "required": false;
    };
    "copiedMessage": {
      "alias": "copiedMessage";
      "required": false;
    };
    "displayTime": {
      "alias": "displayTime";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
  }, {
    "copied": "copied";
  }, never, never, false, never>;
}
export declare class NgcClipboardCopyModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcClipboardCopyModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcClipboardCopyModule, [typeof NgcClipboardCopyDirective], [typeof NgcTooltipModule], [typeof NgcClipboardCopyDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcClipboardCopyModule>;
}
export declare class NgcCodeBlockComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
  private elementRef;
  private cdr;
  codeTemplate?: TemplateRef<any>;
  code: string;
  language: string;
  codeElem: ElementRef<HTMLElement>;
  codeContent?: ElementRef<HTMLElement>;
  projectedCode: string;
  copied: boolean;
  constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
  ngOnInit(): void;
  ngAfterContentInit(): void;
  ngAfterViewInit(): void;
  ngOnChanges(changes: SimpleChanges): void;
  private detectAndHighlightProjectedCode;
  highlight(): void;
  getLanguageLabel(): string;
  getLanguageColor(): string;
  copyCode(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCodeBlockComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCodeBlockComponent, "ngc-code-block", never, {
    "codeTemplate": {
      "alias": "codeTemplate";
      "required": false;
    };
    "code": {
      "alias": "code";
      "required": false;
    };
    "language": {
      "alias": "language";
      "required": false;
    };
  }, {}, ["codeContent"], ["*"], false, never>;
}
export declare class NgcCodeBlockModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCodeBlockModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCodeBlockModule, [typeof NgcCodeBlockComponent], [typeof CoreModule, typeof i3.HighlightModule, typeof NgcIconModule], [typeof NgcCodeBlockComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCodeBlockModule>;
}
export declare class NgcCollapseComponent {
  get styleColor(): string;
  get styleBorderWidth(): string;
  get styleBorderColor(): string;
  get styleBorderStyle(): string;
  get styleBorderRadius(): string;
  get styleActiveColor(): string;
  get styleActiveBorderWidth(): string;
  get styleActiveBorderColor(): string;
  get styleActiveBorderStyle(): string;
  get styleActiveBorderRadius(): string;
  get stylePaddingTop(): string;
  get stylePaddingBottom(): string;
  get stylePaddingLeft(): string;
  get stylePaddingRight(): string;
  get classActive(): boolean;
  color: string;
  iconCollapse: string;
  borderWidth: string;
  borderColor: string;
  borderStyle: string;
  activeColor: string;
  activeBorderWidth: string;
  activeBorderColor: string;
  activeBorderStyle: string;
  activeBorderRadius: string;
  borderRadius: string;
  contentPaddingVertical: string;
  contentPaddingHorizontal: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  active: boolean;
  highlight: boolean;
  autoUnhighlight: boolean;
  highlightChange: EventEmitter<boolean>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCollapseComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCollapseComponent, "ngc-collapse", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "iconCollapse": {
      "alias": "iconCollapse";
      "required": false;
    };
    "borderWidth": {
      "alias": "borderWidth";
      "required": false;
    };
    "borderColor": {
      "alias": "borderColor";
      "required": false;
    };
    "borderStyle": {
      "alias": "borderStyle";
      "required": false;
    };
    "activeColor": {
      "alias": "activeColor";
      "required": false;
    };
    "activeBorderWidth": {
      "alias": "activeBorderWidth";
      "required": false;
    };
    "activeBorderColor": {
      "alias": "activeBorderColor";
      "required": false;
    };
    "activeBorderStyle": {
      "alias": "activeBorderStyle";
      "required": false;
    };
    "activeBorderRadius": {
      "alias": "activeBorderRadius";
      "required": false;
    };
    "borderRadius": {
      "alias": "borderRadius";
      "required": false;
    };
    "contentPaddingVertical": {
      "alias": "contentPaddingVertical";
      "required": false;
    };
    "contentPaddingHorizontal": {
      "alias": "contentPaddingHorizontal";
      "required": false;
    };
    "contentPaddingTop": {
      "alias": "contentPaddingTop";
      "required": false;
    };
    "contentPaddingBottom": {
      "alias": "contentPaddingBottom";
      "required": false;
    };
    "contentPaddingLeft": {
      "alias": "contentPaddingLeft";
      "required": false;
    };
    "contentPaddingRight": {
      "alias": "contentPaddingRight";
      "required": false;
    };
    "active": {
      "alias": "active";
      "required": false;
    };
    "highlight": {
      "alias": "highlight";
      "required": false;
    };
    "autoUnhighlight": {
      "alias": "autoUnhighlight";
      "required": false;
    };
  }, {
    "highlightChange": "highlightChange";
  }, never, ["[ngcCollapseHeader]", "[ngcCollapseContent]", "[ngcCollapseFooter]"], false, never>;
}
export declare class NgcCollapseModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCollapseModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCollapseModule, [typeof NgcCollapseComponent], [typeof CoreModule, typeof NgcIconModule], [typeof NgcCollapseComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCollapseModule>;
}
export interface NgcCollapseMenuItem {
  label: string;
  link?: string;
  icon?: string;
}
export declare class NgcCollapseMenuComponent {
  private _cdr;
  groupTitle: string;
  title: string;
  icon: string;
  expanded: boolean;
  activeItemLabel: string;
  items: NgcCollapseMenuItem[];
  selectItem: EventEmitter<NgcCollapseMenuItem>;
  constructor(_cdr: ChangeDetectorRef);
  toggleExpanded(): void;
  selectItemAction(item: NgcCollapseMenuItem): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCollapseMenuComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCollapseMenuComponent, "ngc-collapse-menu", never, {
    "groupTitle": {
      "alias": "groupTitle";
      "required": false;
    };
    "title": {
      "alias": "title";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "expanded": {
      "alias": "expanded";
      "required": false;
    };
    "activeItemLabel": {
      "alias": "activeItemLabel";
      "required": false;
    };
    "items": {
      "alias": "items";
      "required": false;
    };
  }, {
    "selectItem": "selectItem";
  }, never, never, false, never>;
}
export declare class NgcCollapseMenuModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCollapseMenuModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCollapseMenuModule, [typeof NgcCollapseMenuComponent], [typeof i45.CommonModule, typeof NgcIconModule], [typeof NgcCollapseMenuComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCollapseMenuModule>;
}
export interface NgcICommentUser {
  id: number;
  name: string;
  avatar?: string;
}
export interface NgcICommentContent {
  text?: string;
  attachments?: NgcICommentFile[];
  images?: NgcICommentFile[];
  mentions?: number[];
}
export interface NgcICommentFile {
  name?: string;
  size?: number;
  url?: string;
  previewUrl?: string;
  type?: string;
}
export type NgcICommentReactionType = 'like' | 'heart' | 'haha' | 'wow' | 'sad' | 'angry';
export interface NgcICommentReaction {
  type: NgcICommentReactionType;
  count: number;
  reacted?: boolean;
}
export interface NgcIComment {
  id: number | string;
  user: NgcICommentUser;
  content: NgcICommentContent;
  createdAt: string | Date;
  updatedAt?: string | Date;
  isEdited?: boolean;
  editable?: boolean;
  deletable?: boolean;
  reactions?: NgcICommentReaction[];
  totalReplies?: number;
  replies?: NgcIComment[];
}
export interface NgcICommentCreateEvent {
  comment: NgcIComment;
  parentComment?: NgcIComment;
}
export interface NgcICommentUpdateEvent {
  comment: NgcIComment;
  newContent: NgcICommentContent;
}
export interface NgcICommentDeleteEvent {
  comment: NgcIComment;
}
export interface NgcICommentReactionEvent {
  comment: NgcIComment;
  type: NgcICommentReactionType;
}
export declare class NgcCommentBoxComponent implements AfterViewInit, OnDestroy {
  private _cdr;
  get classSub(): boolean;
  textareaRef: ElementRef<HTMLTextAreaElement>;
  subEditor: boolean;
  autoFocusOn: boolean;
  editingComment: NgcIComment;
  maxFilePerComment: number;
  maxImagePerComment: number;
  placeholder: string;
  commentSent: EventEmitter<NgcICommentContent>;
  cancelled: EventEmitter<void>;
  text: string;
  attachments: NgcICommentFile[];
  images: NgcICommentFile[];
  isFormattingVisible: boolean;
  isBold: boolean;
  isItalic: boolean;
  constructor(_cdr: ChangeDetectorRef);
  ngAfterViewInit(): void;
  ngOnDestroy(): void;
  get isDisabled(): boolean;
  /**
   * Send comment
   */
  sendComment(): void;
  /**
   * Cancel editing
   */
  cancel(): void;
  /**
   * Handle Enter key (send on plain Enter, allow Shift+Enter for newline)
   */
  onKeyDown(event: KeyboardEvent): void;
  /**
   * Handle file picked from ngc-file-picker
   */
  onFilePicked(event: NgcIFilePickerEvent): void;
  /**
   * Handle image picked from ngc-file-picker
   */
  onImagePicked(event: NgcIFilePickerEvent): void;
  /**
   * Insert emoji into text
   */
  onEmojiPicked(emoji: NgcIEmojiData): void;
  /**
   * Remove attachment
   */
  removeAttachment(index: number): void;
  /**
   * Remove image
   */
  removeImage(index: number): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCommentBoxComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCommentBoxComponent, "ngc-comment-box", never, {
    "subEditor": {
      "alias": "subEditor";
      "required": false;
    };
    "autoFocusOn": {
      "alias": "autoFocusOn";
      "required": false;
    };
    "editingComment": {
      "alias": "editingComment";
      "required": false;
    };
    "maxFilePerComment": {
      "alias": "maxFilePerComment";
      "required": false;
    };
    "maxImagePerComment": {
      "alias": "maxImagePerComment";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
  }, {
    "commentSent": "commentSent";
    "cancelled": "cancelled";
  }, never, never, false, never>;
}
export declare class NgcCommentListComponent implements OnChanges {
  private _cdr;
  comments: NgcIComment[];
  canComment: boolean;
  userID: number;
  maxFilePerComment: number;
  limitReplies: number;
  limitContentHeight: string;
  placeholder: string;
  commentCreated: EventEmitter<NgcICommentCreateEvent>;
  commentUpdated: EventEmitter<NgcICommentUpdateEvent>;
  commentDeleted: EventEmitter<NgcICommentDeleteEvent>;
  commentsLoadMore: EventEmitter<void>;
  repliesLoadMore: EventEmitter<NgcIComment>;
  reactionUpdated: EventEmitter<NgcICommentReactionEvent>;
  readonly REACTIONS: {
    type: NgcICommentReactionType;
    emoji: string;
    label: string;
  }[];
  editingComment: NgcIComment | null;
  replyingComment: NgcIComment | null;
  openReactionCommentId: number | string | null;
  constructor(_cdr: ChangeDetectorRef);
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * Get relative time label
   */
  getRelativeTime(date: string | Date): string;
  /**
   * Start editing a comment
   */
  setEditComment(comment: NgcIComment): void;
  /**
   * Reply to a comment
   */
  setReplyComment(comment: NgcIComment): void;
  /**
   * Cancel reply state
   */
  cancelReply(): void;
  /**
   * Create new comment
   */
  createComment(content: NgcICommentContent, parentComment?: NgcIComment): void;
  /**
   * Update existing comment
   */
  updateComment(content: NgcICommentContent, comment: NgcIComment): void;
  /**
   * Delete a comment
   */
  deleteComment(comment: NgcIComment, parentComment?: NgcIComment): void;
  /**
   * Toggle reaction picker visibility
   */
  toggleReactions(commentId: number | string): void;
  /**
   * Apply reaction to comment
   */
  applyReaction(type: NgcICommentReactionType, comment: NgcIComment): void;
  /**
   * Get total reaction count
   */
  getTotalReactions(comment: NgcIComment): number;
  /**
   * Track comments by id
   */
  trackById(_: number, item: NgcIComment): number | string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCommentListComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCommentListComponent, "ngc-comment-list", never, {
    "comments": {
      "alias": "comments";
      "required": false;
    };
    "canComment": {
      "alias": "canComment";
      "required": false;
    };
    "userID": {
      "alias": "userID";
      "required": false;
    };
    "maxFilePerComment": {
      "alias": "maxFilePerComment";
      "required": false;
    };
    "limitReplies": {
      "alias": "limitReplies";
      "required": false;
    };
    "limitContentHeight": {
      "alias": "limitContentHeight";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
  }, {
    "commentCreated": "commentCreated";
    "commentUpdated": "commentUpdated";
    "commentDeleted": "commentDeleted";
    "commentsLoadMore": "commentsLoadMore";
    "repliesLoadMore": "repliesLoadMore";
    "reactionUpdated": "reactionUpdated";
  }, never, never, false, never>;
}
export declare class NgcReactionEmojiPipe implements PipeTransform {
  transform(reactions: {
    type: NgcICommentReactionType;
    emoji: string;
  }[], type: NgcICommentReactionType): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcReactionEmojiPipe, never>;
  static ɵpipe: i0.ɵɵPipeDeclaration<NgcReactionEmojiPipe, "reactionEmoji", false>;
}
export declare class NgcCommentModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCommentModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcCommentModule, [typeof NgcCommentBoxComponent, typeof NgcCommentListComponent, typeof NgcReactionEmojiPipe], [typeof i45.CommonModule, typeof i1.FormsModule, typeof NgcAvatarModule, typeof NgcIconModule, typeof NgcMenuModule, typeof NgcTooltipModule, typeof NgcEmojiPickerModule, typeof NgcFilePickerModule], [typeof NgcCommentBoxComponent, typeof NgcCommentListComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcCommentModule>;
}
export type NgcIConfirmType = 'dialog' | 'popup';
export interface NgcIConfirm {
  message: string;
  title?: string;
  config?: NgcIConfirmConfig;
}
export interface NgcIConfirmConfig {
  data?: any;
  buttonApply?: string;
  buttonDiscard?: string;
  warning?: boolean;
  warningMessage?: string;
  translate?: boolean;
  translateParams?: IObject;
  autoClose?: boolean;
  hasBackdrop?: boolean;
  backdropClass?: string;
  panelClass?: string;
  type?: NgcIConfirmType;
  viewContainerRef?: ViewContainerRef;
}
export declare class NgcConfirmComponent {
  get classDialogContainer(): boolean;
  message: string | TemplateRef<any>;
  title: string;
  close: (answer?: boolean) => void;
  config: NgcIConfirmConfig;
  get isMessageString(): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcConfirmComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcConfirmComponent, "ngc-confirm", never, {}, {}, never, never, false, never>;
}
export interface NgcIConfirmRef {
  config: NgcIConfirmConfig;
  close: (answer?: boolean) => void;
  afterOpened: () => Subject<NgcConfirmComponent>;
  afterClosed: () => Subject<boolean>;
}
export declare class NgcConfirmService {
  private _overlay;
  private _router;
  opened$: Subject<NgcConfirmComponent>;
  closed$: Subject<boolean>;
  private _overlayRef;
  private _confirmRef;
  private _defaultConfig;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {Router} _router
   */
  constructor(_overlay: Overlay, _router: Router);
  /**
   * @param {string | TemplateRef<any>} message
   * @param {string} title
   * @param {NgcIDialogConfig} config
   * @return {void}
   */
  open(message: string | TemplateRef<any>, title?: string, config?: NgcIConfirmConfig): NgcIConfirmRef;
  /**
   * @param {boolean} answer
   * @return {void}
   */
  close(answer?: boolean): void;
  /**
   * @return {void}
   */
  closeAll(): void;
  /**
   * @param {NgcIDialogConfig} config
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @param {NgcIDialogConfig} config
   * @return {NgcIConfirmRef}
   */
  private _createConfirmRef;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcConfirmService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
export declare class NgcConfirmModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcConfirmModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcConfirmModule, [typeof NgcConfirmComponent], [typeof CoreModule, typeof NgcButtonModule, typeof NgcIconModule], [typeof NgcConfirmComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcConfirmModule>;
}
export interface NgcIDesignTokenPrimitive {
  color: {
    blue: {
      '400': string;
      '500': string;
      '700': string;
    };
    green: {
      '400': string;
      '500': string;
      '700': string;
    };
    yellow: {
      '400': string;
      '500': string;
      '700': string;
    };
    red: {
      '400': string;
      '500': string;
      '700': string;
    };
    orange: {
      '400': string;
      '500': string;
      '700': string;
    };
    purple: {
      '400': string;
      '500': string;
      '700': string;
    };
    darkGray: {
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '700': string;
    };
    lightGray: {
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '700': string;
    };
    neutral: {
      white: string;
      black: string;
    };
  };
  radius: {
    none: string;
    '100': string;
    '200': string;
    '300': string;
    '400': string;
    '500': string;
    '600': string;
    '700': string;
    full: string;
  };
  font: {
    body: string;
    code: string;
  };
}
export interface NgcIDesignTokenSemantic {
  color: {
    primary: {
      default: string;
      hover: string;
      active: string;
    };
    success: {
      default: string;
      hover: string;
      active: string;
      subtle: string;
    };
    warning: {
      default: string;
      hover: string;
      active: string;
      subtle: string;
    };
    danger: {
      default: string;
      hover: string;
      active: string;
      subtle: string;
    };
    info: {
      default: string;
      hover: string;
      active: string;
      subtle: string;
    };
    neutral: {
      background: {
        canvas: string;
        surface: string;
        disabled: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        placeholder: string;
      };
      border: {
        default: string;
        strong: string;
        subtle: string;
      };
    };
  };
  radius: {
    interactive: string;
    container: string;
    overlay: string;
  };
}
export interface NgcIDesignToken {
  primitive: NgcIDesignTokenPrimitive;
  semantic: NgcIDesignTokenSemantic;
}
export declare class NgcDesignTokenComponent implements OnInit, OnDestroy {
  private _ngcDialogService;
  private _cdr;
  tokens: NgcIDesignToken;
  tokenChange: EventEmitter<NgcIDesignToken>;
  radiusOptions: {
    label: string;
    value: string;
  }[];
  fontOptions: {
    label: string;
    value: string;
  }[];
  spacingOptions: {
    label: string;
    value: string;
  }[];
  spacingBase: string;
  semanticColorPrimaryDefault: string;
  semanticColorSuccessDefault: string;
  semanticColorSuccessSubtle: string;
  semanticColorWarningDefault: string;
  semanticColorWarningSubtle: string;
  semanticColorDangerDefault: string;
  semanticColorDangerSubtle: string;
  semanticColorInfoDefault: string;
  semanticColorInfoSubtle: string;
  semanticColorBgCanvas: string;
  semanticColorBgSurface: string;
  semanticColorBgDisabled: string;
  semanticColorTextPrimary: string;
  semanticColorTextSecondary: string;
  semanticColorTextTertiary: string;
  semanticColorTextDisabled: string;
  semanticColorTextPlaceholder: string;
  semanticColorBorderDefault: string;
  semanticColorBorderStrong: string;
  semanticColorBorderSubtle: string;
  primitiveColorWhite: string;
  primitiveColorBlack: string;
  colorSecondary: string;
  colorDefault: string;
  colorActive: string;
  colorHighlight: string;
  semanticRadiusInteractive: string;
  semanticRadiusContainer: string;
  semanticRadiusOverlay: string;
  radiusNone: string;
  radius100: string;
  radius200: string;
  radius600: string;
  radius700: string;
  radiusFull: string;
  primitiveFontBody: string;
  primitiveFontCode: string;
  fontSizeMini: string;
  fontSizeSmall: string;
  fontSizeBase: string;
  fontSizeLarge: string;
  fontSizeXlarge: string;
  fontSizeXxlarge: string;
  fontSizeMiniVal: number;
  fontSizeSmallVal: number;
  fontSizeBaseVal: number;
  fontSizeLargeVal: number;
  fontSizeXlargeVal: number;
  fontSizeXxlargeVal: number;
  fontWeightNormal: number;
  fontWeightSemibold: number;
  fontWeightBold: number;
  boxShadowDefault: string;
  boxShadowThick: string;
  boxShadowFocus: string;
  private _originalVars;
  constructor(_ngcDialogService: NgcDialogService, _cdr: ChangeDetectorRef);
  ngOnInit(): void;
  ngOnDestroy(): void;
  /**
   * Called by template on any token change → apply to :root CSS vars
   */
  onValueChange(): void;
  /**
   * Reset all tokens to defaults from tokens.json
   */
  resetTokens(): void;
  /**
   * Open dialog with JSON and CSS var output
   */
  openTokenDialog(): void;
  private _snapshotOriginalVars;
  /**
   * Apply each token field's value to the corresponding --ngc-* CSS variable on :root
   * Following the mapping: token path → CSS_VAR_MAP → variable.scss SCSS variable
   */
  private _applyCssVars;
  /**
   * Build output that matches tokens.json structure exactly
   */
  private _buildToken;
  /**
   * Build JSON for dialog — CSS vars + token JSON side by side
   */
  private _buildCssVarOutput;
  private _tokenPathToField;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDesignTokenComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDesignTokenComponent, "ngc-design-token", never, {
    "tokens": {
      "alias": "tokens";
      "required": false;
    };
  }, {
    "tokenChange": "tokenChange";
  }, never, never, false, never>;
}
declare class NgcDesignTokenDialogComponent {
  data: {
    json: string;
  };
  dialogRef: NgcIDialogRef;
  copied: boolean;
  activeTab: 'tokens' | 'css';
  constructor(data: {
    json: string;
  }, dialogRef: NgcIDialogRef);
  /**
   * Parse raw JSON output and return Highlighted HTML string
   */
  getHighlightedCode(): string;
  /**
   * Simple syntax highlighter regex helper
   */
  private syntaxHighlight;
  /**
   * Copy JSON to clipboard
   */
  copyJson(): void;
  /**
   * Close dialog
   */
  close(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDesignTokenDialogComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDesignTokenDialogComponent, "ngc-design-token-dialog", never, {}, {}, never, never, false, never>;
}
interface NgcSelectOption {
  label: string;
  value: any;
  description?: string;
  disabled?: boolean;
}
export declare class NgcSelectComponent implements OnInit, OnDestroy {
  private _overlay;
  private _elementRef;
  private _cdr;
  private _vcRef;
  options: NgcSelectOption[];
  selectedValue: any;
  placeholder: string;
  disabled: boolean;
  label: string;
  selectionChange: EventEmitter<any>;
  triggerEl: ElementRef;
  panelTpl: TemplateRef<any>;
  isOpen: boolean;
  private _overlayRef;
  private _portal;
  constructor(_overlay: Overlay, _elementRef: ElementRef, _cdr: ChangeDetectorRef, _vcRef: ViewContainerRef);
  ngOnInit(): void;
  ngOnDestroy(): void;
  get selectedOption(): NgcSelectOption | null;
  get displayLabel(): string;
  get hasValue(): boolean;
  toggle(): void;
  open(): void;
  close(): void;
  selectOption(option: NgcSelectOption): void;
  isSelected(option: NgcSelectOption): boolean;
  private _createOverlayRef;
  get triggerWidth(): number;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSelectComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcSelectComponent, "ngc-select", never, {
    "options": {
      "alias": "options";
      "required": false;
    };
    "selectedValue": {
      "alias": "selectedValue";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
  }, {
    "selectionChange": "selectionChange";
  }, never, never, false, never>;
}
export declare class NgcSelectModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSelectModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcSelectModule, [typeof NgcSelectComponent], [typeof i45.CommonModule, typeof i1.FormsModule], [typeof NgcSelectComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcSelectModule>;
}
export declare class NgcDesignTokenModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDesignTokenModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDesignTokenModule, [typeof NgcDesignTokenComponent, typeof NgcDesignTokenDialogComponent], [typeof CoreModule, typeof i1.FormsModule, typeof NgcButtonModule, typeof NgcIconModule, typeof NgcDividerModule, typeof NgcSelectModule, typeof NgcDialogModule], [typeof NgcDesignTokenComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDesignTokenModule>;
}
export declare class NgcDrawerContainerComponent {
  get classStretch(): boolean;
  stretch: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDrawerContainerComponent, "ngc-drawer-container, [ngcDrawerContainer]", never, {
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcDrawerLazyDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerLazyDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcDrawerLazyDirective, "[ngcDrawerLazy]", ["ngcDrawerLazy"], {}, {}, never, never, false, never>;
}
export type NgcDrawerPosition = 'left' | 'right';
export declare class NgcDrawerComponent implements OnChanges {
  elementRef: ElementRef;
  private _cdRef;
  get styleBgColor(): string;
  get styleWidth(): string;
  get stylePaddingTop(): string;
  get stylePaddingBottom(): string;
  get stylePaddingLeft(): string;
  get stylePaddingRight(): string;
  get classLeft(): boolean;
  get classRight(): boolean;
  get classOpened(): boolean;
  get classSliding(): boolean;
  lazyContent: NgcDrawerLazyDirective;
  label: string;
  bgColor: string;
  renderDelay: number;
  opened: boolean;
  width: string;
  paddingVertical: string;
  paddingHorizontal: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  position: NgcDrawerPosition;
  openedChange: EventEmitter<boolean>;
  isSliding: boolean;
  isRendered: boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @return {void}
   */
  toggle(): void;
  /**
   * @return {void}
   */
  private _render;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDrawerComponent, "ngc-drawer, [ngcDrawer]", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "bgColor": {
      "alias": "bgColor";
      "required": false;
    };
    "renderDelay": {
      "alias": "renderDelay";
      "required": false;
    };
    "opened": {
      "alias": "opened";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "paddingVertical": {
      "alias": "paddingVertical";
      "required": false;
    };
    "paddingHorizontal": {
      "alias": "paddingHorizontal";
      "required": false;
    };
    "paddingTop": {
      "alias": "paddingTop";
      "required": false;
    };
    "paddingBottom": {
      "alias": "paddingBottom";
      "required": false;
    };
    "paddingLeft": {
      "alias": "paddingLeft";
      "required": false;
    };
    "paddingRight": {
      "alias": "paddingRight";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
  }, {
    "openedChange": "openedChange";
  }, ["lazyContent"], ["*"], false, never>;
}
export declare class NgcDrawerContentComponent {
  get stylePaddingTop(): string;
  get stylePaddingBottom(): string;
  get stylePaddingLeft(): string;
  get stylePaddingRight(): string;
  paddingVertical: string;
  paddingHorizontal: string;
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerContentComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDrawerContentComponent, "ngc-drawer-content, [ngcDrawerContent]", never, {
    "paddingVertical": {
      "alias": "paddingVertical";
      "required": false;
    };
    "paddingHorizontal": {
      "alias": "paddingHorizontal";
      "required": false;
    };
    "paddingTop": {
      "alias": "paddingTop";
      "required": false;
    };
    "paddingBottom": {
      "alias": "paddingBottom";
      "required": false;
    };
    "paddingLeft": {
      "alias": "paddingLeft";
      "required": false;
    };
    "paddingRight": {
      "alias": "paddingRight";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcDrawerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDrawerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDrawerModule, [typeof NgcDrawerContainerComponent, typeof NgcDrawerComponent, typeof NgcDrawerLazyDirective, typeof NgcDrawerContentComponent], [typeof CoreModule, typeof NgcButtonModule, typeof NgcTooltipModule], [typeof NgcDrawerContainerComponent, typeof NgcDrawerComponent, typeof NgcDrawerLazyDirective, typeof NgcDrawerContentComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDrawerModule>;
}
export declare class NgcDropdownItemComponent {
  templateRef: TemplateRef<any>;
  prefixTemp: TemplateRef<any>;
  suffixTemp: TemplateRef<any>;
  value: any;
  context: any;
  label: string;
  display: string;
  color: string;
  icon: string;
  dotColor: string;
  classes: string;
  disabled: boolean;
  truncate: boolean;
  truncateLimitLine: number;
  parent: unknown;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDropdownItemComponent, "ngc-dropdown-item", never, {
    "value": {
      "alias": "value";
      "required": false;
    };
    "context": {
      "alias": "context";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "display": {
      "alias": "display";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "dotColor": {
      "alias": "dotColor";
      "required": false;
    };
    "classes": {
      "alias": "class";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "truncate": {
      "alias": "truncate";
      "required": false;
    };
    "truncateLimitLine": {
      "alias": "truncateLimitLine";
      "required": false;
    };
  }, {}, ["prefixTemp", "suffixTemp"], ["*"], false, never>;
}
export declare class NgcDropdownGroupItemComponent implements AfterContentInit {
  templateRef: TemplateRef<any>;
  dropdownItems: QueryList<NgcDropdownItemComponent>;
  title: string;
  label: string;
  color: string;
  icon: string;
  dotColor: string;
  classes: string;
  disabled: boolean;
  truncate: boolean;
  truncateLimitLine: number;
  get children(): NgcDropdownItemComponent[];
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownGroupItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDropdownGroupItemComponent, "ngc-dropdown-group-item", never, {
    "title": {
      "alias": "title";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "dotColor": {
      "alias": "dotColor";
      "required": false;
    };
    "classes": {
      "alias": "class";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "truncate": {
      "alias": "truncate";
      "required": false;
    };
    "truncateLimitLine": {
      "alias": "truncateLimitLine";
      "required": false;
    };
  }, {}, ["dropdownItems"], never, false, never>;
}
export declare class NgcSearchBoxComponent implements OnChanges, OnDestroy {
  elementRef: ElementRef;
  private _cdRef;
  menuTrigger: NgcMenuTriggerForDirective;
  notFoundTemplate: TemplateRef<any>;
  data: any[];
  suggestion: any;
  ngModel: string;
  name: string;
  label: string;
  placeholder: string;
  prefixIcon: string;
  suffixIcon: string;
  searchKey: string;
  fieldName: string;
  fieldDescription: string;
  fieldImage: string;
  fieldAvatar: string;
  itemSize: number;
  debounceTime: number;
  trim: boolean;
  displayNotFound: boolean;
  disableControl: boolean;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  autoFocusOn: boolean;
  autoReset: boolean;
  notFoundData: INotFoundData;
  formControl: FormControl;
  appearance: NgcIFormFieldAppearance;
  errorDisplayMode: NgcIFormFieldErrorDisplayMode;
  filterPredicate: (data: any, searchQuery: string, searchKey?: string) => boolean;
  ngModelChange: EventEmitter<string>;
  searching: EventEmitter<string>;
  cleared: EventEmitter<Event>;
  filtered: EventEmitter<any[]>;
  suggested: EventEmitter<any>;
  prefixIconClicked: EventEmitter<void>;
  suffixIconClicked: EventEmitter<void>;
  input: EventEmitter<Event>;
  focus: EventEmitter<Event>;
  blur: EventEmitter<Event>;
  searchQuery: string;
  focusing: boolean;
  focusIndex: number;
  filteredData: any[];
  suggestionData: any[];
  private _searchUpdated$;
  get useVirtualScroll(): boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {string} searchQuery
   * @return {void}
   */
  onSearch(searchQuery: string): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onClear(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onInput(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onFocus(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onBlur(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  clear(event?: Event): void;
  /**
   * @param {Event} event
   * @param {number} index
   * @return {void}
   */
  chooseSuggestItem(event: Event, index: number): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  focusPreviousSuggestItem(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  focusNextSuggestItem(event: Event): void;
  /**
   * @return {void}
   */
  private _toggleMenu;
  /**
   * @return {void}
   */
  private _filter;
  /**
   * @return {void}
   */
  private _suggest;
  /**
   * @param {any} item
   * @return {boolean}
   */
  private _filterPredicate;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSearchBoxComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcSearchBoxComponent, "ngc-search-box", never, {
    "data": {
      "alias": "data";
      "required": false;
    };
    "suggestion": {
      "alias": "suggestion";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "prefixIcon": {
      "alias": "prefixIcon";
      "required": false;
    };
    "suffixIcon": {
      "alias": "suffixIcon";
      "required": false;
    };
    "searchKey": {
      "alias": "searchKey";
      "required": false;
    };
    "fieldName": {
      "alias": "fieldName";
      "required": false;
    };
    "fieldDescription": {
      "alias": "fieldDescription";
      "required": false;
    };
    "fieldImage": {
      "alias": "fieldImage";
      "required": false;
    };
    "fieldAvatar": {
      "alias": "fieldAvatar";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "debounceTime": {
      "alias": "debounceTime";
      "required": false;
    };
    "trim": {
      "alias": "trim";
      "required": false;
    };
    "displayNotFound": {
      "alias": "displayNotFound";
      "required": false;
    };
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "autoFocusOn": {
      "alias": "autoFocusOn";
      "required": false;
    };
    "autoReset": {
      "alias": "autoReset";
      "required": false;
    };
    "notFoundData": {
      "alias": "notFoundData";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "errorDisplayMode": {
      "alias": "errorDisplayMode";
      "required": false;
    };
    "filterPredicate": {
      "alias": "filterPredicate";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
    "searching": "searching";
    "cleared": "cleared";
    "filtered": "filtered";
    "suggested": "suggested";
    "prefixIconClicked": "prefixIconClicked";
    "suffixIconClicked": "suffixIconClicked";
    "input": "input";
    "focus": "focus";
    "blur": "blur";
  }, never, never, false, never>;
}
export declare class NgcSearchBoxModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSearchBoxModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcSearchBoxModule, [typeof NgcSearchBoxComponent], [typeof i2.ScrollingModule, typeof CoreModule, typeof FormModule, typeof NgcFormFieldModule, typeof NgcIconModule, typeof NgcMenuModule, typeof NgcAvatarModule, typeof NgcTruncateModule, typeof NgcButtonModule], [typeof NgcSearchBoxComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcSearchBoxModule>;
}
type NgcDropdownInternalItem = NgcDropdownGroupItemComponent | NgcDropdownItemComponent;
export declare class NgcDropdownComponent implements AfterContentInit, OnChanges {
  private _cdRef;
  private _translateService;
  dropdownMenuTrigger: NgcMenuTriggerForDirective;
  private _searchBox;
  set searchBox(value: NgcSearchBoxComponent);
  get searchBox(): NgcSearchBoxComponent;
  viewPort: CdkVirtualScrollViewport;
  displayTemp: TemplateRef<any>;
  formFieldError: NgcFormFieldErrorDirective;
  dropdownGroupItems: QueryList<NgcDropdownGroupItemComponent>;
  dropdownItems: QueryList<NgcDropdownItemComponent>;
  ngModel: any;
  label: string;
  searchPlaceholder: string;
  placeholder: string;
  itemSize: number;
  tabindex: number;
  disableControl: boolean;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  multiple: boolean;
  canSetNone: boolean;
  autoFit: boolean;
  strictDisplay: boolean;
  formControl: FormControl;
  appearance: NgcIFormFieldAppearance;
  errorDisplayMode: NgcIFormFieldErrorDisplayMode;
  ngModelChange: EventEmitter<any>;
  changed: EventEmitter<any>;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  loadMore: EventEmitter<boolean>;
  displayValue: string;
  selected: any;
  isOpened: boolean;
  isDirty: boolean;
  items: NgcDropdownInternalItem[];
  selectedGroup: NgcDropdownGroupItemComponent;
  private _bkItems;
  get isSelected(): boolean;
  get visibleNoneOption(): boolean;
  get useVirtualScroll(): boolean;
  get filteredItems(): NgcDropdownInternalItem[];
  get availableItems(): NgcDropdownItemComponent[];
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {TranslateService} _translateService
   */
  constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onOpened(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onClosed(event: Event): void;
  /**
   * @param {NgcDropdownInternalItem[]} items
   * @param {any} value
   * @return {NgcDropdownItemComponent}
   */
  findItem(items: NgcDropdownInternalItem[], value: any): NgcDropdownItemComponent;
  /**
   * @param {NgcDropdownInternalItem} item
   * @param {boolean} markAsDirty
   * @return {void}
   */
  selectItem(item: NgcDropdownInternalItem, markAsDirty?: boolean): void;
  /**
   * @param {NgcDropdownGroupItemComponent} group
   * @return {void}
   */
  selectGroup(group: NgcDropdownGroupItemComponent): void;
  /**
   * @return {void}
   */
  unselectGroup(): void;
  /**
   * @return {void}
   */
  addAllItems(): void;
  /**
   * @return {void}
   */
  removeAllItems(): void;
  /**
   * @return {void}
   */
  clear(): void;
  /**
   * @param {any} value
   * @return {void}
   */
  scrollToItem(value: any): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @return {void}
   */
  reopen(): void;
  /**
   * @return {void}
   */
  markForCheck(): void;
  /**
   * @param {boolean} markAsDirty
   * @return {void}
   */
  private _done;
  /**
   * @return {void}
   */
  private _initSelected;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcDropdownComponent, "ngc-dropdown", never, {
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "searchPlaceholder": {
      "alias": "searchPlaceholder";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "tabindex": {
      "alias": "tabindex";
      "required": false;
    };
    "disableControl": {
      "alias": "disableControl";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "multiple": {
      "alias": "multiple";
      "required": false;
    };
    "canSetNone": {
      "alias": "canSetNone";
      "required": false;
    };
    "autoFit": {
      "alias": "autoFit";
      "required": false;
    };
    "strictDisplay": {
      "alias": "strictDisplay";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "errorDisplayMode": {
      "alias": "errorDisplayMode";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
    "changed": "changed";
    "opened": "opened";
    "closed": "closed";
    "loadMore": "loadMore";
  }, ["displayTemp", "formFieldError", "dropdownGroupItems", "dropdownItems"], ["[ngcFormFieldError]"], false, never>;
}
export declare class NgcDropdownModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcDropdownModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcDropdownModule, [typeof NgcDropdownComponent, typeof NgcDropdownGroupItemComponent, typeof NgcDropdownItemComponent], [typeof i2.ScrollingModule, typeof CoreModule, typeof FormModule, typeof NgcFormFieldModule, typeof NgcSearchBoxModule, typeof NgcMenuModule, typeof NgcIconModule, typeof NgcTruncateModule, typeof NgcButtonModule, typeof NgcColorPickerModule, typeof NgcTooltipModule], [typeof NgcDropdownComponent, typeof NgcDropdownGroupItemComponent, typeof NgcDropdownItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcDropdownModule>;
}
export declare class NgcExampleComponent {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExampleComponent, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcExampleComponent, never, [typeof i45.CommonModule], never>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcExampleComponent>;
}
export declare class NgcExpansionPanelHeaderComponent implements OnChanges {
  private _contrastPipe;
  templateRef: TemplateRef<any>;
  color: string;
  textColor: string;
  textFontSize: string;
  width: string;
  sticky: boolean;
  stretch: boolean;
  private _bkTextColor;
  /**
   * @constructor
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_contrastPipe: ContrastPipe);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelHeaderComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExpansionPanelHeaderComponent, "ngc-expansion-panel-header", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "textColor": {
      "alias": "textColor";
      "required": false;
    };
    "textFontSize": {
      "alias": "textFontSize";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "sticky": {
      "alias": "sticky";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcExpansionPanelContentComponent {
  templateRef: TemplateRef<any>;
  private _panelContentList;
  get template(): TemplateRef<any>;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelContentComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExpansionPanelContentComponent, "ngc-expansion-panel-content", never, {}, {}, ["_panelContentList"], ["*"], false, never>;
}
export type NgcIExpansionPanelTheme = 'default' | 'background';
export declare class NgcExpansionPanelComponent implements OnChanges {
  elementRef: ElementRef;
  private _cdRef;
  get styleHeaderColor(): string;
  get styleHeaderTextColor(): string;
  get styleHeaderFontSize(): string;
  get styleHeaderWidth(): string;
  get styleContentPaddingTop(): string;
  get styleContentPaddingBottom(): string;
  get styleContentPaddingLeft(): string;
  get styleContentPaddingRight(): string;
  get classExpanded(): boolean;
  get classDraggable(): boolean;
  get classHasScrollBar(): boolean;
  get classThemeBackground(): boolean;
  expansionPanelHeaderList: QueryList<NgcExpansionPanelHeaderComponent>;
  expansionPanelContentList: QueryList<NgcExpansionPanelContentComponent>;
  cdkDrag: CdkDrag;
  cdkDragDisabled: boolean;
  renderDelay: number;
  expanded: boolean;
  draggable: boolean;
  hasScrollBar: boolean;
  contentPaddingVertical: string;
  contentPaddingHorizontal: string;
  contentPaddingTop: string;
  contentPaddingBottom: string;
  contentPaddingLeft: string;
  contentPaddingRight: string;
  theme: NgcIExpansionPanelTheme;
  expandedChange: EventEmitter<boolean>;
  isRendered: boolean;
  get expansionPanelHeader(): NgcExpansionPanelHeaderComponent;
  get expansionPanelContent(): NgcExpansionPanelContentComponent;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @return {void}
   */
  expand(): void;
  /**
   * @return {void}
   */
  collapse(): void;
  /**
   * @return {void}
   */
  private _render;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExpansionPanelComponent, "ngc-expansion-panel", never, {
    "cdkDrag": {
      "alias": "cdkDrag";
      "required": false;
    };
    "cdkDragDisabled": {
      "alias": "cdkDragDisabled";
      "required": false;
    };
    "renderDelay": {
      "alias": "renderDelay";
      "required": false;
    };
    "expanded": {
      "alias": "expanded";
      "required": false;
    };
    "draggable": {
      "alias": "draggable";
      "required": false;
    };
    "hasScrollBar": {
      "alias": "hasScrollBar";
      "required": false;
    };
    "contentPaddingVertical": {
      "alias": "contentPaddingVertical";
      "required": false;
    };
    "contentPaddingHorizontal": {
      "alias": "contentPaddingHorizontal";
      "required": false;
    };
    "contentPaddingTop": {
      "alias": "contentPaddingTop";
      "required": false;
    };
    "contentPaddingBottom": {
      "alias": "contentPaddingBottom";
      "required": false;
    };
    "contentPaddingLeft": {
      "alias": "contentPaddingLeft";
      "required": false;
    };
    "contentPaddingRight": {
      "alias": "contentPaddingRight";
      "required": false;
    };
    "theme": {
      "alias": "theme";
      "required": false;
    };
  }, {
    "expandedChange": "expandedChange";
  }, ["expansionPanelHeaderList", "expansionPanelContentList"], ["*"], false, never>;
}
export declare class NgcAccordionComponent implements AfterContentInit {
  expansionPanels: QueryList<NgcExpansionPanelComponent>;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcAccordionComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcAccordionComponent, "ngc-accordion", never, {}, {}, ["expansionPanels"], ["*"], false, never>;
}
export declare class NgcExpansionPanelContentDirective {
  templateRef: TemplateRef<any>;
  /**
   * @constructor
   * @param {TemplateRef} templateRef
   */
  constructor(templateRef: TemplateRef<any>);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelContentDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcExpansionPanelContentDirective, "[ngcExpansionPanelContent]", ["ngcExpansionPanelContent"], {}, {}, never, never, false, never>;
}
export declare class NgcExpansionPanelModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExpansionPanelModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcExpansionPanelModule, [typeof NgcAccordionComponent, typeof NgcExpansionPanelComponent, typeof NgcExpansionPanelHeaderComponent, typeof NgcExpansionPanelContentComponent, typeof NgcExpansionPanelContentDirective], [typeof i3$1.DragDropModule, typeof CoreModule, typeof NgcIconModule, typeof NgcScrollBarModule], [typeof NgcAccordionComponent, typeof NgcExpansionPanelComponent, typeof NgcExpansionPanelHeaderComponent, typeof NgcExpansionPanelContentComponent, typeof NgcExpansionPanelContentDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcExpansionPanelModule>;
}
export declare class NgcInlineInputComponent implements OnChanges {
  private _cdRef;
  name: string;
  placeholder: string;
  ngModel: string;
  editing: boolean;
  validate: boolean;
  trim: boolean;
  autoSave: boolean;
  disabled: boolean;
  formControl: FormControl;
  ngModelChange: EventEmitter<string>;
  editingChange: EventEmitter<boolean>;
  saved: EventEmitter<string>;
  cancelled: EventEmitter<string>;
  value: string;
  private _bkValue;
  set ngcInlineInput(value: boolean);
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_cdRef: ChangeDetectorRef);
  triggerClick(event: MouseEvent): void;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @return {void}
   */
  onAutoSave(): void;
  /**
   * @return {void}
   */
  onSave(): void;
  /**
   * @return {void}
   */
  onCancel(): void;
  /**
   * @return {void}
   */
  edit(): void;
  /**
   * @return {void}
   */
  private _save;
  /**
   * @return {void}
   */
  private _cancel;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcInlineInputComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcInlineInputComponent, "ngc-inline-input, [ngcInlineInput]", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
    "editing": {
      "alias": "editing";
      "required": false;
    };
    "validate": {
      "alias": "validate";
      "required": false;
    };
    "trim": {
      "alias": "trim";
      "required": false;
    };
    "autoSave": {
      "alias": "autoSave";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
    "ngcInlineInput": {
      "alias": "ngcInlineInput";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
    "editingChange": "editingChange";
    "saved": "saved";
    "cancelled": "cancelled";
  }, never, ["*"], false, never>;
}
export declare class NgcInlineInputModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcInlineInputModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcInlineInputModule, [typeof NgcInlineInputComponent], [typeof CoreModule, typeof FormModule, typeof NgcFormFieldModule], [typeof NgcInlineInputComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcInlineInputModule>;
}
export declare class NgcListItemComponent implements OnChanges {
  elementRef: ElementRef;
  templateRef: TemplateRef<any>;
  id: number;
  order: number;
  label: string;
  description: string;
  icon: string;
  dotColor: string;
  classes: string;
  ngClass: string;
  active: boolean;
  disabled: boolean;
  readonly: boolean;
  focusing: boolean;
  hovering: boolean;
  dragging: boolean;
  draggable: boolean;
  highlight: boolean;
  autoUnhighlight: boolean;
  truncate: boolean;
  truncateLimitLine: number;
  saved: EventEmitter<string>;
  cancelled: EventEmitter<string>;
  editing: EventEmitter<boolean>;
  labelChange: EventEmitter<string>;
  dotColorChange: EventEmitter<string>;
  highlightChange: EventEmitter<boolean>;
  clickEventEmitter: EventEmitter<MouseEvent>;
  focusEventEmitter: EventEmitter<MouseEvent>;
  blurEventEmitter: EventEmitter<MouseEvent>;
  isEditing: boolean;
  isForceAutoUnhighlight: boolean;
  changes$: Subject<void>;
  editingSubject$: Subject<void>;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   */
  constructor(elementRef: ElementRef);
  /**
   * @constructor
   */
  ngOnChanges(): void;
  /**
   * @param {boolean=} isForceAutoUnhighlight
   * @return {void}
   */
  setHighlight(isForceAutoUnhighlight?: boolean): void;
  /**
   * @return {void}
   */
  edit(): void;
  /**
   * @param {string} label
   * @return {void}
   */
  save(label: string): void;
  /**
   * @param {string} label
   * @return {void}
   */
  cancel(label?: string): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  click(event?: MouseEvent): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  focus(event?: MouseEvent): void;
  /**
   * @param {MouseEvent} event
   * @return {void}
   */
  blur(event?: MouseEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcListItemComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcListItemComponent, "ngc-list-item", never, {
    "id": {
      "alias": "id";
      "required": false;
    };
    "order": {
      "alias": "order";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "description": {
      "alias": "description";
      "required": false;
    };
    "icon": {
      "alias": "icon";
      "required": false;
    };
    "dotColor": {
      "alias": "dotColor";
      "required": false;
    };
    "classes": {
      "alias": "class";
      "required": false;
    };
    "ngClass": {
      "alias": "ngClass";
      "required": false;
    };
    "active": {
      "alias": "active";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
    "hovering": {
      "alias": "hovering";
      "required": false;
    };
    "dragging": {
      "alias": "dragging";
      "required": false;
    };
    "draggable": {
      "alias": "draggable";
      "required": false;
    };
    "highlight": {
      "alias": "highlight";
      "required": false;
    };
    "autoUnhighlight": {
      "alias": "autoUnhighlight";
      "required": false;
    };
    "truncate": {
      "alias": "truncate";
      "required": false;
    };
    "truncateLimitLine": {
      "alias": "truncateLimitLine";
      "required": false;
    };
  }, {
    "saved": "saved";
    "cancelled": "cancelled";
    "editing": "editing";
    "labelChange": "labelChange";
    "dotColorChange": "dotColorChange";
    "highlightChange": "highlightChange";
    "clickEventEmitter": "click";
    "focusEventEmitter": "focus";
    "blurEventEmitter": "blur";
  }, never, ["*"], false, never>;
}
export interface NgcIListItemMoved {
  item: NgcListItemComponent;
  container: NgcListItemComponent[];
  previousIndex: number;
  currentIndex: number;
  previousOrder: number;
  currentOrder: number;
}
export declare class NgcListComponent implements AfterContentInit {
  private _cdRef;
  private _translateService;
  get styleItemActiveColor(): string;
  get classStretch(): boolean;
  scroller: DetectScrollDirective;
  scrollBar: NgcScrollBarDirective;
  listItems: QueryList<NgcListItemComponent>;
  name: string;
  placeholder: string;
  itemSize: number;
  loadMoreBuffer: number;
  activeColor: string;
  stretch: boolean;
  displayColorDot: boolean;
  hasScrollBar: boolean;
  scrollBarMode: INgcScrollBarMode;
  formControl: FormControl;
  itemsMoved: EventEmitter<NgcIListItemMoved[]>;
  loadMore: EventEmitter<boolean>;
  items: NgcListItemComponent[];
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {TranslateService} _translateService
   */
  constructor(_cdRef: ChangeDetectorRef, _translateService: TranslateService);
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @param {CdkDragDrop} event
   * @return {void}
   */
  onDropped(event: CdkDragDrop<NgcListItemComponent[]>): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcListComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcListComponent, "ngc-list", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "loadMoreBuffer": {
      "alias": "loadMoreBuffer";
      "required": false;
    };
    "activeColor": {
      "alias": "activeColor";
      "required": false;
    };
    "stretch": {
      "alias": "stretch";
      "required": false;
    };
    "displayColorDot": {
      "alias": "displayColorDot";
      "required": false;
    };
    "hasScrollBar": {
      "alias": "hasScrollBar";
      "required": false;
    };
    "scrollBarMode": {
      "alias": "scrollBarMode";
      "required": false;
    };
    "formControl": {
      "alias": "formControl";
      "required": false;
    };
  }, {
    "itemsMoved": "itemsMoved";
    "loadMore": "loadMore";
  }, ["listItems"], never, false, never>;
}
export declare class NgcListModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcListModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcListModule, [typeof NgcListComponent, typeof NgcListItemComponent], [typeof i3$1.DragDropModule, typeof CoreModule, typeof FormModule, typeof NgcIconModule, typeof NgcScrollBarModule, typeof NgcColorPickerModule, typeof NgcTruncateModule, typeof NgcInlineInputModule, typeof NgcButtonModule, typeof NgcTooltipModule], [typeof NgcListComponent, typeof NgcListItemComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcListModule>;
}
interface IStatus {
  ACTIVE: 1;
  INACTIVE: 2;
  PENDING: 3;
}
export type NgcIMemberStatus = 1 | 2 | 3;
export interface NgcIMember {
  id: number;
  name?: string;
  order?: number;
  avatar?: NgcIAvatar;
  status?: NgcIMemberStatus;
}
export declare class NgcMember {
  static readonly MEMBER_STATUS: IStatus;
}
export declare class NgcMemberComponent {
  hasViewProfile: boolean;
  displayMemberName: boolean;
  canViewProfile: boolean;
  size: string;
  scrolling$: Subject<any>;
  member: NgcIMember;
  searchBox: NgcSearchBoxComponent;
  viewDetail: EventEmitter<NgcIMember>;
  readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
  /**
   * @param {NgcIMemberStatus} status
   * @return {string}
   */
  static parseStatusIcon(status: NgcIMemberStatus): string;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  viewProfile(member: NgcIMember): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberComponent, "ngc-member", never, {
    "hasViewProfile": {
      "alias": "hasViewProfile";
      "required": false;
    };
    "displayMemberName": {
      "alias": "displayMemberName";
      "required": false;
    };
    "canViewProfile": {
      "alias": "canViewProfile";
      "required": false;
    };
    "size": {
      "alias": "size";
      "required": false;
    };
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
    "member": {
      "alias": "member";
      "required": false;
    };
    "searchBox": {
      "alias": "searchBox";
      "required": false;
    };
  }, {
    "viewDetail": "viewDetail";
  }, never, never, false, never>;
}
declare class NgcMemberBase {
  private _ngcToastService;
  searchBox: NgcSearchBoxComponent;
  strictDisplay: boolean;
  itemSize: number;
  canViewProfile: boolean;
  disabled: boolean;
  required: boolean;
  name: string;
  label: string;
  scrolling$: Subject<any>;
  context: IObject;
  selected: number[];
  selectedMembers: NgcIMember[];
  includesStatus: NgcIMemberStatus[];
  members: NgcIMember[] | Observable<NgcIMember[]> | Function;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  viewDetail: EventEmitter<NgcIMember>;
  added: EventEmitter<NgcIMember[]>;
  removed: EventEmitter<NgcIMember[]>;
  selectedChange: EventEmitter<number[]>;
  selectedMembersChange: EventEmitter<NgcIMember[]>;
  readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
  isChanged: boolean;
  selectedIndex: number;
  availableStatus: NgcIMemberStatus[];
  selectedMembersClone: NgcIMember[];
  _members: NgcIMember[];
  protected bkSelected: number[];
  get availableMembers(): NgcIMember[];
  /**
   * @constructor
   * @param {NgcToastService} _ngcToastService
   */
  constructor(_ngcToastService: NgcToastService);
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  viewProfile(member: NgcIMember): void;
  /**
   * @return {void}
   */
  protected done(): void;
  /**
   * @param {NgcIMember[] | Observable<NgcIMember[]> | Function} members
   * @return {void}
   */
  protected setMembers(members: NgcIMember[] | Observable<NgcIMember[]> | Function): void;
  /**
   * @param {Observable<NgcIMember[]>} loader
   * @return {void}
   */
  protected loadPeople(loader: Observable<NgcIMember[]>): void;
  /**
   * @return {void}
   */
  protected initSelectedMembers(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberBase, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMemberBase, never, never, {
    "strictDisplay": {
      "alias": "strictDisplay";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "canViewProfile": {
      "alias": "canViewProfile";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
    "context": {
      "alias": "context";
      "required": false;
    };
    "selected": {
      "alias": "selected";
      "required": false;
    };
    "selectedMembers": {
      "alias": "selectedMembers";
      "required": false;
    };
    "includesStatus": {
      "alias": "includesStatus";
      "required": false;
    };
    "members": {
      "alias": "members";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "viewDetail": "viewDetail";
    "added": "added";
    "removed": "removed";
    "selectedChange": "selectedChange";
    "selectedMembersChange": "selectedMembersChange";
  }, never, never, true, never>;
}
export declare class NgcMemberListComponent extends NgcMemberBase implements OnChanges {
  elementRef: ElementRef;
  cdRef: ChangeDetectorRef;
  protected ngcToastService: NgcToastService;
  private _ngcConfirmService;
  get classActive(): boolean;
  limit: number;
  toggleAddButton: boolean;
  isAutoOpen: boolean;
  readonly: boolean;
  isOpened: boolean;
  filteredSelectedMembers: NgcIMember[];
  private _removedMembers;
  get useVirtualScroll(): boolean;
  /**
   * @constructor
   * @param {ElementRef} elementRef
   * @param {NgcToastService} ngcToastService
   * @param {ChangeDetectorRef} cdRef
   * @param {NgcConfirmService} _ngcConfirmService
   */
  constructor(elementRef: ElementRef, cdRef: ChangeDetectorRef, ngcToastService: NgcToastService, _ngcConfirmService: NgcConfirmService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   * @return {void}
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @return {void}
   */
  onMoreMenuOpened(): void;
  /**
   * @return {void}
   */
  onMoreMenuClosed(): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onPickerMenuOpened(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onPickerMenuClosed(event: Event): void;
  /**
   * @return {void}
   */
  removeAllMembers(): void;
  /**
   * @param {NgcIMember} member
   * @param {boolean=} isDirect
   * @return {void}
   */
  removeMember(member: NgcIMember, isDirect?: boolean): void;
  /**
   * @param {NgcIMemberStatus} status
   * @return {number[]}
   */
  private _getSelected;
  /**
   * @param {NgcIMemberStatus} status
   * @return {void}
   */
  private _deleteMembers;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberListComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberListComponent, "ngc-member-list", never, {
    "limit": {
      "alias": "limit";
      "required": false;
    };
    "toggleAddButton": {
      "alias": "toggleAddButton";
      "required": false;
    };
    "isAutoOpen": {
      "alias": "isAutoOpen";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export type NgcIMemberPickerPosition = 'above' | 'below';
export declare class NgcMemberPickerDirective implements OnDestroy, OnChanges {
  private _overlay;
  private _elementRef;
  private _vcRef;
  panelClass: string | string[];
  backdropClass: string | string[];
  hasBackdrop: boolean;
  closeOnClickOutside: boolean;
  strictDisplay: boolean;
  offsetX: number;
  offsetY: number;
  itemSize: number;
  width: string;
  minWidth: string;
  maxWidth: string;
  height: string;
  minHeight: string;
  maxHeight: string;
  position: NgcIMemberPickerPosition;
  direction: Direction;
  isAutoOpen: boolean;
  canViewProfile: boolean;
  required: boolean;
  disabled: boolean;
  name: string;
  label: string;
  scrolling$: Subject<any>;
  context: IObject;
  selected: number[];
  selectedMembers: NgcIMember[];
  includesStatus: NgcIMemberStatus[];
  members: NgcIMember[] | Observable<NgcIMember[]> | Function;
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
  opened: EventEmitter<Event>;
  closed: EventEmitter<Event>;
  added: EventEmitter<NgcIMember[]>;
  removed: EventEmitter<NgcIMember[]>;
  viewDetail: EventEmitter<NgcIMember>;
  selectedChange: EventEmitter<number[]>;
  selectedMembersChange: EventEmitter<NgcIMember[]>;
  backdropPress: EventEmitter<MouseEvent>;
  isOpened: boolean;
  private _isPositionStrategyUpdated;
  private _portal;
  private _overlayRef;
  private _resizeObserver;
  private _instance;
  /**
   * @constructor
   * @param {Overlay} _overlay
   * @param {ElementRef} _elementRef
   * @param {ViewContainerRef} _vcRef
   */
  constructor(_overlay: Overlay, _elementRef: ElementRef, _vcRef: ViewContainerRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   * @return {void}
   */
  ngOnChanges(changes: SimpleChanges): void;
  triggerClick(event: Event): void;
  /**
   * @constructor
   */
  ngOnDestroy(): void;
  /**
   * @param {NgcIMember[]} members
   * @return {void}
   */
  onMembersAdded(members: NgcIMember[]): void;
  /**
   * @param {NgcIMember[]} members
   * @return {void}
   */
  onMembersRemoved(members: NgcIMember[]): void;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  onViewProfile(member: NgcIMember): void;
  /**
   * @param {NgcIMember[]} selectedMembers
   * @param {number[]} selected
   * @return {void}
   */
  onDone(selectedMembers: NgcIMember[], selected: number[]): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  open(event?: Event): void;
  /**
   * @param {Event=} event
   * @return {void}
   */
  close(event?: Event): void;
  /**
   * @param {PositionStrategy=} positionStrategy
   * @return {void}
   */
  updatePosition(positionStrategy?: PositionStrategy): void;
  /**
   * @return {OverlayRef}
   */
  private _createOverlayRef;
  /**
   * @return {FlexibleConnectedPositionStrategy}
   */
  private _createPositionStrategy;
  /**
   * @param {HorizontalConnectionPos} origin
   * @return {HorizontalConnectionPos}
   */
  private _fallbackX;
  /**
   * @param {VerticalConnectionPos} origin
   * @return {VerticalConnectionPos}
   */
  private _fallbackY;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberPickerDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcMemberPickerDirective, "[ngcMemberPicker]", ["ngcMemberPicker"], {
    "panelClass": {
      "alias": "panelClass";
      "required": false;
    };
    "backdropClass": {
      "alias": "backdropClass";
      "required": false;
    };
    "hasBackdrop": {
      "alias": "hasBackdrop";
      "required": false;
    };
    "closeOnClickOutside": {
      "alias": "closeOnClickOutside";
      "required": false;
    };
    "strictDisplay": {
      "alias": "strictDisplay";
      "required": false;
    };
    "offsetX": {
      "alias": "offsetX";
      "required": false;
    };
    "offsetY": {
      "alias": "offsetY";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "width": {
      "alias": "width";
      "required": false;
    };
    "minWidth": {
      "alias": "minWidth";
      "required": false;
    };
    "maxWidth": {
      "alias": "maxWidth";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "minHeight": {
      "alias": "minHeight";
      "required": false;
    };
    "maxHeight": {
      "alias": "maxHeight";
      "required": false;
    };
    "position": {
      "alias": "position";
      "required": false;
    };
    "direction": {
      "alias": "direction";
      "required": false;
    };
    "isAutoOpen": {
      "alias": "isAutoOpen";
      "required": false;
    };
    "canViewProfile": {
      "alias": "canViewProfile";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "name": {
      "alias": "name";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
    "context": {
      "alias": "context";
      "required": false;
    };
    "selected": {
      "alias": "selected";
      "required": false;
    };
    "selectedMembers": {
      "alias": "selectedMembers";
      "required": false;
    };
    "includesStatus": {
      "alias": "includesStatus";
      "required": false;
    };
    "members": {
      "alias": "members";
      "required": false;
    };
    "originX": {
      "alias": "originX";
      "required": false;
    };
    "originY": {
      "alias": "originY";
      "required": false;
    };
    "overlayX": {
      "alias": "overlayX";
      "required": false;
    };
    "overlayY": {
      "alias": "overlayY";
      "required": false;
    };
  }, {
    "opened": "opened";
    "closed": "closed";
    "added": "added";
    "removed": "removed";
    "viewDetail": "viewDetail";
    "selectedChange": "selectedChange";
    "selectedMembersChange": "selectedMembersChange";
    "backdropPress": "backdropPress";
  }, never, never, false, never>;
}
export type NgcIMemberPickerMode = 'default' | 'inline';
export declare class NgcMemberPickerComponent extends NgcMemberBase implements OnChanges {
  protected ngcToastService: NgcToastService;
  get styleWidth(): string;
  searchBox: NgcSearchBoxComponent;
  mode: NgcIMemberPickerMode;
  readonly MEMBER_STATUS: typeof NgcMember.MEMBER_STATUS;
  filteredMembers: NgcIMember[];
  close: (event?: Event) => void;
  onMembersAdded: (members: NgcIMember[]) => void;
  onMembersRemoved: (members: NgcIMember[]) => void;
  onViewProfile: (member: NgcIMember) => void;
  onDone: (selectedMembers: NgcIMember[], selected: number[]) => void;
  get useVirtualScroll(): boolean;
  /**
   * @constructor
   * @param {NgcToastService} ngcToastService
   */
  constructor(ngcToastService: NgcToastService);
  /**
   * @constructor
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  addMember(member: NgcIMember): void;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  removeMember(member: NgcIMember): void;
  /**
   * @param {NgcIMember[]} members
   * @return {void}
   */
  addMembers(members: NgcIMember[]): void;
  /**
   * @param {NgcIMember[]} members
   * @return {void}
   */
  removeMembers(members: NgcIMember[]): void;
  /**
   * @return {void}
   */
  selectAllMembers(): void;
  /**
   * @return {void}
   */
  deselectAllMembers(): void;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  toggleMember(member: NgcIMember): void;
  /**
   * @param {NgcIMember} member
   * @return {void}
   */
  viewProfile(member: NgcIMember): void;
  /**
   * @return {void}
   */
  markAsDone(): void;
  /**
   * @return {void}
   */
  markAsMembersChanges(): void;
  /**
   * @return {void}
   */
  markAsSelectedChanges(): void;
  /**
   * @return {void}
   */
  markAsSelectedMembersChanges(): void;
  /**
   * @return {void}
   */
  markAsIncludesStatusChanges(): void;
  /**
   * @return {void}
   */
  protected done(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberPickerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcMemberPickerComponent, "ngc-member-picker", never, {
    "mode": {
      "alias": "mode";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcMemberPickerModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcMemberPickerModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcMemberPickerModule, [typeof NgcMemberComponent, typeof NgcMemberListComponent, typeof NgcMemberPickerDirective, typeof NgcMemberPickerComponent], [typeof i2.ScrollingModule, typeof i5.OverlayModule, typeof i6$2.PortalModule, typeof CoreModule, typeof NgcAvatarModule, typeof NgcButtonModule, typeof NgcMenuModule, typeof NgcIconModule, typeof NgcTooltipModule, typeof NgcSearchBoxModule, typeof NgcTruncateModule, typeof NgcTabsModule, typeof NgcScrollBarModule, typeof NgcConfirmModule], [typeof NgcMemberComponent, typeof NgcMemberListComponent, typeof NgcMemberPickerDirective, typeof NgcMemberPickerComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcMemberPickerModule>;
}
export interface NgcNavigationMenuItem {
  label: string;
  trigger?: boolean;
  columns?: number;
  children?: {
    title: string;
    description: string;
    link?: string;
  }[];
}
export declare class NgcNavigationMenuComponent {
  items: NgcNavigationMenuItem[];
  activeIndex: number | null;
  isTransitioning: boolean;
  private _closeTimeout;
  onMouseEnter(index: number): void;
  onMouseLeave(): void;
  onViewportEnter(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcNavigationMenuComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcNavigationMenuComponent, "ngc-navigation-menu", never, {
    "items": {
      "alias": "items";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcNavigationMenuModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcNavigationMenuModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcNavigationMenuModule, [typeof NgcNavigationMenuComponent], [typeof i45.CommonModule], [typeof NgcNavigationMenuComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcNavigationMenuModule>;
}
export declare class NgcPaginationComponent implements OnInit {
  totalPages: number;
  disabled: boolean;
  currentPage: number;
  pageChange: EventEmitter<number>;
  visiblePages: (number | null)[];
  ngOnInit(): void;
  goToPreviousPage(): void;
  goToNextPage(): void;
  goToPage(page: number): void;
  updateVisiblePages(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPaginationComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcPaginationComponent, "ngc-pagination", never, {
    "totalPages": {
      "alias": "totalPages";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "currentPage": {
      "alias": "currentPage";
      "required": false;
    };
  }, {
    "pageChange": "pageChange";
  }, never, never, false, never>;
}
export declare class NgcPaginationModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPaginationModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcPaginationModule, [typeof NgcPaginationComponent], [typeof i45.CommonModule, typeof NgcButtonModule], [typeof NgcPaginationComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcPaginationModule>;
}
interface IPhoneCountry {
  name: string;
  code: CountryCode;
  dialCode: CountryCallingCode;
}
export interface NgcIPhoneValue {
  phone: string;
  countryCode: CountryCode;
}
export declare const Ngc_PHONE_FIELD_VALIDATION: ValidatorFn;
export declare class NgcPhoneFieldComponent implements ControlValueAccessor, OnChanges {
  get classDisabled(): boolean;
  searchBox: NgcSearchBoxComponent;
  name: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  autoFocusOn: boolean;
  autoReset: boolean;
  autoFormatNational: boolean;
  appearance: NgcIFormFieldAppearance;
  errorDisplayMode: NgcIFormFieldErrorDisplayMode;
  phoneFormControl: FormControl;
  ngModelChange: EventEmitter<NgcIPhoneValue>;
  countryCodeChanged: EventEmitter<CountryCode>;
  cleared: EventEmitter<Event>;
  input: EventEmitter<Event>;
  focus: EventEmitter<Event>;
  blur: EventEmitter<Event>;
  phone: string;
  countryCode: CountryCode;
  countryDialCode: any;
  PHONE_COUNTRIES: typeof PHONE_COUNTRIES;
  filteredPhoneCountries: typeof PHONE_COUNTRIES;
  filterPredicate: (data: IPhoneCountry, searchQuery: string) => boolean;
  private _innerValue;
  set ngModel(value: NgcIPhoneValue);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   * @param {NgcIPhoneValue} value
   */
  writeValue(value: NgcIPhoneValue): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnChange(fn: Function): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnTouched(fn: Function): void;
  /**
   * @return {void}
   */
  onChanged(): void;
  /**
   * @return {void}
   */
  onTouched(): void;
  /**
   * @param {CountryCode} code
   * @param {string} dialCode
   * @return {void}
   */
  changeCountryCode(code: CountryCode, dialCode: string): void;
  /**
   * @param {string} phone
   * @param {CountryCode} countryCode
   * @return {string}
   */
  private _getNationalPhoneNumber;
  /**
   * @param {CountryCode} countryCode
   * @return {CountryCallingCode}
   */
  private _getDialCode;
  private _onTouchedCallback;
  private _onChangeCallback;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPhoneFieldComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcPhoneFieldComponent, "ngc-phone-field", never, {
    "name": {
      "alias": "name";
      "required": false;
    };
    "label": {
      "alias": "label";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "autoFocusOn": {
      "alias": "autoFocusOn";
      "required": false;
    };
    "autoReset": {
      "alias": "autoReset";
      "required": false;
    };
    "autoFormatNational": {
      "alias": "autoFormatNational";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "errorDisplayMode": {
      "alias": "errorDisplayMode";
      "required": false;
    };
    "phoneFormControl": {
      "alias": "phoneFormControl";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
    "countryCodeChanged": "countryCodeChanged";
    "cleared": "cleared";
    "input": "input";
    "focus": "focus";
    "blur": "blur";
  }, never, never, false, never>;
}
export declare class NgcPhoneFieldModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcPhoneFieldModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcPhoneFieldModule, [typeof NgcPhoneFieldComponent], [typeof CoreModule, typeof FormModule, typeof NgcMenuModule, typeof NgcFormFieldModule, typeof NgcIconModule, typeof NgcTruncateModule, typeof NgcSearchBoxModule, typeof NgcDropdownModule, typeof NgcButtonModule, typeof NgcDividerModule], [typeof NgcPhoneFieldComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcPhoneFieldModule>;
}
declare enum progressBarMode {
  INLINE = 0,
  STATUS = 1,
  PERCENT_INLINE = 2,
  SAVINGS = 3
}
type IProgressBarMode = keyof typeof progressBarMode | progressBarMode | 'percent-inline' | 'savings';
export declare class NgcProgressBarComponent implements OnInit, OnChanges {
  get classVertical(): number;
  min: number;
  max: number;
  value: number;
  mode: IProgressBarMode;
  statusText: string;
  labelText: string;
  targetText: string;
  currentValueText: string;
  percent: number;
  progressBarMode: typeof progressBarMode;
  constructor();
  ngOnInit(): void;
  ngOnChanges(changes: SimpleChanges): void;
  private calculatePercent;
  changeRange(event: any): void;
  get isInlineMode(): boolean;
  get isStatusMode(): boolean;
  get isPercentInlineMode(): boolean;
  get isSavingsMode(): boolean;
  getModeName(): string;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcProgressBarComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcProgressBarComponent, "ngc-progress-bar", never, {
    "min": {
      "alias": "min";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "value": {
      "alias": "value";
      "required": false;
    };
    "mode": {
      "alias": "mode";
      "required": false;
    };
    "statusText": {
      "alias": "statusText";
      "required": false;
    };
    "labelText": {
      "alias": "labelText";
      "required": false;
    };
    "targetText": {
      "alias": "targetText";
      "required": false;
    };
    "currentValueText": {
      "alias": "currentValueText";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcProgressBarModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcProgressBarModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcProgressBarModule, [typeof NgcProgressBarComponent], [typeof i45.CommonModule], [typeof NgcProgressBarComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcProgressBarModule>;
}
export declare const Ngc_RANGE_INPUT_VALIDATION: ValidatorFn;
export declare class NgcRangeInputComponent implements ControlValueAccessor, OnChanges {
  private _translateService;
  label: string;
  placeholder: string;
  startRangeName: string;
  endRangeName: string;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  autoFocusOn: boolean;
  appearance: NgcIFormFieldAppearance;
  errorDisplayMode: NgcIFormFieldErrorDisplayMode;
  startRangeFormControl: FormControl;
  endRangeFormControl: FormControl;
  ngModelChange: EventEmitter<number[]>;
  startRange: number;
  endRange: number;
  private _innerValue;
  set ngModel(value: number[]);
  get maxStartRange(): number;
  get minEndRange(): number;
  /**
   * @constructor
   * @param {TranslateService} _translateService
   */
  constructor(_translateService: TranslateService);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   * @param {number[]} value
   */
  writeValue(value: number[]): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnChange(fn: Function): void;
  /**
   * @constructor
   * @param {Function} fn
   */
  registerOnTouched(fn: Function): void;
  /**
   * @return {void}
   */
  onStartRangeChanged(): void;
  /**
   * @return {void}
   */
  onEndRangeChanged(): void;
  /**
   * @return {void}
   */
  onTouched(): void;
  private _onTouchedCallback;
  private _onChangeCallback;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcRangeInputComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcRangeInputComponent, "ngc-range-input", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "startRangeName": {
      "alias": "startRangeName";
      "required": false;
    };
    "endRangeName": {
      "alias": "endRangeName";
      "required": false;
    };
    "min": {
      "alias": "min";
      "required": false;
    };
    "max": {
      "alias": "max";
      "required": false;
    };
    "step": {
      "alias": "step";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "autoFocusOn": {
      "alias": "autoFocusOn";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "errorDisplayMode": {
      "alias": "errorDisplayMode";
      "required": false;
    };
    "startRangeFormControl": {
      "alias": "startRangeFormControl";
      "required": false;
    };
    "endRangeFormControl": {
      "alias": "endRangeFormControl";
      "required": false;
    };
    "ngModel": {
      "alias": "ngModel";
      "required": false;
    };
  }, {
    "ngModelChange": "ngModelChange";
  }, never, never, false, never>;
}
export declare class NgcRangeInputModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcRangeInputModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcRangeInputModule, [typeof NgcRangeInputComponent], [typeof CoreModule, typeof FormModule, typeof NgcFormFieldModule, typeof NgcTruncateModule], [typeof NgcRangeInputComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcRangeInputModule>;
}
export declare class NgcResizablePanelComponent {
  defaultSize: number;
  minSize: number;
  maxSize: number;
  size: number;
  updateSize(_direction: 'horizontal' | 'vertical'): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizablePanelComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcResizablePanelComponent, "ngc-resizable-panel", never, {
    "defaultSize": {
      "alias": "defaultSize";
      "required": false;
    };
    "minSize": {
      "alias": "minSize";
      "required": false;
    };
    "maxSize": {
      "alias": "maxSize";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcResizableHandleComponent {
  dragStart: EventEmitter<MouseEvent | TouchEvent>;
  isDragging: boolean;
  onMouseDown(event: MouseEvent): void;
  onTouchStart(event: TouchEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizableHandleComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcResizableHandleComponent, "ngc-resizable-handle", never, {}, {
    "dragStart": "dragStart";
  }, never, never, false, never>;
}
export declare class NgcResizableContainerComponent implements AfterContentInit {
  private el;
  direction: 'horizontal' | 'vertical';
  panels: QueryList<NgcResizablePanelComponent>;
  handles: QueryList<NgcResizableHandleComponent>;
  private activeDragIndex;
  private startPosition;
  private startSizes;
  constructor(el: ElementRef);
  ngAfterContentInit(): void;
  private initializeSizes;
  private onDragStart;
  private onDragMove;
  private getPosition;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizableContainerComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcResizableContainerComponent, "ngc-resizable-container", never, {
    "direction": {
      "alias": "direction";
      "required": false;
    };
  }, {}, ["panels", "handles"], ["*"], false, never>;
}
export declare class NgcResizeModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcResizeModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcResizeModule, [typeof NgcResizableContainerComponent, typeof NgcResizablePanelComponent, typeof NgcResizableHandleComponent], [typeof i45.CommonModule], [typeof NgcResizableContainerComponent, typeof NgcResizablePanelComponent, typeof NgcResizableHandleComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcResizeModule>;
}
export declare class NgcSkeletonComponent {
  width: string | number;
  height: string | number;
  borderRadius: string;
  circle: boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSkeletonComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcSkeletonComponent, "ngc-skeleton", never, {
    "width": {
      "alias": "width";
      "required": false;
    };
    "height": {
      "alias": "height";
      "required": false;
    };
    "borderRadius": {
      "alias": "borderRadius";
      "required": false;
    };
    "circle": {
      "alias": "circle";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcSkeletonModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcSkeletonModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcSkeletonModule, [typeof NgcSkeletonComponent], [typeof i45.CommonModule, typeof i1.FormsModule], [typeof NgcSkeletonComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcSkeletonModule>;
}
export declare class NgcCdkTableComponent<T> extends CdkTable<T> implements OnChanges {
  get classScrolling(): boolean;
  scrolling$: Observable<ScrollEvent>;
  isScrollingX: boolean;
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {XLSX.Table2SheetOpts} options
   * @return {XLSX.WorkSheet}
   */
  export(options?: XLSX.Table2SheetOpts): XLSX.WorkSheet;
  /**
   * @param {string} filename
   * @param {boolean} isOnlyHeader
   * @return {void}
   */
  download(filename: string, isOnlyHeader?: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcCdkTableComponent<any>, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcCdkTableComponent<any>, "table[ngcCdkTable]", never, {
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcCdkTableDataSource<T> extends DataSource<T> {
  readonly _data$: BehaviorSubject<T[]>;
  get data(): T[];
  set data(data: T[]);
  /**
   * @return {Observable}
   */
  connect(): Observable<any[]>;
  /**
   * @return {void}
   */
  disconnect(): void;
}
export type NgcIExcelCellType = 'website' | 'email' | 'number' | 'phone' | 'date' | 'list' | 'strict-list' | 'multi-list';
export declare class NgcExcelCellComponent implements OnInit, AfterViewInit {
  private _cdRef;
  private _elementRef;
  private _translateService;
  private _dateTimeConfig;
  get styleWidth(): string;
  get styleMinWidth(): string;
  get styleHeight(): string;
  get styleMinHeight(): string;
  get classFocusing(): boolean;
  get classValid(): boolean;
  get classInvalid(): boolean;
  get classDirty(): boolean;
  get classPristine(): boolean;
  get classTouched(): boolean;
  get classUntouched(): boolean;
  get classEnable(): boolean;
  get classDisabled(): boolean;
  get classHasList(): boolean;
  get attrDataError(): string;
  excellCellContent: ElementRef<any>;
  searchBox: NgcSearchBoxComponent;
  list: any[];
  textContent: string;
  itemSize: number;
  required: boolean;
  readonly: boolean;
  focusing: boolean;
  type: NgcIExcelCellType;
  textContentChange: EventEmitter<string>;
  focus: EventEmitter<Event>;
  blur: EventEmitter<Event>;
  width: string;
  height: string;
  error: string;
  isInvalid: boolean;
  formControl: FormControl;
  private _translateMessages;
  get rowIndex(): number;
  get columnIndex(): number;
  get filteredList(): any[];
  get useVirtualScroll(): boolean;
  /**
   * @constructor
   * @param {ChangeDetectorRef} _cdRef
   * @param {ElementRef} _elementRef
   * @param {TranslateService} _translateService
   * @param {DateTimeConfig} _dateTimeConfig
   */
  constructor(_cdRef: ChangeDetectorRef, _elementRef: ElementRef, _translateService: TranslateService, _dateTimeConfig: DateTimeConfig);
  /**
   * @constructor
   */
  ngOnInit(): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  /**
   * @param {ResizeEvent} event
   * @return {void}
   */
  onResizing(event: ResizeEvent): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onInput(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onKeydown(event: KeyboardEvent): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onFocus(event: Event): void;
  /**
   * @param {Event} event
   * @return {void}
   */
  onBlur(event: Event): void;
  /**
   * @param {WGCIDatePickerPickedEvent} event
   * @return {void}
   */
  onDatePicked(event: NgcIDatePickerPickedEvent): void;
  /**
   * @param {string} textContent
   * @return {void}
   */
  setTextContent(textContent: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelCellComponent, [null, null, null, {
    optional: true;
  }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelCellComponent, "td[ngcExcelCell]", never, {
    "list": {
      "alias": "list";
      "required": false;
    };
    "textContent": {
      "alias": "textContent";
      "required": false;
    };
    "itemSize": {
      "alias": "itemSize";
      "required": false;
    };
    "required": {
      "alias": "required";
      "required": false;
    };
    "readonly": {
      "alias": "readonly";
      "required": false;
    };
    "focusing": {
      "alias": "focusing";
      "required": false;
    };
    "type": {
      "alias": "type";
      "required": false;
    };
  }, {
    "textContentChange": "textContentChange";
    "focus": "focus";
    "blur": "blur";
  }, never, ["*"], false, never>;
}
export declare class NgcExcelTableComponent implements AfterContentInit {
  private _elementRef;
  excelCellList: QueryList<NgcExcelCellComponent>;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   */
  constructor(_elementRef: ElementRef);
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  /**
   * @param {XLSX.Table2SheetOpts} options
   * @return {XLSX.WorkSheet}
   */
  export(options?: XLSX.Table2SheetOpts): XLSX.WorkSheet;
  /**
   * @param {string} filename
   * @param {boolean} isOnlyHeader
   * @return {void}
   */
  download(filename: string, isOnlyHeader?: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelTableComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelTableComponent, "table[ngcExcelTable]", never, {}, {}, ["excelCellList"], ["*"], false, never>;
}
export declare class NgcExcelHeaderCellComponent {
  get styleWidth(): string;
  get styleMinWidth(): string;
  get styleHeight(): string;
  get styleMinHeight(): string;
  get classRequired(): boolean;
  required: boolean;
  width: string;
  height: string;
  /**
   * @param {ResizeEvent} event
   * @return {void}
   */
  onResizing(event: ResizeEvent): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcExcelHeaderCellComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcExcelHeaderCellComponent, "th[ngcExcelHeaderCell], td[ngcExcelHeaderCell]", never, {
    "required": {
      "alias": "required";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcTableComponent implements OnChanges {
  private _elementRef;
  private _cdRef;
  get classScrolling(): boolean;
  scrolling$: Observable<ScrollEvent>;
  isScrollingX: boolean;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ChangeDetectorRef} _cdRef
   */
  constructor(_elementRef: ElementRef, _cdRef: ChangeDetectorRef);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @param {XLSX.Table2SheetOpts} options
   * @return {XLSX.WorkSheet}
   */
  export(options?: XLSX.Table2SheetOpts): XLSX.WorkSheet;
  /**
   * @param {string} filename
   * @param {boolean} isOnlyHeader
   * @return {void}
   */
  download(filename: string, isOnlyHeader?: boolean): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTableComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTableComponent, "table[ngcTable]", never, {
    "scrolling$": {
      "alias": "scrolling$";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NGCTableModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NGCTableModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NGCTableModule, [typeof NgcTableComponent, typeof NgcCdkTableComponent, typeof NgcExcelTableComponent, typeof NgcExcelHeaderCellComponent, typeof NgcExcelCellComponent], [typeof i6.CdkTableModule, typeof i7.ResizableModule, typeof i7.ResizableDirective, typeof i7.ResizeHandleDirective, typeof i2.ScrollingModule, typeof CoreModule, typeof FormModule, typeof NgcMenuModule, typeof NgcIconModule, typeof NgcButtonModule, typeof NgcSearchBoxModule, typeof NgcDatePickerModule, typeof NgcTruncateModule, typeof NgcTooltipModule], [typeof i6.CdkTableModule, typeof NgcTableComponent, typeof NgcCdkTableComponent, typeof NgcExcelTableComponent, typeof NgcExcelHeaderCellComponent, typeof NgcExcelCellComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NGCTableModule>;
}
export declare class NgcTagComponent implements OnChanges, AfterViewInit {
  private _elementRef;
  private _contrastPipe;
  get styleColor(): string;
  get styleLabelColor(): string;
  get classMinimize(): boolean;
  label: string;
  labelColor: string;
  color: string;
  minimize: boolean;
  truncate: boolean;
  truncateLimitLine: number;
  private _bkLabelColor;
  get nativeElement(): HTMLElement;
  /**
   * @constructor
   * @param {ElementRef} _elementRef
   * @param {ContrastPipe} _contrastPipe
   */
  constructor(_elementRef: ElementRef, _contrastPipe: ContrastPipe);
  /**
   * @constructor
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterViewInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTagComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTagComponent, "ngc-tag", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "labelColor": {
      "alias": "labelColor";
      "required": false;
    };
    "color": {
      "alias": "color";
      "required": false;
    };
    "minimize": {
      "alias": "minimize";
      "required": false;
    };
    "truncate": {
      "alias": "truncate";
      "required": false;
    };
    "truncateLimitLine": {
      "alias": "truncateLimitLine";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcTagListComponent extends NgcBlockTruncateDirective implements OnChanges, AfterContentInit {
  get classWrapping(): boolean;
  tags: QueryList<NgcTagComponent>;
  tagColor: string;
  wrapping: boolean;
  moreMenu: NgcMenuComponent;
  showMore: EventEmitter<void>;
  get isFixedLimit(): boolean;
  /**
   * @constructor
   * @overloading
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void;
  /**
   * @constructor
   */
  ngAfterContentInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTagListComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTagListComponent, "ngc-tag-list", never, {
    "tagColor": {
      "alias": "tagColor";
      "required": false;
    };
    "wrapping": {
      "alias": "wrapping";
      "required": false;
    };
    "moreMenu": {
      "alias": "moreMenu";
      "required": false;
    };
  }, {
    "showMore": "showMore";
  }, ["tags"], ["*"], false, never>;
}
export declare class NgcTagModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTagModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTagModule, [typeof NgcTagListComponent, typeof NgcTagComponent], [typeof CoreModule, typeof NgcTruncateModule, typeof NgcTooltipModule, typeof NgcMenuModule], [typeof NgcTagListComponent, typeof NgcTagComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTagModule>;
}
export declare class NgcTextareaComponent implements OnInit, OnDestroy {
  label: string;
  placeholder: string;
  rows: number;
  cols: number;
  appearance: 'default' | 'filled' | 'underlined' | 'borderless';
  resize: 'vertical' | 'horizontal' | 'both' | 'none';
  debounceTime: number;
  disabled: boolean;
  invalid: boolean;
  showCounter: boolean;
  maxLength: number;
  errorMessage: string;
  valueChange: EventEmitter<string>;
  message: string;
  private debouncedEmit;
  get isInvalid(): boolean;
  ngOnInit(): void;
  ngOnDestroy(): void;
  contentChanged(newContent: string): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTextareaComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTextareaComponent, "ngc-textarea", never, {
    "label": {
      "alias": "label";
      "required": false;
    };
    "placeholder": {
      "alias": "placeholder";
      "required": false;
    };
    "rows": {
      "alias": "rows";
      "required": false;
    };
    "cols": {
      "alias": "cols";
      "required": false;
    };
    "appearance": {
      "alias": "appearance";
      "required": false;
    };
    "resize": {
      "alias": "resize";
      "required": false;
    };
    "debounceTime": {
      "alias": "debounceTime";
      "required": false;
    };
    "disabled": {
      "alias": "disabled";
      "required": false;
    };
    "invalid": {
      "alias": "invalid";
      "required": false;
    };
    "showCounter": {
      "alias": "showCounter";
      "required": false;
    };
    "maxLength": {
      "alias": "maxLength";
      "required": false;
    };
    "errorMessage": {
      "alias": "errorMessage";
      "required": false;
    };
  }, {
    "valueChange": "valueChange";
  }, never, never, false, never>;
}
export declare class NgcTextareaModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTextareaModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTextareaModule, [typeof NgcTextareaComponent], [typeof i45.CommonModule, typeof i1.FormsModule], [typeof NgcTextareaComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTextareaModule>;
}
export declare class NgcTimelineComponent {
  alternate: boolean;
  horizontal: boolean;
  get classAlternate(): boolean;
  get classHorizontal(): boolean;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTimelineComponent, "ngc-timeline", never, {
    "alternate": {
      "alias": "alternate";
      "required": false;
    };
    "horizontal": {
      "alias": "horizontal";
      "required": false;
    };
  }, {}, never, ["*"], false, never>;
}
export declare class NgcTimelineDotDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineDotDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTimelineDotDirective, "[ngcTimelineDot]", never, {}, {}, never, never, false, never>;
}
export declare class NgcTimelineSideDirective {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineSideDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<NgcTimelineSideDirective, "[ngcTimelineSide]", never, {}, {}, never, never, false, never>;
}
export declare class NgcTimelineItemComponent {
  timeline: NgcTimelineComponent;
  color: string;
  time: string;
  selected: boolean;
  get classActive(): boolean;
  customDot?: NgcTimelineDotDirective;
  constructor(timeline: NgcTimelineComponent);
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineItemComponent, [{
    optional: true;
  }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTimelineItemComponent, "ngc-timeline-item", never, {
    "color": {
      "alias": "color";
      "required": false;
    };
    "time": {
      "alias": "time";
      "required": false;
    };
    "selected": {
      "alias": "selected";
      "required": false;
    };
  }, {}, ["customDot"], ["[ngcTimelineSide]", "[ngcTimelineDot]", "*"], false, never>;
}
export declare class NgcTimelineModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTimelineModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTimelineModule, [typeof NgcTimelineComponent, typeof NgcTimelineItemComponent, typeof NgcTimelineDotDirective, typeof NgcTimelineSideDirective], [typeof i45.CommonModule], [typeof NgcTimelineComponent, typeof NgcTimelineItemComponent, typeof NgcTimelineDotDirective, typeof NgcTimelineSideDirective]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTimelineModule>;
}
export interface NgcTreeNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  loading?: boolean;
  children?: NgcTreeNode[];
  expanded?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  selectable?: boolean;
  checked?: boolean;
  selected?: boolean;
}
export declare abstract class NgcTreeService {
  abstract draggable: boolean;
  abstract dragNode: NgcTreeNode | null;
  abstract data: NgcTreeNode[];
  abstract dataChange: EventEmitter<NgcTreeNode[]>;
  abstract nodeExpand: EventEmitter<NgcTreeNode>;
  abstract cdr: ChangeDetectorRef;
  abstract moveNode(dragNode: NgcTreeNode, targetNode: NgcTreeNode): void;
  abstract onNodeSelected(node: NgcTreeNode): void;
  abstract onNodeChecked(node: NgcTreeNode): void;
}
export declare class NgcTreeComponent implements NgcTreeService {
  cdr: ChangeDetectorRef;
  data: NgcTreeNode[];
  checkable: boolean;
  multiple: boolean;
  draggable: boolean;
  loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;
  nodeExpand: EventEmitter<NgcTreeNode>;
  nodeSelect: EventEmitter<NgcTreeNode>;
  nodeCheck: EventEmitter<NgcTreeNode[]>;
  nodeDrop: EventEmitter<{
    dragNode: NgcTreeNode;
    dropNode: NgcTreeNode;
  }>;
  dataChange: EventEmitter<NgcTreeNode[]>;
  dragNode: NgcTreeNode | null;
  constructor(cdr: ChangeDetectorRef);
  onNodeSelected(node: NgcTreeNode): void;
  onNodeChecked(node: NgcTreeNode): void;
  private syncParentState;
  private checkChildren;
  private clearSelection;
  private getCheckedNodes;
  moveNode(dragNode: NgcTreeNode, dropNode: NgcTreeNode): void;
  private removeNode;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTreeComponent, never>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTreeComponent, "ngc-tree", never, {
    "data": {
      "alias": "data";
      "required": false;
    };
    "checkable": {
      "alias": "checkable";
      "required": false;
    };
    "multiple": {
      "alias": "multiple";
      "required": false;
    };
    "draggable": {
      "alias": "draggable";
      "required": false;
    };
    "loadData": {
      "alias": "loadData";
      "required": false;
    };
  }, {
    "nodeExpand": "nodeExpand";
    "nodeSelect": "nodeSelect";
    "nodeCheck": "nodeCheck";
    "nodeDrop": "nodeDrop";
    "dataChange": "dataChange";
  }, never, never, false, never>;
}
export declare class NgcTreeNodeComponent {
  treeComponent: NgcTreeService;
  node: NgcTreeNode;
  checkable: boolean;
  loadData: (node: NgcTreeNode) => Promise<void> | Observable<void>;
  constructor(treeComponent: NgcTreeService);
  toggleExpand(event: MouseEvent): void;
  onSelect(event: MouseEvent): void;
  onCheck(): void;
  isIndeterminate(): boolean;
  private hasCheckedOrIndeterminateChild;
  isDragOver: boolean;
  onDragStart(event: DragEvent): void;
  onDragOver(event: DragEvent): void;
  onDragLeave(): void;
  onDrop(event: DragEvent): void;
  onDragEnd(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTreeNodeComponent, [{
    optional: true;
  }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<NgcTreeNodeComponent, "ngc-tree-node", never, {
    "node": {
      "alias": "node";
      "required": false;
    };
    "checkable": {
      "alias": "checkable";
      "required": false;
    };
    "loadData": {
      "alias": "loadData";
      "required": false;
    };
  }, {}, never, never, false, never>;
}
export declare class NgcTreeModule {
  static ɵfac: i0.ɵɵFactoryDeclaration<NgcTreeModule, never>;
  static ɵmod: i0.ɵɵNgModuleDeclaration<NgcTreeModule, [typeof NgcTreeComponent, typeof NgcTreeNodeComponent], [typeof i45.CommonModule, typeof i1.FormsModule, typeof NgcCheckboxModule, typeof NgcIconModule], [typeof NgcTreeComponent, typeof NgcTreeNodeComponent]>;
  static ɵinj: i0.ɵɵInjectorDeclaration<NgcTreeModule>;
}
export type { NgcIToastConfig };