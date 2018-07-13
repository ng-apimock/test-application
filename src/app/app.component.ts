import {Component, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    item: string;
    response: HttpResponse<any>;
    done: boolean;

    /**
     * Constructor.
     * @param {AppService} service The app service.
     */
    constructor(private service: AppService) {
    }

    /** {@inheritDoc}. */
    ngOnInit() {
        this.get();
    }

    /** Gets the data. */
    get() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.service
            .get()
            .subscribe(response => {
                this.response = response;
                this.done = true;
            }, error => {
                this.response = error;
                this.done = true;
            });
    }

    /** Gets the binary data. */
    binary() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.service
            .binary()
            .subscribe(response => {
                const url = window.URL.createObjectURL(response.body);
                const a = document.createElement('a');
                a.setAttribute('style', 'display:none;');
                document.body.appendChild(a);

                a.href = url;
                a.download = response.headers.get('filename');
                a.click();
                this.done = true;
            }, error => {
                this.response = error;
                this.done = true;
            });
    }

    /** Gets the data with jsonp. */
    getAsJsonp() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.service
            .getAsJsonp()
            .subscribe((data) => {
                this.response = { body: data, status: 200 } as HttpResponse<any>;
                this.done = true;
            }, error => {
                this.response = error;
                this.done = true;
            });
    }

    /** Posts the data. */
    post() {
        this.done = false;
        this.response = {} as HttpResponse<any>;
        this.service
            .post({ item: this.item })
            .subscribe((response) => {
                this.response = response;
                this.done = true;
            }, error => {
                this.response = error;
                this.done = true;
            });
    }
}
