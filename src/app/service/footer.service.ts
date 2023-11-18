import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  url: string = '';
  imageUrl: string = '';
  position: any;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.url = event.url;
        this.setImageAnimationProps();
      });
  }

  private setImageAnimationProps() {
    switch (this.url) {
      case '/home': {
        this.imageUrl = 'assets/image/Tail.png';
        this.position = {
          bottom: '200px',
          left: '10px',
        };
        break;
      }
      case '/activity': {
        this.imageUrl = 'assets/image/boat.png';
        this.position = {
          bottom: '255px',
          right: '10px',
        };
        break;
      }
      case '/policy': {
        this.imageUrl = 'assets/image/turtle.1.png';
        this.position = {
          bottom: '5px',
          right: '10px',
        };
        break;
      }
      case '/donate': {
        this.imageUrl = 'assets/image/whale_Matting.png';
        this.position = {
          bottom: '160px',
          left: '10px',
        };
        break;
      }
      default: {
        break;
      }
    }
  }

  public play(animationTarget: ElementRef) {
    const element = animationTarget.nativeElement;
    setTimeout(() => {
      switch (this.url) {
        case '/home': {
          gsap.to(element, {
            x: 30,
            y: 0,
            duration: 0.5,
            ease: 'power1.out',
            repeat: -1,
            yoyo: true,
          });
          break;
        }
        case '/activity': {
          const tl = gsap.timeline({ repeat: -1, yoyo: true });
          const elementWidth = element.clientWidth;
          tl.to(element, {
            x: () => `-${window.innerWidth - elementWidth}px`,
            duration: 7,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          });
          tl.to(
            element,
            {
              y: '10',
              duration: 0.2,
              ease: 'power1.inOut',
              yoyo: true,
              repeat: -1,
            },
            0
          );

          break;
        }
        case '/policy': {
          const tl = gsap.timeline({ repeat: -1 });
          const elementWidth = element.clientWidth;

          tl.to(element, {
            x: () => `-${window.innerWidth - elementWidth}px`,
            y: -100,
            duration: 8,
            ease: 'power2.inOut',
          })
            .to(
              element,
              { rotationY: 180, rotation: 50, duration: 0.5 },
              '-=0.25'
            )
            .to(
              element,
              { x: 0, y: 0, duration: 8, ease: 'power2.inOut' },
              '+=0.5'
            )
            .to(element, { rotationY: 0, rotation: 0, duration: 0.5 }, '-=0.25')
            .set(element, { rotationY: 0, rotation: 0 });
          break;
        }
        case '/donate': {
          gsap.to(element, { rotation: 360, duration: 3, ease: "linear", repeat: -1, yoyo:true });
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
