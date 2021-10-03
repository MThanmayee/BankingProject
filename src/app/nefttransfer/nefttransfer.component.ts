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
  transactionid!:any
  NEFTForm:FormGroup = new FormGroup(
    {
      TransactionID: new FormControl(this.transactionid),
      TransactionType:new FormControl(),
      FromAccount:new FormControl(sessionStorage.getItem('accountnumber')),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      Tpassword:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remarks:new FormControl("",Validators.required)
    }
  )

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    console.log("hi")
    this.service.generatetransaction().subscribe(data=>{
      this.transactionid=data
      console.log(this.transactionid)
      this.NEFTForm.value.TransactionID = this.transactionid
    })
    
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
    this.NEFTForm.value.TransactionID = this.transactionid
    sessionStorage.setItem('transactionid',this.NEFTForm.value.TransactionID)
    sessionStorage.setItem('transactiontype',"NEFT")
     sessionStorage.setItem('ToAccount',this.NEFTForm.value.ToAccount)
     sessionStorage.setItem('Amount',this.NEFTForm.value.Amount)
     sessionStorage.setItem('MaturityInstrctions',this.NEFTForm.value.MaturityInstructions)
     sessionStorage.setItem('Remarks',this.NEFTForm.value.Remarks)
    this.router.navigateByUrl("/TransactionConfirm")
  }
}
