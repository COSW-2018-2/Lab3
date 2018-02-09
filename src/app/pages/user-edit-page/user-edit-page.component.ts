import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
  
})

export class UserEditPageComponent implements OnInit {
    private userForm: FormGroup;
    private addError: string;
constructor(
    public usersService: UsersService,
    public formBuilder: FormBuilder,
    public router:Router
    
  ) {}

 ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      firstname: '',
      email: '',
      lastname: '',
      image: '',
      password: ''
    });
  }

onSubmit() {
    this.usersService.create(
      this.userForm.get('username').value,
      this.userForm.get('firstname').value,
      this.userForm.get('email').value,
      this.userForm.get('lastname').value,
      this.userForm.get('image').value,
      this.userForm.get('password').value,
    ).subscribe(serverResponse=>{
        this.router.navigate(['/users']);
    }, error=>{
      this.addError = 'Error adding in: ' + (error && error.message ? error.message : '');
    });
  }

}