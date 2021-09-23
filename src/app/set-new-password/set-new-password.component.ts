import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
    public customValidator:MatchPasswordService,private router:Router) { }
  SetNewPasswordForm=this.fb.group({
    loginPassword:new FormControl('',[ Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    confirmPassword:new FormControl('',[Validators.required])
  },{ validator: this.customValidator.passwordMatchValidator("loginPassword","confirmPassword")}
  )

  ngOnInit(): void {
  }
 
  submitInfo()
  {

  }
  Redirect()
  {
    this.router.navigateByUrl("/Login");
  }

}
