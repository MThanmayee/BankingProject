import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  userprofile !: UserProfile;


  constructor(private service:RegisterService) { }

  ngOnInit(): void {

    this.service.GetDetails('vishnu@gmail.com').subscribe((data)=>
    this.userprofile=data
   
    );
    console.log(this.userprofile)
  }

}
