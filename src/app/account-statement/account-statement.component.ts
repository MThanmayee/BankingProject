import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  AccountDetails1!:Account[];
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void 
  {
    this.service.getall().subscribe(data => 
      {
        this.AccountDetails1 = data;

        console.log(this.AccountDetails1)
      })
  }

}
