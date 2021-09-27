import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent implements OnInit {

  passresertform = new FormGroup({
    email : new FormControl("",[Validators.required, Validators.minLength(5), Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
  }
  )
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  get email()
  {
    return this.passresertform.get('email');
  }
  submitinfo(){
    //console.log(this.passresertform.value)!;
  }
  Redirect()
  {
    this.router.navigateByUrl("/Login");
  }
}
