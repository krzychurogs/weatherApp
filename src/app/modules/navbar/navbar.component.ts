import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _router: Router
  ) {}

  routeToHourForecast(): void {
    const element = this._document.querySelector('.container-daily');
    if (!element) {
      this._router.navigateByUrl('/current-weather').then(() => {
        this.routeToHourForecast();
      });
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }
  routetoCurrent(): void {
    this._router.navigateByUrl('/current-weather').then(() => {});
  }
}
