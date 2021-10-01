import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router'; 
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  message:boolean=false;

  constructor(private route:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.service.receivedStatus().subscribe((data)=>{
      this.message=data;
      });
  }
   logout(){
    console.log("hi");
    sessionStorage.removeItem('email');
    sessionStorage.clear();
    this.service.subject.next(false);
    //this.message=false;
    this.route.navigate(['Login']);
 } 

}