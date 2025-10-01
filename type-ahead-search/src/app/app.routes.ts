import { Routes } from '@angular/router';
import { TypeAhead } from './components/type-ahead/type-ahead';

export const routes: Routes = [
  { path: 'search', component: TypeAhead },
  { path: '**', pathMatch: 'full', redirectTo: 'search' },
];
