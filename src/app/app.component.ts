import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'angular-learnings';
  users: { name: string, status: string }[] = [];
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.users = this.userService.users;
  }
}
