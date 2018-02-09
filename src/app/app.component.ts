import { Component } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder} from '@angular/forms';

import {UsersService}from './services/users.service';
import {User}from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private emailToSearch:string='';
  private navForm:FormGroup;
  private modalChange: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private modal:NgbModal,
    private usersService:UsersService
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  messageFunc(message){
    /*this.modal.open(message)*/
    this.usersService.filterByEmail(this.emailToSearch).subscribe (
      listFilter => {this.modalChange="<div>username: "+listFilter.username+
                      "</div><div>email: "+listFilter.email+
                      "</div><div>firstname: "+listFilter.firstname+
                      "</div><div>lastname: "+listFilter.lastname+
                      "</div><div>image: <img src='"+listFilter.image
                      +"' width='150' height='150' /></div>";
                    }, 
                    error => {
                        this.modalChange="<div>No user found with the email address</div>";
                    }      
    );
    this.modal.open(message);
  }




  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  signOut() {
    this.authService.signOut();
  }
}


