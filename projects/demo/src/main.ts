import 'zone.js';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

if (TranslateService?.prototype) {
  if (!('setDefaultLang' in TranslateService.prototype)) {
    (TranslateService.prototype as any).setDefaultLang = function (lang: string) {
      return this.setFallbackLang(lang);
    };
  }
  if (!('getDefaultLang' in TranslateService.prototype)) {
    (TranslateService.prototype as any).getDefaultLang = function () {
      return this.getFallbackLang();
    };
  }
  if (!Object.getOwnPropertyDescriptor(TranslateService.prototype, 'defaultLang')) {
    Object.defineProperty(TranslateService.prototype, 'defaultLang', {
      get() {
        return this.getFallbackLang();
      },
      configurable: true,
    });
  }

  const originalUse = TranslateService.prototype.use;
  TranslateService.prototype.use = function (lang: string) {
    const obs$ = originalUse.call(this, lang);
    return new Observable((sub) => {
      return obs$.subscribe({
        next: (val: any) => {
          sub.next(val);
          sub.complete();
        },
        error: (err: any) => sub.error(err),
        complete: () => sub.complete(),
      });
    });
  };
}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

