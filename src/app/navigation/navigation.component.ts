import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'apimock-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router) {
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
