import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from './user-profile';
import { Account } from './account';
import { Transactions } from './transactions';
import { Admin } from './admin';
import { Benificiaries } from './benificiaries';
import {Observable, throwError,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public subject=new Subject<boolean>();
  Url !:string;  
  token !: string;  
  header : any;  
  private url = "https://localhost:5001/api/account";
  httpOptions = {
    headers : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }
  constructor(private client:HttpClient) { }
  receivedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  validatetpassword(accountnumber:number,password:string)
  {
    return this.client.get(this.url+'/validate?accountnumber='+accountnumber+'&&password='+password)
  }
  generatetransaction()
  {
    return this.client.get(this.url+'/generatetransaction')
  }
  getbydate(fromdate:Date, todate: Date, accountnumber:String)
  {
    return this.client.get<Transactions[]>(this.url+'/getbydate?fromdate='+fromdate+'T00:00:00&&todate='+todate+'T00:00:00&&accountnumber='+accountnumber)
  }
  UpdateBalance(transactions:Transactions)
  {
    return this.client.put(this.url+'/accountbalance',JSON.stringify(transactions),this.httpOptions)
  }
  AddTransactions(transactions:Transactions)
  {
    return this.client.post(this.url+'/newtransaction',JSON.stringify(transactions), this.httpOptions)
  }
  GetBenificiary(id:number):Observable<any[]>
  {
    return this.client.get<any[]>(this.url+'/getbenificiary?accountnumber='+id)
  }
  NewBenificiary(benificiary:Benificiaries)
  {
    console.log('in service')
    return this.client.post(this.url,JSON.stringify(benificiary),this.httpOptions)
  }
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
    console.log("hi")
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
  GetBank(id:number)
  {
    return this.client.get(this.url+'/bankdetails?id='+id)
  }

  getTransactions(accountnumber:number)
  {
    return this.client.get<Transactions[]>(this.url+'/transactions?AccountNumber='+accountnumber)
  }
  singletransaction(transactionId:number){
    return this.client.get(this.url+'/singletransaction?transactionId='+transactionId)
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
  
  AdminLogin(user:Admin)
  {
    return this.client.post(this.url+"/adminlogin",JSON.stringify(user),this.httpOptions)
  }

  getAllusers(): Observable<UserProfile[]> {
    return this.client.get<UserProfile[]>(this.url + '/displayinfo/')
    
  }
  Approve(user:UserProfile)
  {
    return this.client.post(this.url+"/approve",JSON.stringify(user),this.httpOptions)
  }
}


