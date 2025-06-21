import {Component, input} from '@angular/core';

export interface infoCardItem{
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-info-item',
  imports: [],
  templateUrl: './card-info-item.component.html',
  styles: ``
})
export class CardInfoItemComponent {
  infoItem = input.required<infoCardItem>();
}
