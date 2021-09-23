import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPasswordService } from '../match-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-password',
  templateUrl: './transaction-password.component.html',
  styleUrls: ['./transaction-password.component.css']
})
export class TransactionPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
    private customValidator:MatchPasswordService,private router:Router) { }
TransactionPasswordForm=this.fb.group({
  transactionPassword:['',Validators.compose( [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
      
  confirmTransactionPassword:['',Validators.required],
  
  OTP:['',Validators.compose([ Validators.required,Validators.minLength(6)])]
},{ validator: this.customValidator.passwordMatchValidator("transactionPassword","confirmTransactionPassword")}
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
