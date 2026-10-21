import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { routes } from './app.routes';
import { GuidelineModule } from './guideline/guideline.module';
import { CoreModule, I18nTranslateModule } from '@app/@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom(
      GuidelineModule,
      CoreModule,
      TranslateModule.forRoot(),
      I18nTranslateModule,
      BrowserAnimationsModule
    ),
    provideAnimations()
  ],
};
