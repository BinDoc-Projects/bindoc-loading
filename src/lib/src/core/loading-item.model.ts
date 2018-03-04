import {Subject} from "rxjs/Subject";

export class BdLoadingItem {

  public finished: Subject<boolean> = new Subject();

  private subscription: Promise<any>;

  constructor(
    public value: Promise<any>
  ){
    this.subscribe();
  }

  public destroy() {
    this.finished.unsubscribe();
    this.finished = null;
  }

  private subscribe() {
    this.subscription = this.value
      .then(() => this.onChanges(true))
      .catch((error: any) => {
        console.log(error);
        this.onChanges(false);
      });
  }

  private onChanges(success: boolean) {
    if(this.finished && this.finished instanceof Subject) {
      this.finished.next(success)
    }
  }
}
