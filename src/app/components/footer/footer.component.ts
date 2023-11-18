import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit, OnChanges {
  @ViewChild('footerImage', { static: false }) footerImage!: ElementRef;
  constructor(
    public footerService: FooterService,
    private router: Router,
    private _cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.footerService.updateAnimationSettings(event.url);
        setTimeout(() => {
          this.footerService.play(this.footerImage);
        }, 300);
        this._cdr.detectChanges();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['footerImage']) {
      this.footerService.play(this.footerImage);
    }
  }
}
