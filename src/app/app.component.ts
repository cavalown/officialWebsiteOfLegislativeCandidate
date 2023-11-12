import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isOpenDropdown = false;
  scrollToTarget(targetId:string): void {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleOpenDropdown(){
    this.isOpenDropdown = ! this.isOpenDropdown
  }
}
