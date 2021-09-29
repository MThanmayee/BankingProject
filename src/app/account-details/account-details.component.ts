import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  userprofile !: any;
  acnt!: any

  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.acnt=sessionStorage.getItem('email')
    console.log(this.acnt)
    this.service.GetDetails(this.acnt).subscribe((data)=>
    this.userprofile=data
   
    );

   /*  getdetails(){
  
      this.service.GetNumber(this.customerid).subscribe(
        data=> {
          // this.accountnumber=data["AccountNumber"]
          this.account=data;
          sessionStorage.setItem('account',this.account)
          
          console.log(this.account)
        }
      )
    } */

    console.log(this.userprofile)
  }

  

}
