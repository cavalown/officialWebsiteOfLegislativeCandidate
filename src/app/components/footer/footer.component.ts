import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit{
  @ViewChild('footerImage', { static: false }) footerImage!: ElementRef;
  constructor(public footerService: FooterService) {}

  ngAfterViewInit(){
    this.footerService.play(this.footerImage);
  }
}
