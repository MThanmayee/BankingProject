import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ContactForm=new FormGroup({
    id:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')])
  });
  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
  }
  get id(){
    return this.ContactForm.get('id');
  }
  get password(){
    return this.ContactForm.get('password');
  }

  SubmitInfo(){
    this.service.AdminLogin(this.ContactForm.value).subscribe(res => {
      
       this.route.navigateByUrl("/AdminHome");
    });
  }
  
}
