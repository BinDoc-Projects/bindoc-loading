import { UserListModule, UserDialogModule } from '@emergency/user';
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UserStoreModule, UserStoreConfig, AuthStoreModule, AuthStoreConfig } from "@bindoc/config-store";

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule,
    UserListModule,
    UserDialogModule,
    UserStoreModule,
    AuthStoreModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }