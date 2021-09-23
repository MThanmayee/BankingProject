import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  ForgotUserIdForm=new FormGroup({
    accountNo:new FormControl("",Validators.required,),
    OTP:new FormControl("",[Validators.required,Validators.minLength(6)])
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get accountNo()
  {
    return this.ForgotUserIdForm.get("accountNo")
  }
  get OTP()
  {
    return this.ForgotUserIdForm.get("OTP")
  }
  sumbitInfo()
  {
    
  }
  Redirect()
  {
    this.router.navigateByUrl("/EmailSent");
  }

}
