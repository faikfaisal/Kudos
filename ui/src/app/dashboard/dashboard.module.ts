import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {MaterialModules} from "../common/material.module";
import {DashboardRouting} from "./dashboard.routing";

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    DashboardRouting
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
