import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
})
export class CollapseComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  isCollapsed = false;
  handleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
