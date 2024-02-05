import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-serviceuser',
  templateUrl: './serviceuser.component.html',
  styleUrl: './serviceuser.component.css'
})
export class ServiceuserComponent {
  @Input() user: { name: string, status: string } = { name: "", status: "" };
  @Input() id: number = 0;

  constructor(private userService: UserService) {

  }

  onUpdateStatus(status: string) {
    this.userService.updateStatus(this.id, status);
  }
}
