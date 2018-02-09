import{Component, OnInit}from '@angular/core';

import {UsersService}from '../../services/users.service';
import {User}from '../../models/user';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  private users: User[] = [];

  constructor(public usersService: UsersService) {

  }

  ngOnInit() {
    this.usersService.list().subscribe(todosResponse=>{
        this.users = todosResponse;
    })
  }

}
