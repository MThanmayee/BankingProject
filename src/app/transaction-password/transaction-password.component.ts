import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-transaction-password',
  templateUrl: './transaction-password.component.html',
  styleUrls: ['./transaction-password.component.css']
})
export class TransactionPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private customValidator:MatchPasswordService,private router:Router,private service:RegisterService ) { }
TransactionPasswordForm=this.fb.group({
  AccountNumber:['',Validators.required],
  TransactionPassword:['',Validators.compose( [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      
  confirmTransactionPassword:['',Validators.required],
  
  OTP:['',Validators.compose([ Validators.required,Validators.minLength(6)])]
},{ validator: this.customValidator.passwordMatchValidator("TransactionPassword","confirmTransactionPassword")}
)
  ngOnInit(): void {
  }


  submitInfo()
  {
    this.service.confirmotp(this.TransactionPasswordForm.value).subscribe(res => {
      this.router.navigateByUrl("/Login");
   });

  }
  

}
