import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CreateRepoComponent } from './create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogModule } from '../../../error/error-dialog.module';

@NgModule({
  declarations: [CreateRepoComponent],
  exports: [CreateRepoComponent],
  imports: [
    CommonModule,
    ErrorDialogModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class CreateRepoModule {

}
