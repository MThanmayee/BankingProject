import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerid!: any;

  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.customerid=sessionStorage.getItem('customerid')
    if(this.customerid === null)
    this.route.navigateByUrl("/Login");
  }

  logout(){
    //console.log("hi");
    sessionStorage.removeItem('customerid');
    sessionStorage.clear();
    this.route.navigateByUrl("/Dashboard");
 } 

}
