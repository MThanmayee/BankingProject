import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-account-activation-status',
  templateUrl: './account-activation-status.component.html',
  styleUrls: ['./account-activation-status.component.css']
})
export class AccountActivationStatusComponent implements OnInit {
StatusForm=new FormGroup({
  referenceNumber:new FormControl("",Validators.required)
})
   userprofile !: any;
   ref!: any
  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    
    
  }
  get referenceNumber()
  {
    return this.StatusForm.get("referenceNumber");
  }
  submitInfo()
  {
    
  }
  Redirect()
  {
    this.service.GetReference(this.StatusForm.value.referenceNumber).subscribe((data)=>
    {
      this.userprofile=data
      console.log(this.userprofile)
      if(this.userprofile! = null)
      {
        sessionStorage.setItem('accountstatus',this.StatusForm.value.accountStatus)
        sessionStorage.setItem('ref',this.StatusForm.value.referenceNumber)
        return this.router.navigateByUrl("/Checkstatus")
      }
      
      else{
      alert("Invalid reference number")
      return this.router.navigateByUrl("/Trackstatus")
      }
    });
  }
}
