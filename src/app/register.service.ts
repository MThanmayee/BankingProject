import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = "https://localhost:5001/api/account";
  httpOptions = {
    headers : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  constructor(private client:HttpClient) { }
  OpenNewAccount(newUser: UserProfile) 
  {
    return this.client.post(this.url+'/OpenNewAccount', JSON.stringify(newUser), this.httpOptions);
  }
  Login(user:UserProfile)
  {
    return this.client.post(this.url+"/login",JSON.stringify(user),this.httpOptions)
  }
  Register(user:UserProfile)
  {
    return this.client.put(this.url+"/register",JSON.stringify(user),this.httpOptions)
  }
}
