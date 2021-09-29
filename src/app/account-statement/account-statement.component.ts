import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';
import { Transactions } from '../transactions';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  transactions!:any;
  accountno!: any;
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void 
  {
    this.accountno=sessionStorage.getItem('accountnumber')
    this.service.getTransactions(this.accountno).subscribe(data => 
      {
        this.transactions = data;

        console.log(this.transactions)
      })
  }

}
