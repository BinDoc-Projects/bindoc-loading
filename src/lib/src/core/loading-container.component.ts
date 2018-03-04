import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange} from "@angular/core";
import {BdLoadingItem} from "./loading-item.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'bd-loading',
  template: `
    <div>
      <ng-container *ngIf="!loaded">
        <ng-content select="[onLoad]">
        </ng-content>
      </ng-container>
      <ng-container *ngIf="loaded">
        <ng-content select="[onFinish]">
        </ng-content>
      </ng-container>
    </div>
  `,
  styles: [``]
})
export class BdLoadingContainerComponent implements OnInit, OnChanges, OnDestroy {

  @Input() waitFor: Promise<any>;

  public loaded: boolean = false;

  private _item: BdLoadingItem;
  private _itemListener: Subscription;

  ngOnInit(): void {
    this.loaded = !this.waitFor;
  }

  ngOnChanges(changes: any): void {
    if(changes.waitFor) {
      this.onWaitForChange(changes.waitFor);
    }
  }

  ngOnDestroy(): void {
    if(!!this._item) {
      this._item.destroy();
      this._itemListener.unsubscribe();
    }
  }

  private onWaitForChange(change: SimpleChange) {
    if(!!change.currentValue) {
      this.loaded = false;

      if(!!this._item) {
        this._item.destroy();
        this._itemListener.unsubscribe();
      }

      this._item = new BdLoadingItem(change.currentValue);
      this._itemListener = this._item.finished.subscribe(
        () => this.loaded = true,
        () => this.loaded = true,
      );
    }
  }
}
