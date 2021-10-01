import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-nefttransfer',
  templateUrl: './nefttransfer.component.html',
  styleUrls: ['./nefttransfer.component.css']
})
export class NEFTTransferComponent implements OnInit {
   accountnumber!: any
  beneficiaries!: any[]
  NEFTForm:FormGroup = new FormGroup(
    {
      TransactionID: new FormControl(),
      FromAccount:new FormControl("",Validators.required),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      Date:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remark:new FormControl("",Validators.required)
    }
  )

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    console.log("hi")
    this.accountnumber = sessionStorage.getItem('accountnumber')
    console.log(this.accountnumber)
    this.service.GetBenificiary(this.accountnumber).subscribe(
      data=>{

        this.beneficiaries=data
        console.log(data)
        console.log(this.beneficiaries)
      }
    )
  }
  AddPayee()
  {
    this.router.navigateByUrl("/AddPayee")
  }
  Redirect()
  {
    sessionStorage.setItem('transactionid',this.NEFTForm.value.TransactionID)
     sessionStorage.setItem('ToAccount',this.NEFTForm.value.ToAccount)
     sessionStorage.setItem('Amount',this.NEFTForm.value.Amount)
     sessionStorage.setItem('Date',this.NEFTForm.value.Date)
     sessionStorage.setItem('MaturityInstrctions',this.NEFTForm.value.MaturityInstructions)
     sessionStorage.setItem('Remarks',this.NEFTForm.value.Remarks)
    this.router.navigateByUrl("/TransactionConfirm")
  }
}
