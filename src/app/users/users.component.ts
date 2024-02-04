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
  userCreatedStatus: string = 'No User is created';
  userName: string = 'Test user';
  isUserCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewUser = !this.allowNewUser;
    }, 3000);
  }

  onUpdateUser(event: Event) {
    this.userName = (event.target as HTMLInputElement).value;
  }

  changeUserCreatedStatus() {
    this.isUserCreated = true;
    this.userCreatedStatus = 'User is created';
  }

}
