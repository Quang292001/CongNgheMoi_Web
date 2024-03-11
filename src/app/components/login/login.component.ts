import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User=new User();
  loginForm=this.fb.group({
    phonenumber:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder, private loginService: LoginService,private router: Router){}

  get phonenumber(){ //*ngIf
    return this.loginForm.controls['phonenumber'];
  }
  get password(){ //*ngIf
    return this.loginForm.controls['password'];
  }
  userLogin(){
    console.log(this.user)
    this.loginService.loginUser(this.user).subscribe(
      data=>{
      alert("Login success")
      this.router.navigate(['home']);
    },error=>alert("không thành công"))

  }
}
