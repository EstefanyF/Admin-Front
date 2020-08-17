import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  user: User ={
    
    name: '',
    lastName: '',
    dni:0,
    date: 0,
    phone:0,
    diretion:'',
    user:'',
    password:'',
  };

  edit: boolean= false;

  constructor(
    private userService: UserService,
    private router:Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activateRouter.snapshot.params;
    if(params){
      this.userService.getUsers()
      .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit= true;
        }
      )
    }
  }

  submitUser(){
    this.userService.createUser(this.user)
      .subscribe(
        res => {console.log(res);
        this.router.navigate(['clientes']);
        },
        err => console.log(err)
      )
  }


}
