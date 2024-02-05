import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';

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
    this.userName = this.userInput.nativeElement.value;
    this.userAdded.emit(this.userInput.nativeElement.value);
    let loggingService = new LoggingService();
    loggingService.logToConsole("User is added " + this.userName);
  }
}
