import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'DayCare Manager — Gestión Integral para Guarderías' },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
