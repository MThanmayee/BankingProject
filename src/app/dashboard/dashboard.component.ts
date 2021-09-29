import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Account } from '../account';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  account!:any
  accountnumber!:any
  email!: any
  
  customerid!: any;

  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.customerid=sessionStorage.getItem('customerid')
    if(this.customerid === null)
    this.route.navigateByUrl("/Login");
    this.getdetails()
  }

  getdetails(){
  
    this.service.GetNumber(this.customerid).subscribe(
      data=> {
        // this.accountnumber=data["AccountNumber"]
        this.account=data;
        console.log(this.account.accountNumber)
        sessionStorage.setItem('accountnumber',this.account.accountNumber)
        sessionStorage.setItem('email',this.account.email)
        
        console.log(this.account)
      }
    )
  }
  

  logout(){
    //console.log("hi");
    sessionStorage.removeItem('customerid');
    sessionStorage.clear();
    this.route.navigateByUrl("/Dashboard");
 } 

}
