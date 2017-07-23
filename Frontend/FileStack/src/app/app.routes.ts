/**
 * Created by johnny on 23/07/2017.
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UploadComponent } from './upload.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'upload', component: UploadComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];
