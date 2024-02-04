import { Component } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent {
  userName: string = '';
  userList: string[] = [];

  onUserAdded() {
    this.userList.push(this.userName);
  }
}
