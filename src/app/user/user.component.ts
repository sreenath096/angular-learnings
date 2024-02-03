import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userId: number = 10;
  userStatus: string = 'Offline';

  getUserStatus() : string {
    return this.userStatus;
  }
}
