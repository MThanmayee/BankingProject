import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "https://localhost:44378/api/account";
  httpOptions = {
    headers : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  constructor(private client:HttpClient) { }
  GetDetails(email:string):Observable<UserProfile>
  {
     return this.client.get<UserProfile>(this.url+'/display')
  }
  OpenNewAccount(newUser:UserProfile) 
  {
    return this.client.post(this.url+'/OpenNewAccount', JSON.stringify(newUser), this.httpOptions);
  }
  Login(user:Account)
  {
    return this.client.post(this.url+"/login",JSON.stringify(user),this.httpOptions)
  }
  Register(user:Account)
  {
    return this.client.put(this.url+"/register",JSON.stringify(user),this.httpOptions)
  }
}
