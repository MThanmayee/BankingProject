import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Benificiaries } from '../benificiaries';

@Component({
  selector: 'app-view-benificiaries',
  templateUrl: './view-benificiaries.component.html',
  styleUrls: ['./view-benificiaries.component.css']
})
export class ViewBenificiariesComponent implements OnInit {

  accountnumber!: any
  beneficiaries!: any

  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.accountnumber = sessionStorage.getItem('accountnumber')
    this.service.GetBenificiary(this.accountnumber).subscribe(
      data=>{
        this.beneficiaries=data
      }
    )

  }


}
