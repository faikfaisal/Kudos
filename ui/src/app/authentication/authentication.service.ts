/**
 * Created by T897060 on 24/05/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }

  private extractRequiredInformation(response) {
    let token = response.json().token;
    let message = response.json().message;

    return {
      "token": token,
      "message": message
    };
  }

  public login(username: string, password: string) {
    let url = environment.apiEndPoint + "/authenticate";

    let payload = {
      "name": username,
      "password": password
    };

    return this.http.post(url, payload)
      .map(response => this.extractRequiredInformation(response));
  }


}

