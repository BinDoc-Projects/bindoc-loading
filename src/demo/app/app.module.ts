import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BdNavigationModule} from "@bindoc/material";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BdNavigationModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
  }


}

