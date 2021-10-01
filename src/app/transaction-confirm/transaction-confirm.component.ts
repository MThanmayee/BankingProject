import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-transaction-confirm',
  templateUrl: './transaction-confirm.component.html',
  styleUrls: ['./transaction-confirm.component.css']
})
export class TransactionConfirmComponent implements OnInit {

  statusObj: any = {};
  status!: string;

  TransactionForm:FormGroup = new FormGroup(
    {
      TransactionID: new FormControl(parseInt(sessionStorage.getItem('transactionid')!.toString())),
      FromAccount:new FormControl(parseInt(sessionStorage.getItem('accountnumber')!.toString())),
      ToAccount:new FormControl(parseInt(sessionStorage.getItem('ToAccount')!.toString())),
      Amount:new FormControl(parseInt(sessionStorage.getItem('Amount')!.toString())),
      TransactionDate:new FormControl(sessionStorage.getItem('TransactionDate')),
      MaturityInstructions:new FormControl(sessionStorage.getItem('MaturityInstrctions')),
      Remark:new FormControl(sessionStorage.getItem('Remark'))
    })
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
   
  }
  Redirect()
  {
    this.service.AddTransactions(this.TransactionForm.value).subscribe(
      data=>{
        console.log('inside ts')
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "added") {
          //this.router.navigateByUrl("/TransactionSuccessful");
          console.log(this.statusObj)
        }
        else {
          this.statusObj = "Error";
        }
      } 
    )
   /*  console.log(this.statusObj)
    this.service.UpdateBalance(this.TransactionForm.value).subscribe(
      data=>{
        console.log('inside ts')
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "added") {
          this.router.navigateByUrl("/TransactionSuccessful");
        }
        else {
          this.statusObj = "Error";
        }
      } 
    ) */
  }
  Return()
  {
    this.router.navigateByUrl("/IMPS")
  }
}
