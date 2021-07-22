import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'apimock-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private router: Router) {
    }

    goHome(): void {
        this.router.navigate(['/']);
    }
}
