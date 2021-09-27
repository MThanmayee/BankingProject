import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-confirm',
  templateUrl: './transaction-confirm.component.html',
  styleUrls: ['./transaction-confirm.component.css']
})
export class TransactionConfirmComponent implements OnInit {
  TransactionForm:FormGroup = new FormGroup(
    {
      FromAccount:new FormControl("",Validators.required),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      TransactionDate:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remark:new FormControl("",Validators.required)
    })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Redirect()
  {
    this.router.navigateByUrl("/TransactionSuccessful");
  }
}
