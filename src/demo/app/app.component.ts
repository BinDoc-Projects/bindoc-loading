import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Demo app</h1>
    <bd-loading [waitFor]="asyncTask">
      <loading-template onLoad>
      </loading-template>
      <div onFinish>
        <span>Finished loading</span>
      </div>
    </bd-loading>
  `,
  styles: [`

  `]
})
export class AppComponent implements OnInit {

  public asyncTask: Promise<any>;

  ngOnInit(): void {
    this.asyncTask = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }
}

