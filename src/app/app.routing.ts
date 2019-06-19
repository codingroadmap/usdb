import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { StatesTableComponent } from '../app/components/tables/rxjs/bootstrap/states.component';
import { StatesSubscribeTable } from './components/tables/subscribe/bootstrap/states.component';
import { StatesSubscribeMaterial } from './components/tables/subscribe/material/states.component';
import { StatePromisePrimeNG } from './components/tables/subscribe/primeng/states.component';

export const AppRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rxjs/bootstrap/states',
    component: StatesTableComponent
  },
  {
    path: 'subscription/bootstrap/states',
    component: StatesSubscribeTable
  },
  {
    path: 'subscription/material/states',
    component: StatesSubscribeMaterial
  },
  {
    path: 'promise/primeng/states',
    component: StatePromisePrimeNG
  }
];

