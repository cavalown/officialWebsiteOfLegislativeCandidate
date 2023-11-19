import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() items: any[] = [];
  image = '';
  currentIndex = 0;

  ngOnInit(){
    this.image = this.items[0].image;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  previous(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  navigateTo(index: number): void {
    this.currentIndex = index;
  }
}
