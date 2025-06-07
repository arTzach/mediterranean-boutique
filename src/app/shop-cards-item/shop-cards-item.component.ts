import {Component, input} from '@angular/core';
import {ShopCardItem} from './shop-card-item';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-shop-cards-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './shop-cards-item.component.html',
  styles: ``
})
export class ShopCardsItemComponent {
  item = input.required<ShopCardItem>();

}
