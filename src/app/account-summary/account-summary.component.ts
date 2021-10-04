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
  acntnumber!:any;
  constructor(private service:RegisterService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.subject.next(true);
    this.acntnumber = sessionStorage.getItem('accountnumber')
    this.service.GetAccountById(this.acntnumber).subscribe(data => 
      {
        this.AccountDetails = data;
        console.log(this.AccountDetails)
      })
    
  }

  
  
}

