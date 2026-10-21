import { ɵComponentDef, ɵComponentType, ɵDirectiveDef, ɵDirectiveType } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';

// TODO: move models to their own file.

// We need this interface override the readonly keyword
// on the properties that we want to re-assign.
export interface ComponentDef<T> extends ɵComponentDef<T> {
	factory: FactoryFn<T>;
	onDestroy: (() => void) | null;
}

export interface DirectiveDef<T> extends ɵDirectiveDef<T> {
	factory: FactoryFn<T>;
	onDestroy: (() => void) | null;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type FactoryFn<T> = {
	<U extends T>(t: ComponentType<U>): U;
	(t?: undefined): T;
};

export type ComponentType<T> = ɵComponentType<T>;
export type DirectiveType<T> = ɵDirectiveType<T>;

/**
 * Class decorator to automatically unsubscribe in component classes on Angular 9 with Ivy.
 *
 * @return {Function}
 * @example
 * ```ts
 * @Unsubscriber()
 * @Component({})
 * export class MyContainerComponent {
 *   ngOnInit(): void {
 *    this.observable$.pipe(takeUntil((this as any).destroyed$)).subscribe();
 *   }
 *
 *   ngOnDestroy(): void {
 *    // Optionally we can do anything we want here.
 *   }
 * }
 * ```
 *
 * Only 1 condition: we need to access `this.destroyed$` as `(this as any).destroyed$`.
 * `ngOnDestroy(): void {}` does not have to be present in the component class! :)
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function Unsubscriber(): Function {
	return ( cmpType: ComponentType<any> | DirectiveType<any> ) => {
		const cmp: ComponentDef<typeof cmpType> | DirectiveDef<typeof cmpType> = getComponentProp( cmpType );
		const cmpOndestroy: (() => void) | null = cmp.onDestroy;

		cmpType.prototype.destroyed$ = new Subject<void>();

		// This cannot be an arrow function
		// So that we get the correct context of `this`.
		cmp.onDestroy = function() {
			( this as any ).destroyed$.next();
			/**
			 * Normally you would pass the method arguments to the function:
			 * ```ts
			 * cmpOndestroy.apply(this, arguments);
			 * ```
			 * But ngOnDestroy() does not take any arguments.
			 */
			cmpOndestroy !== null && cmpOndestroy.apply( this );
		};
	};
}

export function getComponentProp<T, K extends keyof T>( t: ComponentType<T> | DirectiveType<T> ): T[K] {
	if ( _.has( t, 'ɵcmp' ) ) return ( t as ComponentType<T> ).ɵcmp as T[K];
	if ( _.has( t, 'ɵdir' ) ) return ( t as DirectiveType<T> ).ɵdir as T[K];

	throw new Error( 'No Angular property found for ' + t.name );
}
