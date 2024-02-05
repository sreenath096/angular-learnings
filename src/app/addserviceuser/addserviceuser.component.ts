import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addserviceuser',
  templateUrl: './addserviceuser.component.html',
  styleUrl: './addserviceuser.component.css'
})
export class AddserviceuserComponent implements OnInit {
  userName: string = '';

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.statusUpdated.subscribe(data => {
      console.log('Logging from add Service user' + data);
    });
  }

  onAddUser() {
    this.userService.addUser(this.userName, 'active');
  }
}
