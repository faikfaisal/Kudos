/**
 * Created by T897060 on 19/06/2017.
 */
import {Observable} from "rxjs/Rx";
import {MdDialog, MdDialogRef} from "@angular/material";
import {Injectable} from "@angular/core";
import {RetryDialog} from "./dialog.invalid";

@Injectable()
export class DialogsService {

  constructor(public dialog: MdDialog) {
  }

  public retryDialog(header: string, dialogContent: string): Observable<boolean> {

    let dialogRef: MdDialogRef<RetryDialog>;

    dialogRef = this.dialog.open(RetryDialog);
    dialogRef.componentInstance.dialogHeader = header;
    dialogRef.componentInstance.dialogContent = dialogContent;

    return dialogRef.afterClosed();
  }
}
