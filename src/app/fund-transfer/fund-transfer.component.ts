import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  constructor(private router:Router,private service:RegisterService) { }

  ngOnInit(): void {
    this.service.subject.next(true);
  }
  IMPSTransfer() {
    this.router.navigateByUrl("/IMPS");
  }
  RTGSTransfer() {
    this.router.navigateByUrl("/RTGS");
  }

  NEFTTransfer() {
    this.router.navigateByUrl("/NEFT");
  }
}
