import { Routes } from '@angular/router';
import { GitAuthComponent } from './modules/git-auth/git-auth.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.routes').then(m => m.routes)
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./modules/product/product.routes').then(m => m.routes)
  },
  {
    path: 'auth/callback', component: GitAuthComponent
  }
];
