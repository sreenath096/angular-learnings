import { Component } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent {
  userList: string[] = [];

  onUserAdded(event: string) {
    this.userList.push(event);
  }
}
