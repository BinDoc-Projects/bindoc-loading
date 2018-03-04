import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Demo app</h1>
    <div>
      <h2>Simple demo</h2>
      <bd-loading [waitFor]="asyncTaskOne">
        <div onLoad>
          <loading-template>
          </loading-template>
        </div>
        <div onFinish>
          <span>Finished loading</span>
        </div>
      </bd-loading>
    </div>
    <div>
      <h2>Demo with init state</h2>
      <bd-loading [waitFor]="asyncTaskTwo">
        <div onInit>
          <button (click)="doAsyncTask()">
            <span>Do async task</span>
          </button>
        </div>
        <div onLoad>
          <loading-template>
          </loading-template>
        </div>
        <div onFinish>
          <button (click)="reset()">
            <span>Reset</span>
          </button>
        </div>
      </bd-loading>
    </div>
  `,
  styles: [`

  `]
})
export class AppComponent {

  public asyncTaskOne: Promise<any> = null;
  public asyncTaskTwo: Promise<any> = null;

  constructor() {
    this.asyncTaskOne = this.getAsynctask();
  }

  public doAsyncTask() {
    this.asyncTaskTwo = this.getAsynctask();
  }

  public reset() {
    this.asyncTaskTwo = null;
  }

  private getAsynctask(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  }
}

