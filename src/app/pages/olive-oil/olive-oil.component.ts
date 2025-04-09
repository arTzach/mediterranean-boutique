import { Component } from '@angular/core';
import { ShopCardsComponent } from '../../shop-cards/shop-cards.component';

@Component({
  selector: 'app-olive-oil',
  imports: [ShopCardsComponent],
  templateUrl: './olive-oil.component.html',
  styles: ['body {background-color: green;}'],
})
export class OliveOilComponent {}
