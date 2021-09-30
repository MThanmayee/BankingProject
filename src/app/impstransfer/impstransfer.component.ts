import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-impstransfer',
  templateUrl: './impstransfer.component.html',
  styleUrls: ['./impstransfer.component.css']
})
export class IMPSTransferComponent implements OnInit {

  accountnumber!: any
  beneficiaries!: any[]

  IMPSForm:FormGroup = new FormGroup(
    {

      FromAccount:new FormControl("",Validators.required),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      TransactionDate:new FormControl("",Validators.required),
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
     sessionStorage.setItem('ToAccount',this.IMPSForm.value.ToAccount)
     sessionStorage.setItem('Amount',this.IMPSForm.value.Amount)
     sessionStorage.setItem('TransactionDate',this.IMPSForm.value.TransactionDate)
     sessionStorage.setItem('MaturityInstrctions',this.IMPSForm.value.MaturityInstructions)
     sessionStorage.setItem('Remarks',this.IMPSForm.value.Remarks)
    this.router.navigateByUrl("/TransactionConfirm")
  }
}
