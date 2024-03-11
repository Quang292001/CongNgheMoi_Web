import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatComponent } from './components/home/chat/chat.component';

const routes: Routes = [
  {
    path:'lockscreen',
    component:LockscreenComponent
  },
  {
    path:'recoverpassword',
    component:RecoverpasswordComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'signup',
    component:SignupComponent
  },
  {
    path:'chat',
    component:ChatComponent
  },{
    path:'home',
    component:HomeComponent
  },{
    path:'',redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
