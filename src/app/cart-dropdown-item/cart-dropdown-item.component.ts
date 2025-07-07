import {Component, input} from '@angular/core';
import {ShopCartStateItem} from '../shop-cards-item/shop-card-item';

@Component({
  selector: 'app-cart-dropdown-item',
  imports: [],
  templateUrl: './cart-dropdown-item.component.html',
  styles: ``
})
export class CartDropdownItemComponent {
  cartItem = input.required<ShopCartStateItem>();
}
