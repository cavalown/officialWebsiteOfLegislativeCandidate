import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isShowGoTop = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isShowGoTop = window.scrollY > 100;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
