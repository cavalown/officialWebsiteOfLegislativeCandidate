import { Component } from '@angular/core';
import { NavigateService } from 'src/app/service/navigate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private _navigateService: NavigateService) {}

  scrollToTarget(targetId: string): void {
    this._navigateService.goHome().then(() => {
      const targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  goHome() {
    this._navigateService.goHome().then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
