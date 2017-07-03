/**
 * Created by T897060 on 19/06/2017.
 */
import {MdDialogRef} from "@angular/material";
import {Component} from "@angular/core";

@Component({
  selector: 'retry-dialog',
  templateUrl: './dialog.html'
})
export class RetryDialog {

  public dialogHeader: string;
  public dialogContent: string;

  constructor(public dialogRef: MdDialogRef<RetryDialog>) {
  }
}
