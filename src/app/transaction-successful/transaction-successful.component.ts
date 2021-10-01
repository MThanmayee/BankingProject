import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';
@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {
  transactions!:any;
  transactionid!: any;
  constructor(private service:RegisterService,private router:Router) { }

  ngOnInit(): void {
    this.transactionid=sessionStorage.getItem('transactionid')
    
    this.service.singletransaction(this.transactionid).subscribe(data => 
      {
        this.transactions = data;

        console.log(this.transactions)
      })
  }

}