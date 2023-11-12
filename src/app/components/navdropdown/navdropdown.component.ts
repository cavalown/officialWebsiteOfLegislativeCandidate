import { Component } from '@angular/core';

@Component({
  selector: 'app-navdropdown',
  templateUrl: './navdropdown.component.html',
  styleUrls: ['./navdropdown.component.scss'],
})
export class NavdropdownComponent {
  isOpenDropdown = false;
  scrollToTarget(targetId: string): void {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  handleOpenDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }
}
