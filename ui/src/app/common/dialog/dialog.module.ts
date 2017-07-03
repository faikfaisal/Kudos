/**
 * Created by T897060 on 19/06/2017.
 */

import {NgModule} from "@angular/core";
import {RetryDialog} from "./dialog.invalid";
import {DialogsService} from "./dialog.service";
import {MaterialModules} from "../material.module";


@NgModule({
  imports: [
    MaterialModules
  ],
  exports: [
    RetryDialog,
  ],
  declarations: [
    RetryDialog,
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    RetryDialog,
  ],
})
export class DialogsModule {
}
