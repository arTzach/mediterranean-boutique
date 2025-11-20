import {Component} from '@angular/core';
import {ShopCardItem} from '../../shop-cards-item/shop-card-item';
import {ShopCardsItemComponent} from '../../shop-cards-item/shop-cards-item.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-olive-oil',
  imports: [ShopCardsItemComponent, NgClass],
  templateUrl: './olive-oil.component.html',
  styles: '',
})
export class OliveOilComponent {
  shopItems: ShopCardItem[] = [{
    id: "item-001",
    name: "Extra Virgin Olive Oil",
    year: 2025,
    price: "",
    quantity: 12,
    info: "Early harvest, extra virgin olive oil.",
    status: "available",
    imageUrl: "img/Medboutiquebottleshooting1303.jpg",
    imageSmUrl: "img/Medboutiquebottleshooting1303.jpg"
  },
  ];
}
