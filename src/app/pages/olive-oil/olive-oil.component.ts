import {Component} from '@angular/core';
import {ShopCardItem} from '../../shop-cards-item/shop-card-item';
import {ShopCardsItemComponent} from '../../shop-cards-item/shop-cards-item.component';

@Component({
  selector: 'app-olive-oil',
  imports: [ShopCardsItemComponent],
  templateUrl: './olive-oil.component.html',
  styles: '',
})
export class OliveOilComponent {
  shopItems: ShopCardItem[] = [{
    id: "item-001",
    name: "Vintage Leather Bag",
    year: 2022,
    price: "$149.99",
    quantity: 12,
    info: "Handcrafted leather bag made from premium materials.",
    status: "available",
    imageUrl: "img/olive-branch.webp",
    imageSmUrl: "img/olive-branch.webp"
  },
  {
    id: "item-002",
    name: "Vintage Leather Bag",
    year: 2020,
    price: "$149.99",
    quantity: 12,
    info: "Handcrafted leather bag made from premium materials.",
    status: "available",
    imageUrl: "img/olive-branch.webp",
    imageSmUrl: "img/olive-branch.webp"
  },
  {
    id: "item-003",
    name: "Vintage Leather Bag",
    year: 2024,
    price: "$149.99",
    quantity: 12,
    info: "Handcrafted leather bag made from premium materials.",
    status: "available",
    imageUrl: "img/olive-branch.webp",
    imageSmUrl: "img/olive-branch.webp"
  }
  ];
}
