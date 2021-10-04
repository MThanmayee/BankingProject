import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  id!:any;
  userprofile:any;
  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('id')
    this.service.getAllusers().subscribe((data: UserProfile[])=>{
      this.userprofile = data;
  }) 
  }
  submitinfo(user:UserProfile)
  {
    this.service.Approve(user).subscribe(); 
  }
  logout(){
    //console.log("hi");
    sessionStorage.removeItem('id');
    sessionStorage.clear();
    this.route.navigateByUrl("/Home");
 } 
}
