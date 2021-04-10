import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
    ],
    imports: [
        HttpClientModule,
        HttpClientJsonpModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule {
}
