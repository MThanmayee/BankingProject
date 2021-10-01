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
  RTGSForm:FormGroup = new FormGroup(
    {
      FromAccount:new FormControl("",Validators.required),
      ToAccount:new FormControl("",Validators.required),
      Amount:new FormControl("",Validators.required),
      Date:new FormControl("",Validators.required),
      MaturityInstructions:new FormControl("",Validators.required),
      Remark:new FormControl("",Validators.required)
    })

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
    this.router.navigateByUrl("/TransactionConfirm")
  }
}
