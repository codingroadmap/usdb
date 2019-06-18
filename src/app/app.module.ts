import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatesTableComponent } from './components/tables/states.component';
import { NgbdSortableHeader } from './directives/sortable.directive';

@NgModule({
  declarations: [
    AppComponent,
    StatesTableComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    StatesTableComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    StatesTableComponent
  ]
})
export class AppModule { }
