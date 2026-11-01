import { Routes } from '@angular/router';
import { GuidelineComponent } from './guideline/guideline.component';
import { ContactComponent } from './guideline/partial/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: GuidelineComponent },
  { path: 'sketch', loadChildren: () => import('./sketch/sketch.module').then(m => m.SketchModule) },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'components' },
];
