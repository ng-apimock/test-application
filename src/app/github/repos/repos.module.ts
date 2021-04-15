import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ErrorDialogModule } from '../../error/error-dialog.module';

@NgModule({
  declarations: [ReposComponent],
  exports: [ReposComponent],
  imports: [
    CommonModule,
    ErrorDialogModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    RouterModule
  ],
  providers: []
})
export class ReposModule {

}
