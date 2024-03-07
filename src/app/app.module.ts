import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { HomeComponent } from './components/home/home.component';
// import { UserComponent } from './services/user/user.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    LockscreenComponent,
    RecoverpasswordComponent,
    HomeComponent,

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
    ImageModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
