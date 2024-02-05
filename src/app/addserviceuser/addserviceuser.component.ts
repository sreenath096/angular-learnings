import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addserviceuser',
  templateUrl: './addserviceuser.component.html',
  styleUrl: './addserviceuser.component.css'
})
export class AddserviceuserComponent {
  userName: string = '';

  constructor(private userService: UserService) {

  }

  onAddUser() {
    this.userService.addUser(this.userName, 'active');
  }
}
