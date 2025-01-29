import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    loadComponent: () => import('./components/users-list/users-list.component')
      .then(m => m.UsersListComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'roles',
    loadComponent: () => import('./components/roles-list/roles-list.component')
      .then(m => m.RolesListComponent),
    canActivate: [AuthGuard],
  },
];