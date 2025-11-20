import {Component, inject} from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {Store} from '@ngrx/store';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-shopping-cart-header',
  imports: [MatBadgeModule],
  templateUrl: './shopping-cart-header.component.html',
  styles: ``
})
export class ShoppingCartHeaderComponent{
  store = inject(Store);
  #configSerive = inject(ConfigService);

  goToCart(){
    window.location.href = this.#configSerive.get("shopUrl");
  }
}
