import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrollToTarget(targetId: string): void {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
