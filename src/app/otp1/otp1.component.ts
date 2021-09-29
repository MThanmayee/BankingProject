import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-otp1',
  templateUrl: './otp1.component.html',
  styleUrls: ['./otp1.component.css']
})
export class Otp1Component implements OnInit {
  OtpForm1=new FormGroup({
    AccountNumber:new FormControl("",Validators.required,),
    OTP:new FormControl("",[Validators.required,Validators.minLength(6)])
  })

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
  }
  get AccountNumber()
  {
    return this.OtpForm1.get("AccountNumber")
  }
  
  get OTP()
  {
    return this.OtpForm1.get("OTP")
  }
  sumbitInfo()
  {
    this.service.confirmotp1(this.OtpForm1.value).subscribe(res => {
      this.router.navigateByUrl("/EmailSent");
   });
  }
  Redirect()
  {
    
  }

}