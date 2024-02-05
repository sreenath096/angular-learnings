import { Component } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.css'
})
export class NewUsersComponent {
  userList: string[] = ['Sreenath'];
  name: string = 'Sreenath';
  isAvailable: boolean = true;
  value: number = 12;

  onUserAdded(event: string) {
    this.userList.push(event);
  }

  onNameChange() {
    this.name = 'devil';
  }

  onDeleteComponent() {
    this.userList = [];
  }
}
