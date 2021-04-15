import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialog: MatDialog) {
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onError(error: Error, callback: Function): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: {
        error
      }
    });

    dialogRef.afterClosed().subscribe(() => callback());
  }
}
