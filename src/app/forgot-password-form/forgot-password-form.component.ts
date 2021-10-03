import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent implements OnInit {
  ForgotPasswordForm=new FormGroup({
    CustomerId:new FormControl("",Validators.required,)
  })

  constructor(private router:Router,private service:RegisterService ) { }

  ngOnInit(): void {
    this.service.subject.next(true);
  }
  get  CustomerId()
  {
    return this.ForgotPasswordForm.get(" CustomerId")
  }
  
  sumbitInfo()
  {
    this.service.forgotpwd(this.ForgotPasswordForm.value).subscribe(res => {
      this.router.navigateByUrl("/SetNewPassword");
   });
  }
  Redirect()
  {
   
  }

}
