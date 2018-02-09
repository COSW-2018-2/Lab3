import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule}from '@angular/forms';
import {FormGroup, FormBuilder, FormsModule} from '@angular/forms';
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { AppDataService} from './common/app-data.service'
import { HttpModule } from '@angular/http';
import { APIService} from './common/api.service';
import { UsersService} from './services/users.service';
import { AuthService } from './common/auth.service';
import {AppComponent }from './app.component';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import {TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {UserListPageComponent}from './pages/user-list-page/user-list-page.component';
import {UserEditPageComponent}from './pages/user-edit-page/user-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component'

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import {TodoService}from './services/todo.service';

const ROUTES = [
  { path: '', component: SignInPageComponent },
  
  { path: 'home', component: HomePageComponent },
  
  {
    path: 'tasks', component: TaskListPageComponent,
    canActivate: [AuthService],
  },

  {
    path: 'users', component: UserListPageComponent,
    canActivate: [AuthService],
  },
  
  {
    path: 'edit', component: TaskEditPageComponent,
    canActivate: [AuthService],
  },

  {
    path: 'register', component: UserEditPageComponent,
    canActivate: [AuthService],
  },
  
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    UserListPageComponent,
    TaskEditPageComponent,
    UserEditPageComponent,
    PageNotFoundComponent,
    SignInPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    TodoService,
    AppConfiguration,
    APIService,
    UsersService,
    AppDataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
