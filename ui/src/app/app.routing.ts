/**
 * Created by T897060 on 16/05/2017.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeScreenComponent} from "./homescreen/homescreen.component";

const routes: Routes = [
  {path: '', redirectTo: '/homescreen', pathMatch: 'full'},
  {path: 'homescreen', component: HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
