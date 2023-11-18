import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss'],
})
export class DrawCardComponent implements AfterViewInit {
  @Input() images: string[] = [];
  selectedImage: string | null = null;
  @ViewChild('imagePool', { static: true }) imagePool!: ElementRef;

  private currentIndex = 0;

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    const imageElements = this.imagePool.nativeElement.querySelectorAll('img');
    if (this.currentIndex >= imageElements.length) {
      this.currentIndex = 0;
    }
    const img = imageElements[this.currentIndex] as HTMLElement;
    const selectedImageContainer = document.querySelector(
      '.selected-image'
    ) as HTMLElement;

    if (!selectedImageContainer) {
      console.error('Selected image container not found');
      return;
    }

    const windowCenterX = window.innerWidth / 2;
    const moveToCenterX = windowCenterX - img.offsetLeft - img.offsetWidth / 2;

    gsap.to(img, {
      x: () => -(window.innerWidth / 2),
      y: () => 0,
      scale: 1.2,
      duration: 3,
      ease: 'power1.inOut',
      onComplete: () => {
        this.selectedImage = img.getAttribute('src');
        setTimeout(() => {
          this.resetImagePosition(img);
          this.currentIndex++;
          setTimeout(() => this.startAnimation(), 1000);
        }, 2000);
      },
    });
  }

  resetImagePosition(img: HTMLElement) {
    gsap.to(img, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power1.inOut',
    });
  }
}
