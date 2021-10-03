import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-reference-number',
  templateUrl: './reference-number.component.html',
  styleUrls: ['./reference-number.component.css']
})
export class ReferenceNumberComponent implements OnInit {
  userprofile !: any;
  acnt!: any
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.acnt=sessionStorage.getItem('email')
    console.log(this.acnt)
    this.service.GetDetails(this.acnt).subscribe((data)=>
    this.userprofile=data
    );
  }

}
