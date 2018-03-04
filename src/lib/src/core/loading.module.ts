import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BdLoadingContainerComponent} from "./loading-container.component";

export * from './loading-container.component';
export * from './loading-item.model';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BdLoadingContainerComponent
  ],
  exports: [
    BdLoadingContainerComponent
  ],
  providers: []
})
export class BdLoadingModule {

}
