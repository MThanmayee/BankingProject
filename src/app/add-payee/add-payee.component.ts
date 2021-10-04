import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Benificiaries } from '../benificiaries';
import { MatchPasswordService } from '../match-password.service';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  
  //newbenificiary!:Benificiaries;
  accountnumber!:any;
  bank!:any;
  statusObj: any = {};
  status!: string;
  constructor(private fb:FormBuilder,
    public customValidator:MatchPasswordService,private router:Router,private service:RegisterService) { }
    AddPayeeForm:FormGroup = this.fb.group(
      {
        FromAccount: new FormControl(sessionStorage.getItem('accountnumber')),
        BenificiaryName:new FormControl("",Validators.required),
        ToAccount:new FormControl("",Validators.required),
        RAccountNumber:new FormControl("",Validators.required),
        IFSCCode:new FormControl("",Validators.required),
        NickName:new FormControl("",Validators.required)
      },{ validator: this.customValidator.passwordMatchValidator("ToAccount","RAccountNumber")}
    );
  ngOnInit(): void {
    this.service.subject.next(true);
  this.accountnumber = sessionStorage.getItem('accountnumber')
  this.service.getifsc().subscribe(
    data=>
    {
      this.bank = data;
    }
  );
  console.log(this.accountnumber)
   
  }
  get BenificiaryName()
  {
    return this.AddPayeeForm.get('BenificiaryName')
  }
  get ToAccount()
  {
    return this.AddPayeeForm.get('ToAccount')
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
    this.AddPayeeForm.value.FromAccount=parseInt(sessionStorage.getItem('accountnumber')!.toString())
    console.log(this.AddPayeeForm.value)
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
