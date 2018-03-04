# @bindoc/loading

A quick way to show different templates based on the state of a async task.

## Install

```bash
$ yarn add @bindoc/loading
// OR
$ npm install --save @bindoc/loading
```

## Usage

`bd-loading` takes a async task as input.
If the async task is `undefined` or `null` the `onInit` content is shown. 
While pending the container shows the content of the `onLoad` and after finishing (independent of success/error) the content of `onFinish`.

```typescript
import {Component} from '@angular/core';

@Component({
  template: `
    <bd-loading [waitFor]="asyncTask">
      <div onInit>
        <button (click)="startAsyncTask()">Start</button>
      </div> 
      <div onLoad>
        <span>Finished loading</span>
      </div> 
      <div onFinish>
        <span>Finished loading</span>
      </div>
    </bd-loading>
  `
})
export class SomeComponent {

  public asyncTask: Promise<any>;

  public startAsyncTask(): void {
    this.asyncTask = new Promise((resolve) => {
      setTimeout(() =>  resolve(), 3000);
    });
  }
}
```
