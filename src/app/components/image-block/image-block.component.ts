import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.scss'],
})
export class ImageBlockComponent {
  @Input() images: string[] = [];
  leftImages: string[] = [];
  rightImage: string | undefined = '';
  constructor() {}

  ngOnInit() {
    this.leftImages = this.images.splice(0, 4);
    this.rightImage = this.images.pop();
  }
}
