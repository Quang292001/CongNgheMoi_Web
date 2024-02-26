import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder){}

  get email(){ //*ngIf
    return this.loginForm.controls['email'];
  }
  get password(){ //*ngIf
    return this.loginForm.controls['password'];
  }
}
