import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;
  docData;

  constructor(private _backendService: BackendService, private _route: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.dataLoading = true;
    this.querySubscription = this._backendService.getUser().subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.docData = res["data"];
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

  logout(){
    window.localStorage.removeItem("token");
    this._route.navigate(['/login']);
  }

  settings(formData){
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateUser(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
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
