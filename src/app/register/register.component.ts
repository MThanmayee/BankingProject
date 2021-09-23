import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,
    public customValidator:MatchPasswordService,private router:Router ) { }
      RegisterForm=this.fb.group({

      accountNo:['',Validators.required],

      loginPassword:['',Validators.compose([ Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      
      confirmLoginPassword:['',Validators.required],
      
     
    },{ validator: this.customValidator.passwordMatchValidator("loginPassword","confirmLoginPassword")}
    
    )
    

  ngOnInit(): void {
    
  }
  submitInfo(){

  }
  Redirect()
  {
    this.router.navigateByUrl("/TransactionPassword");
  }
}