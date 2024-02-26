import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent {
  recoverpassword=this.fb.group({
    recoverpassword:['',[Validators.required]]
  })
    constructor(private fb:FormBuilder){}

    get password(){
      return this.recoverpassword.controls['recoverpassword'];
    }
}

