import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  userName: string = '';
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput') userInput: ElementRef = {} as ElementRef;

  onUserAdded() {
    this.userAdded.emit(this.userInput.nativeElement.value);
  }
}
