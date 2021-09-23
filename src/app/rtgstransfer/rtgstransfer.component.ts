import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rtgstransfer',
  templateUrl: './rtgstransfer.component.html',
  styleUrls: ['./rtgstransfer.component.css']
})
export class RTGSTransferComponent implements OnInit {
  RTGSForm:FormGroup = new FormGroup(
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
  AddPayee()
  {
    this.router.navigateByUrl("/AddPayee")
  }
  Redirect()
  {
    this.router.navigateByUrl("/TransactionConfirm")
  }
}
