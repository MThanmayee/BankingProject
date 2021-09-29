import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-forgot-user-id',
  templateUrl: './forgot-user-id.component.html',
  styleUrls: ['./forgot-user-id.component.css']
})
export class ForgotUserIdComponent implements OnInit {

  ForgotUserIdForm=new FormGroup({
    AccountNumber:new FormControl("",Validators.required,)
   
  })
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
  }
  get AccountNumber()
  {
    return this.ForgotUserIdForm.get("AccountNumber")
  }

  sumbitInfo()
  {
    this.service.forgotuid(this.ForgotUserIdForm.value).subscribe(res => {
      this.router.navigateByUrl("/OTP1");
   });
  }
  Redirect()
  {
    
  }

}
