import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {
  ForgotPasswordForm=new FormGroup({
    userId:new FormControl("",Validators.required,),
    OTP:new FormControl("",[Validators.required,Validators.minLength(6)])
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get userId()
  {
    return this.ForgotPasswordForm.get("userId")
  }
  get OTP()
  {
    return this.ForgotPasswordForm.get("OTP")
  }
  sumbitInfo()
  {
    
  }
  Redirect()
  {
    this.router.navigateByUrl("/SetNewPassword");
  }

}
