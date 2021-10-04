import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-activation-status',
  templateUrl: './account-activation-status.component.html',
  styleUrls: ['./account-activation-status.component.css']
})
export class AccountActivationStatusComponent implements OnInit {
StatusForm=new FormGroup({
  referenceNumber:new FormControl("",Validators.required)
})
  constructor(private router:Router) { }

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
   
  }

}
