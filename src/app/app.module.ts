import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { NewUsersComponent } from './new-users/new-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HighlightTextDirective } from './Directives/HightlightText.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NewUsersComponent,
    NewUserComponent,
    AdduserComponent,
    HighlightTextDirective,
    RendererHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
