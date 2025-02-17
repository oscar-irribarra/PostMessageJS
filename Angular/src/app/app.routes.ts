import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./pages/counter/counter.component').then(
        (m) => m.CounterComponent
      ),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./pages/todo/todo.component').then((m) => m.TodoComponent),
  },
  {
    path: '**',
    redirectTo: 'counter',
  },
];
