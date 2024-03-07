import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { User } from '../../user';
import { SignupService } from '../../services/signup.service';
import { response } from 'express';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User=new User();
  signupForm=this.fb.group({
    username:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
    phonenumber:['',Validators.required]
  },{
    validators: passwordMatchValidator
  })
  constructor(private fb:FormBuilder,private signupService: SignupService,private messageservice: MessageService,private router: Router){}

  get username(){
    return this.signupForm.controls['username'];
  }
  get phonenumber(){
    return this.signupForm.controls['phonenumber'];
  }
  get email(){
    return this.signupForm.controls['email'];
  }
  get password(){
    return this.signupForm.controls['password'];
  }
  get confirmPassword(){
    return this.signupForm.controls['confirmPassword'];
  }

  submitDetails() {
    console.log(this.user);
    const postData = { ...this.signupForm.value };
    postData.phonenumber = String(postData.phonenumber); // Chuyển đổi phonenumber từ số sang chuỗi
    delete postData.confirmPassword;

    this.signupService.signupUser(this.user).subscribe(
      response => {
        console.log(response);
        this.messageservice.add({ severity: 'success', summary: 'Thành công', detail: 'Đăng ký thành công' });
        this.router.navigate(['login']);
      },
      error => {
        this.messageservice.add({ severity: 'error', summary: 'Lỗi', detail: 'Đăng ký không thành công' });
      }
    );
  }

}
