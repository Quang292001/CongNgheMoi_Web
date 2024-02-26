import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent {
  lockscreenForm=this.fb.group({
    password:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder){}

  get password(){
    return this.lockscreenForm.controls['password'];
  }
}
