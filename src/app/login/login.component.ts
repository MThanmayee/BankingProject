import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { UserProfile } from '../user-profile';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  ContactForm=new FormGroup({
    customerid:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
    password:new FormControl("",Validators.compose([Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]))
  });
  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
  }
  get customerid(){
    return this.ContactForm.get('customerid');
  }
  get password(){
    return this.ContactForm.get('password');
  }

 
  SubmitRedirect()
  {
      this.service.Login(this.ContactForm.value).subscribe(res => {
        sessionStorage.setItem('customerid',this.ContactForm.value.customerid)
         this.route.navigateByUrl("/Dashboard");
      });   
  }
}
