import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { StatesTableComponent } from '../app/components/tables/rxjs/bootstrap/states.component';

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
  }
];

