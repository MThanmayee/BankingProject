import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  ContactForm=new FormGroup({
    title:new FormControl(""),
    firstname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    middlename:new FormControl(""),
    fathername:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    mobilenumber:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    aadhar:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{12}$")]),
   // password:new FormControl("",[Validators.required,Validators.pattern("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$")]),
    emailId:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    DateOfBirth:new FormControl(""),
    resaddressline1:new FormControl(""),
    reslandmark:new FormControl(""),
    resstate:new FormControl(""),
    rescity:new FormControl(""),
    respincode:new FormControl(),
    peraddressline1:new FormControl(""),
    perlandmark:new FormControl(""),
    perstate:new FormControl(""),
    percity:new FormControl(""),
    perpincode:new FormControl(),
    OccupationType:new FormControl(""),
    SourceOfIncome:new FormControl(""),
    GrossAnnualIncome:new FormControl(""),
    BranchIfsc:new FormControl("")
  });

  status!: string;
  statusObj: any = {};
  cpass: string = "";
  constructor(private service:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }
  get title()
  {
    return this.ContactForm.get('title');
  }
  get firstname(){
    return this.ContactForm.get('firstname');
  }
  get lastname(){
    return this.ContactForm.get('lastname');
  }
  get middlename(){
    return this.ContactForm.get('middlename');
  }
  get fathername(){
    return this.ContactForm.get('fathername');
  }
  get mobile(){
    return this.ContactForm.get('mobile');
  }
  get aadhar(){
    return this.ContactForm.get('aadhar');
  }
  get email(){
    return this.ContactForm.get('email');
  }
  get dob(){
    return this.ContactForm.get('dob');
  }
  get raddress(){
    return this.ContactForm.get('raddress');
  }
  get rland(){
    return this.ContactForm.get('rland');
  }
  get rstate(){
    return this.ContactForm.get('rstate');
  }
  get rcity(){
    return this.ContactForm.get('rcity');
  }
  get rpincode(){
    return this.ContactForm.get('rpincode');
  }
  get paddress(){
    return this.ContactForm.get('paddress');
  }
  get pland(){
    return this.ContactForm.get('pland');
  }
  get pstate(){
    return this.ContactForm.get('pstate');
  }
  get pcity(){
    return this.ContactForm.get('pcity');
  }
  get occtype(){
    return this.ContactForm.get('occtype');
  }
  get incomesource(){
    return this.ContactForm.get('incomesource');
  }
  get grossincome(){
    return this.ContactForm.get('grossincome');
  }
  get ifsc(){
    return this.ContactForm.get('ifsc');
  }
  

  SubmitInfo(){
    console.log(this.ContactForm.value)
    this.service.OpenNewAccount(this.ContactForm.value).subscribe(
      data => {
        this.statusObj = data;
        //let jdata = JSON.parse(data.toString());
        console.log(this.statusObj);
        if(this.statusObj.status == "registered") {
          this.router.navigateByUrl("/ReferenceNumber");
        }
        else {
          this.status = "User Already Exist";
        }
      }
    );


  }
  
}
