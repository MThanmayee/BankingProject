import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  AddPayeeForm:FormGroup = new FormGroup(
    {
      BenificiaryName:new FormControl("",Validators.required),
      AccountNumber:new FormControl("",Validators.required),
      RAccountNumber:new FormControl("",Validators.required),
      NickName:new FormControl("",Validators.required),
    }
  )
  constructor() { }

  ngOnInit(): void {
  }

}
