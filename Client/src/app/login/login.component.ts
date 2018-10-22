import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;

  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
  }

  login(formData){
    this.dataLoading = true;
    this.querySubscription = this._backendService.login(formData).subscribe((res) => {
        if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          window.localStorage.setItem('token', res["data"].token);
          this._route.navigate(['/aboutus']);
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
}

ngOnDestroy(){
  if (this.querySubscription) {
    this.querySubscription.unsubscribe();
}
}

}
