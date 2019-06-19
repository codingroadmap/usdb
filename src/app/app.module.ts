import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StatesTableComponent } from './components/tables/rxjs/bootstrap/states.component';
import { NgbdSortableHeader } from './directives/sortable.directive';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { MaterialBundleModule } from './material-bundle.module';
import { GraphQLModule } from './graphql.module';
import { StatesSubscribeTable } from './components/tables/subscribe/bootstrap/states.component';
import { StatesSubscribeMaterial } from './components/tables/subscribe/material/states.component';
import { DataViewModule } from 'primeng/dataview';
import { StatePromisePrimeNG } from './components/tables/subscribe/primeng/states.component';
import { DataGridModule } from 'primeng/datagrid';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StatesTableComponent,
    StatesSubscribeTable,
    StatesSubscribeMaterial,
    StatePromisePrimeNG,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialBundleModule,
    DataViewModule,
    DataGridModule,
    PanelModule,
    DialogModule,
    GraphQLModule
  ],
  exports: [
    HeaderComponent,
    StatesTableComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent
  ]
})
export class AppModule { }
