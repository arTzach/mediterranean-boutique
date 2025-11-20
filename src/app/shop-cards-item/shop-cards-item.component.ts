import {Component, inject, input} from '@angular/core';
import {ShopCardItem} from './shop-card-item';
import {NgOptimizedImage} from '@angular/common';
import {Store} from '@ngrx/store';
import {CartActions} from '../store/cart.actions';
import {ConfigService} from '../config/config.service';

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
  isCartEnabled = input.required<boolean>();
  #configService = inject(ConfigService);
  addToCart(id: string) {
    console.info(`AddToCart with id ${id}`);
    window.location.href = this.#configService.get('shopUrl');
  }
}
