import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const MATERIAL_MODULES = [
  BrowserAnimationsModule,
  FlexLayoutModule,
  MdButtonModule,
  MdMenuModule,
  MdCardModule,
  MdToolbarModule,
  MdIconModule,
  MdInputModule,
  MdDialogModule,
  MdTabsModule
];

@NgModule(
  {
    imports: [MATERIAL_MODULES],
    exports: [MATERIAL_MODULES]
  }
)
export class MaterialModules {
}
