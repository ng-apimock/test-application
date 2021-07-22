import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorDialogComponent } from './error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorService } from './error.service';

@NgModule({
    declarations: [
        ErrorDialogComponent
    ],
    exports: [
        ErrorDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        RouterModule
    ],
    providers: [
        ErrorService
    ]
})
export class ErrorDialogModule {
}
