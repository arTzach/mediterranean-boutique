import { Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'olive-oil',
    loadComponent: () =>
      import('./pages/olive-oil/olive-oil.component').then(
        (mod) => mod.OliveOilComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (mod) => mod.AboutUsComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./pages/contact-us/contact-us.component').then(
        (mod) => mod.ContactUsComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
