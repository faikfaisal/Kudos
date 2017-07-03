/**
 * Created by T897060 on 15/05/2017.
 */
import {NgModule} from "@angular/core";
import {LoginRouting} from "./login.routing";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../authentication/authentication.service";
import {MaterialModules} from "../common/material.module";
import {DialogsService} from "../common/dialog/dialog.service";

@NgModule({
  imports: [FormsModule, CommonModule, MaterialModules, LoginRouting],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthenticationService, DialogsService]
})
export class LoginModule {
}
