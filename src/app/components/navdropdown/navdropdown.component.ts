import { Component } from '@angular/core';
import { NavigateService } from 'src/app/service/navigate.service';

@Component({
  selector: 'app-navdropdown',
  templateUrl: './navdropdown.component.html',
  styleUrls: ['./navdropdown.component.scss'],
})
export class NavdropdownComponent {
  isOpenDropdown = false;
  constructor(private _navigateService: NavigateService) {}

  scrollToTarget(targetId: string): void {
    this._navigateService.goHome().then(() => {
      const targetElement = document.getElementById(targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  handleOpenDropdown() {
    this.isOpenDropdown = !this.isOpenDropdown;
  }
}
