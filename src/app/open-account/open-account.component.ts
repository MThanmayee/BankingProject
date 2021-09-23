import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})
export class OpenAccountComponent implements OnInit {
  ContactForm=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    middlename:new FormControl(""),
    fathername:new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("^[A-Za-z]*$")]),
    mobile:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    aadhar:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{12}$")]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$")]),
    email:new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    city:new FormControl(),
  });
  constructor(private router:Router) { }

  ngOnInit(): void {
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
  get aadhar(){
    return this.ContactForm.get('aadhar');
  }
 
  get password(){
    return this.ContactForm.get('password');
  }
  get email(){
    return this.ContactForm.get('email');
  }
  get city(){
    return this.ContactForm.get('city');
  }
  get mobile(){
    return this.ContactForm.get('mobile');
  }

  SubmitInfo(){
    console.log(this.ContactForm.value)
  }
  Redirect()
  {
    this.router.navigateByUrl("/ReferenceNumber");
  }
}
