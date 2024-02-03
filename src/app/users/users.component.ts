import { Component } from '@angular/core';

@Component({
  //selector: 'app-users',
  //selector: '[app-users]',
  selector: '.app-users',
  template: `<h3>Users Component</h3> <app-user></app-user>
  <app-user></app-user>`,
  styles: 'h3 { color: blue}'
})
export class UsersComponent {

}
