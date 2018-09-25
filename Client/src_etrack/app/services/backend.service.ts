import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/shared/login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  login(formData){
    let fakeResponse_1 = {
      "error" : "0",
      "errorMessage" : "User Id is invalid",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    let fakeResponse_2 = {
      "error" : "0",
      "errorMessage" : "Password not valid.",
      "rowCount" : "30",
      "data": {
        "token" : "abcd"
      }
    };
    let fakeResponse_3 = {
      "error" : "1",
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
  }

  settings(formData){
    let fakeResponse_3 = {
      "error" : "1",
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
  }

  setUser(formData){
    let fakeResponse_3 = {
      "error" : "1",
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
  }

  getUser(){
    let fakeResponse_3 = {
      "error" : "1",
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
  }
  setLocations(data){
    console.log(data);
  }
  getUserLocation(){
    let fakeResponse_3 = {
      "error" : "1",
      "errorMessage" : "",
      "rowCount" : "30",
      "data": [{
        "name" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "dttm": "Sep 24 10:00:00 pm"
      },
      {
        "name" : "Amit",
        "lat": "amit@amit.la",
        "long": "password",
        "dttm": "Sep 24 10:05:00 pm"
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
  }
}
