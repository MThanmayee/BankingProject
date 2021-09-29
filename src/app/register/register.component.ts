import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,
    public customValidator:MatchPasswordService,private router:Router,private service:RegisterService ) { }
      RegisterForm=this.fb.group({

      AccountNumber:['',Validators.required],

      Password:['',Validators.compose([ Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      
      confirmLoginPassword:['',Validators.required],
      
     
    },{ validator: this.customValidator.passwordMatchValidator("Password","confirmLoginPassword")}
    
    )
    

  ngOnInit(): void {
    
  }
  submitInfo(){
    
    this.service.Register(this.RegisterForm.value).subscribe(res => {
      this.router.navigateByUrl("/TransactionPassword");
   });

  }
 
}