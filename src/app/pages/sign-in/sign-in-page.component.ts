import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../services/users.service'
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})

export class SignInPageComponent implements OnInit {
    private signInForm: FormGroup;
    private loginError: string;

    constructor(
        public usersServices: UsersService,
        public router: Router,
        public formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.signInForm = this.formBuilder.group({
          'username': '',
          'password': ''
        });
    }

    doLogin() {
        this.usersServices.login(
          this.signInForm.get('username').value,
          this.signInForm.get('password').value).subscribe(loginResponse => {
            this.router.navigate(['tasks']);
          }, error => {
            this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
        })
    }


}