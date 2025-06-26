import {Component, input} from '@angular/core';

export interface HealthCardItem{
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-health-card',
  imports: [],
  templateUrl: './health-card.component.html',
  styles: ``
})
export class HealthCardComponent {
  healthCard = input.required<HealthCardItem>();
}
