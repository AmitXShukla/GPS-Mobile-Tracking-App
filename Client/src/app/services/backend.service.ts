import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }

  login(formData){
    // let fakeResponse_1 = {
    //   "errorCode" : "0",
    //   "errorMessage" : "User Id is invalid",
    //   "rowCount" : "30",
    //   "data": {
    //     "token" : "abcd"
    //   }
    // };
    // let fakeResponse_2 = {
    //   "errorCode" : "0",
    //   "errorMessage" : "Password not valid.",
    //   "rowCount" : "30",
    //   "data": {
    //     "token" : "abcd"
    //   }
    // };
    // let fakeResponse_3 = {
    //   "errorCode" : "1",
    //   "errorMessage" : "Authentication Successful.",
    //   "rowCount" : "30",
    //   "data": {
    //     "token" : "abcd"
    //   }
    // };
    // return Observable.create(
    //   observer => {
    //     setTimeout(() => {
    //       observer.next(fakeResponse_3)
    //     }
    //     ,2000)
    //   });
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.post("http://localhost:3000/login", formData, httpOptions);
  }

  updateUser(formData){
    /**
    console.log(formData)
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
*/
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.post("http://localhost:3000/updateuser", formData, httpOptions);
  }

  setUser(formData){
    /**
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "User Created.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
 */
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.post("http://localhost:3000/signup", formData, httpOptions);
  }

  getUser(){
    /**
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": {
        "name" : "Amit",
        "inputEmail": "amit@amit.la",
        "inputPassword": "password",
        "question": "Question",
        "answer": "Answer"
      }
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
       */
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.get("http://localhost:3000/user",httpOptions);
  }
  setLocations(formData){
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.post("http://localhost:3000/setlocation", formData, httpOptions);
  }
  getUserLocation(){
    /**
    let fakeResponse_3 = {
      "errorCode" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": [{
        "email" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "createdAt": "Sep 24 10:00:00 pm"
      },
      {
        "email" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "createdAt": "Sep 24 10:05:00 pm"
      },
    ]
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeResponse_3)
        }
        ,2000)
      });
  */
 let token = localStorage.getItem('token') ? localStorage.getItem('token') : "abcd";
  let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
  return this._http.get("http://localhost:3000/getlocation", httpOptions);
}
}
