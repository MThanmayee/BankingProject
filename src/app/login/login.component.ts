import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ContactForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*_=+-]).{8,12}$")])
  });
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  get username(){
    return this.ContactForm.get('username');
  }
  get password(){
    return this.ContactForm.get('password');
  }

  SubmitInfo(){
    console.log(this.ContactForm.value)
  }
  SubmitRedirect()
  {
    this.route.navigateByUrl("/Dashboard");
  }
}
