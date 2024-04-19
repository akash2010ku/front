import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SigninSignupComponent } from './home/signin-signup/signin-signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './signin/signin.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninSignupComponent,
    SigninComponent,
    CreateTodoComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
