import {BrowserModule} from "@angular/platform-browser";
import {Directive, HostBinding, Input, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginModule} from "./login/login.module";
import {AppRoutingModule} from "./app.routing";
import {HomeScreenComponent} from "./homescreen/homescreen.component";
import {MaterialModules} from "./common/material.module";

import {DialogsModule} from "./common/dialog/dialog.module";
import {AuthenticationService} from "./authentication/authentication.service";
import {AuthGuard} from "./authentication/auth-guard.service";
import {DashboardModule} from "./dashboard/dashboard.module";

@Directive({
  selector: '[layout]'
})
export class LayoutDirective {
  @Input() layout: string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction() {
    return (this.layout === 'column') ? 'column' : 'row';
  }
}
@Directive({
  selector: '[flex]'
})
export class FlexDirective {
  @Input() shrink: number = 1;
  @Input() grow: number = 1;
  @Input() flex: string;

  @HostBinding('style.flex')
  get style() {
    return `${this.grow} ${this.shrink} ${this.flex === '' ? '0' : this.flex}%`;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    FlexDirective,
    LayoutDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    AppRoutingModule,
    DialogsModule,
    LoginModule,
    DashboardModule
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
