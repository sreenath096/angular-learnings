import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userId: number = 10;
  userStatus: string = '';

  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'Offline';
  }

  getUserStatus(): string {
    return this.userStatus;
  }

  getColor(): string {
    if (this.userStatus === 'online') {
      return 'green';
    }
    return 'red';
  }
}
