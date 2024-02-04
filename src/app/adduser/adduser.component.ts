import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  userName: string = '';
  @Output() userAdded = new EventEmitter<string>();

  onUserAdded(input: HTMLInputElement) {
    this.userAdded.emit(input.value);
  }
}
