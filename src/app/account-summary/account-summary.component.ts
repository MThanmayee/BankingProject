import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit 
{
  AccountDetails:any;
  constructor(private service:RegisterService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.GetAccountById(12345678).subscribe(data => 
      {
        /*this.AccountDetails.AccountNumber = data["AccountNumber"]
        this.AccountDetails.AccountType = data["AccountType"]
        this.AccountDetails.Balance = data["Balance"]
        this.AccountDetails.CustomerId = data["CustomerId"]
        this.AccountDetails.UserName = data["UserName"]
        this.AccountDetails.Email = data["Email"]
        this.AccountDetails.Password = data["Password"]
        this.AccountDetails.TransactionPassword = data["TransactionPassword"]*/
        this.AccountDetails = data;
        
      })
    
  }

  
  
}

