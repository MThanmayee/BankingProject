import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';
import { Transactions } from '../transactions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  fromdate:any;
  todate:any;
  transaction!:any[];
  accountno!: any;

  Searchform=new FormGroup({
    Fromdate:new FormControl(""),
    Todate:new FormControl("")
  });
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void 
  {
    this.service.subject.next(true);
    this.accountno=sessionStorage.getItem('accountnumber')
    this.service.getTransactions(this.accountno).subscribe(data => 
      {
        this.transaction = data;

        console.log(this.transaction)
      })
  }

  search()
  {
    this.fromdate=this.Searchform.value.Fromdate
    this.todate=this.Searchform.value.Todate
    console.log(this.fromdate)
    console.log(this.todate)
    this.service.getbydate(this.fromdate,this.todate,this.accountno).subscribe(
      data=>{
        this.transaction=data;

        console.log(this.transaction)
      }
    )
  }

}
