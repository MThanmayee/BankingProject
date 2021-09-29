import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './user-profile';
import { Account } from './account';
import { Transactions } from './transactions';
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
  GetNumber(customerid:number)
  {
    return this.client.get(this.url+'/getnumber?customerid='+customerid)
  }
  GetDetails(email:string):Observable<UserProfile>
  {
     return this.client.get<UserProfile>(this.url+'/display?EmailId='+email)
  }
  OpenNewAccount(newUser:UserProfile) 
  {
    return this.client.post(this.url+'/OpenNewAccount', JSON.stringify(newUser), this.httpOptions);
  }
  Login(user:Account)
  {
    return this.client.post(this.url+"/login",JSON.stringify(user),this.httpOptions)
  }
  Register(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/register",JSON.stringify(user),this.httpOptions)
  }
  GetAccountById(id:number)
  {
    return this.client.get<Account>(this.url+'/summary?accountnumber='+id);
  }

  getTransactions(accountnumber:number)
  {
    return this.client.get<Transactions[]>(this.url+'/transactions?AccountNumber='+accountnumber)
  }
  getall():Observable<Account[]>
  {
    return this.client.get<Account[]>(this.url+'/Account');
  }
  confirmotp(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/confirmotp",JSON.stringify(user),this.httpOptions)
  }

  forgotuid(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/forgotuid",JSON.stringify(user),this.httpOptions)
  }
 
  confirmotp1(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/confirmotp1",JSON.stringify(user),this.httpOptions)
  }
  forgotpwd(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/forgotpwd",JSON.stringify(user),this.httpOptions)
  }
 
  confirmotp2(user:Account):Observable<Account>
  {
    return this.client.put(this.url+"/confirmotp2",JSON.stringify(user),this.httpOptions)
  }
}


