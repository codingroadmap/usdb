import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesTableComponent } from './components/tables/states.component';

const routes: Routes = [
  {
    path: '',
    component: StatesTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
