/**
 * Created by T897060 on 28/06/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";


const dashboard: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];


@NgModule({
  imports: [
    RouterModule.forChild(dashboard)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting {
}
