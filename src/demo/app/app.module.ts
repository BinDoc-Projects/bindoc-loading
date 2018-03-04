import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoadingTemplateComponent} from "./loading-template.component";
import {BdLoadingModule} from "loading";

@NgModule({
  imports: [
    BrowserModule,
    BdLoadingModule
  ],
  declarations: [
    AppComponent,
    LoadingTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor() {
  }


}

