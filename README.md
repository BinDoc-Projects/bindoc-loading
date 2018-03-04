# @bindoc/loading

A quick way to show different templates based on the state of a async task.

## Install

```bash
$ yarn add @bindoc/loading
// OR
$ npm install --save @bindoc/loading
```

## Usage

`bd-loading` takes a async task as input. While pending the container shows the content of the `onLoad` and after finishing (independent of success/error) the content of `onFinish`.

```typescript
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Demo app</h1>
    <bd-loading [waitFor]="asyncTask">
      <div onLoad>
        <span>Finished loading</span>
      </div> 
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
      setTimeout(() =>  resolve(), 3000);
    });
  }
}
```
