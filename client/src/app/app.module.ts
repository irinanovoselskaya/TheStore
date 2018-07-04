import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatDividerModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item/item.service';

const routes: Routes = [
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: '',
    redirectTo: '/item',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
  ],
  providers: [
    ItemService,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
