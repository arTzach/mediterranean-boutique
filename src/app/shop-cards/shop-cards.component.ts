import {Component, inject} from '@angular/core';
import {CartActions} from '../actions/cart.actions';
import {Store} from '@ngrx/store';
import {ShopCardsItemComponent} from '../shop-cards-item/shop-cards-item.component';
import {ShopCardItem} from '../shop-cards-item/shop-card-item';

@Component({
  selector: 'app-shop-cards',
  imports: [
    ShopCardsItemComponent
  ],
  templateUrl: './shop-cards.component.html',
  styles: ``
})
export class ShopCardsComponent {
  private store = inject(Store);
  shopItem: ShopCardItem = {
    id: "item-001",
    name: "Vintage Leather Bag",
    year: 2022,
    price: "$149.99",
    quantity: 12,
    info: "Handcrafted leather bag made from premium materials.",
    status: "available",
    imageUrl: "img/olive-branch.webp",
    imageSmUrl: "img/olive-branch.webp"
  };
  addToCart(id: string) {
    console.log('addToCart: ', id);
    this.store.dispatch(CartActions.addToCart({id}));
  }
}
