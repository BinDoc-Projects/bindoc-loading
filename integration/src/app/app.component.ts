import { AuthStoreConfig } from '@bindoc/config-store';
import { UserStoreConfig } from '@bindoc/config-store';
import { User, UserDialogService } from '@emergency/user';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';


@Component({
  selector: 'demo-app',
  template: `
    <div>
      <h1>KonfigurationHue</h1>
      <span>Auth Token</span>
      <textarea (change)="setToken()" [(ngModel)]="token">
      </textarea>
    </div>
    <hr />
    <div class="">
      <button (click)="openUserDialog()">Dialog öffnen</button>
    </div>
    <hr />
    <div class="user-list-wrapper">
      <span>Zuletzt geklickter Nutzer: </span>
      <span>{{ clickedUser }}</span>
    </div>
    <div class="user-list-wrapper">
      <user-list (userClicked)="onUserClicked($event)"></user-list>
    </div>
  `,
  styles: [`
    .user-list-wrapper { width: 500px; }
  `]
})
export class AppComponent {
  
  public token: string = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1OGRiY2NiM2U4ODhhYjAwMDFjZGFiZDciLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImV4cCI6MTQ5NDM2MjMwMn0.mPm7-WQFMNHv4stGJFobJ7CbyJcsrDHuFW5LlzDEYAG8tKJ7jqdlHB8GcqIizmtt4GoanSiULyW568J_vL2zyQ';
  public clickedUser: string;

  constructor(private dialogService: UserDialogService) {
   this.setToken();

   let userConfig = new UserStoreConfig('https://patientservice.bindoc-db.de/api/users/');
   userConfig.save();
   
   let authConfig = new AuthStoreConfig('bdAuthToken', 'https://patientservice.bindoc-db.de/api/users/');
   authConfig.save();
  }

  setToken() {
    localStorage.setItem('bdAuthToken', this.token);
  }

  openUserDialog() {
    let res = this.dialogService.selectDialog();

    res.subscribe(
      (res: any) => console.log(res),
      (error: any) => console.log(error)
    )
  }

  onUserClicked(user: User) {
    this.clickedUser = JSON.stringify(user);
  }
}
