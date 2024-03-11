import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { HomeComponent } from './components/home/home.component';
import { SignupService } from './services/signup.service';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ChatComponent } from './components/home/chat/chat.component';
import { SearchUserComponent } from './components/home/chat/search-user/search-user.component';
import { OnlineUsersComponent } from './components/home/chat/online-users/online-users.component';
import { RecentChatsComponent } from './components/home/chat/recent-chats/recent-chats.component';
import { ChatBoxComponent } from './components/home/chat/chat-box/chat-box.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api'; // Import MessageService từ PrimeNG

@NgModule({
  declarations: [
    AppComponent,
    LockscreenComponent,
    RecoverpasswordComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    SearchUserComponent,
    OnlineUsersComponent,
    RecentChatsComponent,
    ChatBoxComponent
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
  providers: [SignupService,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
