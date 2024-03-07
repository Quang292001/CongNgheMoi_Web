// import { SignupService } from './signup.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl="http://localhost:8080/user/signup"//xem lại
  constructor(private httpClient: HttpClient) {}

  signupUser(user: User):Observable<object>{
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
