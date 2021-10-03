import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-rtgstransfer',
  templateUrl: './rtgstransfer.component.html',
  styleUrls: ['./rtgstransfer.component.css']
})
export class RTGSTransferComponent implements OnInit {
  accountnumber!: any
  beneficiaries!: any[]
  transactionid!:any
  date!:any
  value!:any
  
  
  RTGSForm:FormGroup = new FormGroup(
    {
      TransactionID: new FormControl(),
      TransactionType:new FormControl(),
      FromAccount:new FormControl(sessionStorage.getItem('accountnumber')),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      Date:new FormControl("",Validators.required),
      Tpassword:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remarks:new FormControl("",Validators.required)
    })

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.service.subject.next(true);
    console.log("hi")
    this.date = new Date()
    this.service.generatetransaction().subscribe(data=>{this.transactionid=data})
    console.log(this.transactionid)
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
    sessionStorage.setItem('transactionid',this.transactionid)
     sessionStorage.setItem('ToAccount',this.RTGSForm.value.ToAccount)
     sessionStorage.setItem('transactiontype',"RTGS")
     sessionStorage.setItem('Amount',this.RTGSForm.value.Amount)
     sessionStorage.setItem('transactiontype',"RTGS")
     sessionStorage.setItem('Date',this.RTGSForm.value.Date)
     console.log((this.date))
     sessionStorage.setItem('MaturityInstrctions',this.RTGSForm.value.MaturityInstructions)
     sessionStorage.setItem('Remarks',this.RTGSForm.value.Remarks)
     sessionStorage.setItem('transactionpassword',this.RTGSForm.value.Tpassword)
     this.service.validatetpassword(this.accountnumber,this.RTGSForm.value.Tpassword).subscribe(data=>{this.value = data
    
      if(this.value!=null){
        this.router.navigateByUrl("/TransactionConfirm")
       }
       else{
         alert("wrong transaction")
       }

    })
   
  }
}
