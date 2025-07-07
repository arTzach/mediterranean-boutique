import {Component, inject, signal} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {Store} from '@ngrx/store';
import {selectCartCount, selectCartItems} from '../../store/cart.selector';
import {AsyncPipe} from '@angular/common';
import {take} from 'rxjs';

@Component({
  selector: 'app-shopping-cart-header',
  imports: [MatBadgeModule, AsyncPipe],
  templateUrl: './shopping-cart-header.component.html',
  styles: ``
})
export class ShoppingCartHeaderComponent{
  store = inject(Store)
  countCartItems = signal(1);
  cartItemsCount$ = this.store.select(selectCartCount);
  cartItems$ = this.store.select(selectCartItems);

  onClick(){
     this.cartItems$.pipe(take(1)).subscribe(console.log)
  }
}
