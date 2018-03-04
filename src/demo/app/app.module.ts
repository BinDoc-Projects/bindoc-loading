import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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

