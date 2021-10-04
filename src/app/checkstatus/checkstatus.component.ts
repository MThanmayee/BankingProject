import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-checkstatus',
  templateUrl: './checkstatus.component.html',
  styleUrls: ['./checkstatus.component.css']
})
export class CheckstatusComponent implements OnInit {
  status!:any
  ref!:any
  constructor() { }

  ngOnInit(): void {
   this.status = sessionStorage.getItem('accountstatus')
   this.ref = sessionStorage.getItem('ref')
  }

}
