import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
    public customValidator:MatchPasswordService,private router:Router,private service:RegisterService) { }
  SetNewPasswordForm=this.fb.group({
    AccountNumber:new FormControl('',Validators.required,),
    Password:new FormControl('',[ Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword:new FormControl('',[Validators.required]),
    OTP:new FormControl('',[Validators.required,Validators.minLength(6)])

  },{ validator: this.customValidator.passwordMatchValidator("Password","confirmPassword")}
  )

  ngOnInit(): void {
    this.service.subject.next(true);
  }
 
  submitInfo()
  {
    this.service.confirmotp2(this.SetNewPasswordForm.value).subscribe(res => {
      this.router.navigateByUrl("/Login");
   });

  }
  Redirect()
  {
    
  }

}
