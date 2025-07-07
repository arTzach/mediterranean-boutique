import {Component, inject, input} from '@angular/core';
import {ShopCardItem} from './shop-card-item';
import {NgOptimizedImage} from '@angular/common';
import {Store} from '@ngrx/store';
import {CartActions} from '../store/cart.actions';

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
  private store = inject(Store);
  addToCart(id: string) {
    this.store.dispatch(CartActions.addToCart({id}));
  }
}
