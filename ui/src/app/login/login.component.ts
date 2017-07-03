import {Component, OnInit} from "@angular/core";
import {AuthenticationService} from "../authentication/authentication.service";
import {DialogsService} from "../common/dialog/dialog.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailAddress: string;
  password: string;
  isAuthenticationFailed: boolean;
  errorMessage: string;

  constructor(public authenticationService: AuthenticationService,
              public dialogService: DialogsService) {
  }

  ngOnInit() {
  }

  private handleResponse(response) {
    if (!response.token) {
      this.isAuthenticationFailed = true;
      this.errorMessage = response.message;
      this.dialogService.retryDialog("Authentication Failed", this.errorMessage);
    } else {
      this.isAuthenticationFailed = false;
      localStorage.setItem('token', String(response.token));
    }
  }

  login() {
    this.authenticationService.login(
      this.emailAddress,
      this.password
    ).subscribe(response => this.handleResponse(response), error =>
      console.log(error));
  }
}
