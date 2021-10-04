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
    this.service.subject.next(true);
    this.acnt=sessionStorage.getItem('email')
    console.log(this.acnt)
    this.service.GetDetails(this.acnt).subscribe((data)=>
    this.userprofile=data
   
    );

    console.log(this.userprofile)
  }

  

}
