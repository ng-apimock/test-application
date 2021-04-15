import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './navigation/navigation.module';
import { ReposModule } from './github/repos/repos.module';
import { CreateRepoModule } from './github/repos/create/create.module';
import { ErrorDialogModule } from './error/error-dialog.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CreateRepoModule,
    ErrorDialogModule,
    NavigationModule,
    NoopAnimationsModule,
    ReposModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
