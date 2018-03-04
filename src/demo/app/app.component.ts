import { Component } from '@angular/core';
import {BdNavigationConfig, BdNavigationLink} from "@bindoc/material";

@Component({
  selector: 'demo-app',
  template: `
    <bd-navigation  [config]="navConfig"
                    (logoutClicked)="onLogout()">
      <div bd-nav-toolbar
           style="color: rgba(0,0,0,0.87)">
      </div>
      <ng-container bd-nav-body>
        <router-outlet></router-outlet>
      </ng-container>
    </bd-navigation>
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  public navConfig: BdNavigationConfig = new BdNavigationConfig(
    '',
    [
      new BdNavigationLink('DataSet', ['data-set']),
    ]
  );
}

