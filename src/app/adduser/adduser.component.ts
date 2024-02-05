import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
  providers: [LoggingService]
})
export class AdduserComponent {
  userName: string = '';
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput') userInput: ElementRef = {} as ElementRef;

  constructor(private loggingService: LoggingService) {

  }

  onUserAdded() {
    this.userName = this.userInput.nativeElement.value;
    this.userAdded.emit(this.userInput.nativeElement.value);
    this.loggingService.logToConsole("User is added " + this.userName);
  }
}
