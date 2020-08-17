import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';

import { Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];
  
  constructor(
    private userService: UserService,
    private router: Router) { } 

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
        res => {
        this.users= res.users;
        console.log(res.users)
      },
      err => console.log(err)
    )
  }

  btnClick=function(){
    this.router.navigate(['/newuser']);
  }

  deleteUser(id: string){
    this.userService.deleteUser(id)
    .subscribe(
      res => {
        this.getUsers();
      }
    )
  }


}
