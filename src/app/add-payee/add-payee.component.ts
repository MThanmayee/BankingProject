import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Benificiaries } from '../benificiaries';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  AddPayeeForm:FormGroup = new FormGroup(
    {
      FromAccount: new FormControl(),
      BenificiaryName:new FormControl("",Validators.required),
      AccountNumber:new FormControl("",Validators.required),
      RAccountNumber:new FormControl("",Validators.required),
      IFSCCode:new FormControl("",Validators.required),
      NickName:new FormControl("",Validators.required)
    }
  )
  //newbenificiary!:Benificiaries;
  accountnumber!:any;
  statusObj: any = {};
  status!: string;
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
  this.accountnumber = sessionStorage.getItem('accountnumber')
   
  }
  get BenificiaryName()
  {
    return this.AddPayeeForm.get('BenificiaryName')
  }
  get AccountNumber()
  {
    return this.AddPayeeForm.get('AccountNumber')
  }
  get NickName()
  {
    return this.AddPayeeForm.get('NickName')
  }
  
  Redirect()
  {
    console.log(this.AddPayeeForm.value)
    
    // this.newbenificiary.BenificiaryName = this.AddPayeeForm.value.BenificiaryName;
    // this.newbenificiary.ToAccount = this.AddPayeeForm.value.AccountNumber;
    // this.newbenificiary.NickName = this.AddPayeeForm.value.NickName;
    // this.newbenificiary.IFSCCode = this.AddPayeeForm.value.IFSCCode;
    // this.newbenificiary.FromAccount = this.accountnumber;

    this.service.NewBenificiary(this.AddPayeeForm.value).subscribe(data=>
      {
        console.log('inside ts')
        this.statusObj = data;
        console.log(this.statusObj);
        if(this.statusObj.status == "added") {
          this.router.navigateByUrl("/ViewBenificiaries");
        }
        else {
          this.status = "Error";
        }
      }
    )
  }
}
