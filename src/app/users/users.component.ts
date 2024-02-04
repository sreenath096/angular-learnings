import { Component } from '@angular/core';

@Component({
  //selector: 'app-users',
  //selector: '[app-users]',
  selector: '.app-users',
  templateUrl: './users.component.html',
  styles: 'h3 { color: blue}'
})
export class UsersComponent {
  allowNewUser: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewUser = !this.allowNewUser;
    }, 3000);
  }
}
