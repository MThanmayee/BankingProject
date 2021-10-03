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
      TransactionType:new FormControl(sessionStorage.getItem('transactiontype')),
      FromAccount:new FormControl(parseInt(sessionStorage.getItem('accountnumber')!.toString())),
      ToAccount:new FormControl(parseInt(sessionStorage.getItem('ToAccount')!.toString())),
      Amount:new FormControl(parseInt(sessionStorage.getItem('Amount')!.toString())),
      Date:new FormControl(sessionStorage.getItem('Date')),
      MaturityInstructions:new FormControl(sessionStorage.getItem('MaturityInstrctions')),
      Remarks:new FormControl(sessionStorage.getItem('Remarks'))
    })
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
   
  }
  Redirect()
  {
    console.log(sessionStorage.getItem('transactionid'))
    this.TransactionForm.value.TransactionID=parseInt(sessionStorage.getItem('transactionid')!.toString())
    this.TransactionForm.value.FromAccount=parseInt(sessionStorage.getItem('accountnumber')!.toString())
    this.TransactionForm.value.TransactionType = sessionStorage.getItem('transactiontype')
    this.TransactionForm.value.ToAccount=parseInt(sessionStorage.getItem('ToAccount')!.toString())
    this.TransactionForm.value.Amount=parseInt(sessionStorage.getItem('Amount')!.toString())
    this.TransactionForm.value.Date=sessionStorage.getItem('Date')
    this.TransactionForm.value.MaturityInstructions=sessionStorage.getItem('MaturityInstrctions')
    this.TransactionForm.value.Remarks=sessionStorage.getItem('Remarks')
    console.log(this.TransactionForm.value)
    
    this.service.AddTransactions(this.TransactionForm.value).subscribe(
      data=>{
        console.log('inside ts')
        this.statusObj = data;
        this.router.navigateByUrl("/TransactionSuccessful");
        /* this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "added") {
          
          console.log(this.statusObj)
        }
        else {
          this.statusObj = "Error";
        } */
        console.log(data)
      } 
    
    )
  /*   console.log(this.statusObj)
    this.service.UpdateBalance(this.TransactionForm.value).subscribe(
      data=>{
        console.log('inside ts')
        this.router.navigateByUrl("/TransactionSuccessful");
      } 
    ) */
  }
  Return()
  {
    this.router.navigateByUrl("/IMPS")
  }
}
