import { Routes } from '@angular/router';
import { Board } from './components/board/board';

export const routes: Routes = [
  { path: 'board', component: Board },
  { path: '**', pathMatch: 'full', redirectTo: 'board' },
];
