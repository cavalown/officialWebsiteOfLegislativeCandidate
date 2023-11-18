import { Component, Input } from '@angular/core';
import { NavigateService } from 'src/app/service/navigate.service';

interface Activity {
  id: string;
  title: string;
  images1: string[];
  images2: string[];
  date: string;
  description: string;
  content: string[];
}
@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent {
  @Input() activityInfo: Activity | null = null;
}
