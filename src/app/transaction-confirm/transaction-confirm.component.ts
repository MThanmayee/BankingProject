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

  FromAccount!: any
  ToAccount!:any
  Amount!: any
  TransactionDate!:any
  MaturityInstructions!:any
  Remark!: any

  statusObj: any = {};
  status!: string;

  TransactionForm:FormGroup = new FormGroup(
    {
      FromAccount:new FormControl("",Validators.required),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      TransactionDate:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remark:new FormControl("",Validators.required)
    })
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.FromAccount= sessionStorage.getItem('accountnumber')
    this.ToAccount=sessionStorage.getItem('ToAccount')
    this.Amount= sessionStorage.getItem('Amount')
     this.TransactionDate=sessionStorage.getItem('TransactionDate',)
    this.MaturityInstructions= sessionStorage.getItem('MaturityInstrctions')
    this.Remark= sessionStorage.getItem('Remarks')
  }
  Redirect()
  {
    this.service.AddTransactions(this.TransactionForm.value).subscribe(
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
    ) 
  }
  Return()
  {
    this.router.navigateByUrl("/IMPS")
  }
}
