import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './services/user/user.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LockscreenComponent,
    RecoverpasswordComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    ImageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
