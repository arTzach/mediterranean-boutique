import {ShopCartState, ShopCartStateItem} from '../shop-cards-item/shop-card-item';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectCartFeature = createFeatureSelector<ShopCartState>('cart');
export const selectCartItems = createSelector(
  selectCartFeature,
  (state): ShopCartStateItem[] => Object.values(state)
);
export const selectCartCount = createSelector(
  selectCartItems,
  (items: ShopCartStateItem[]) => items.reduce( (acc: number, item: ShopCartStateItem) => item.quantity + acc, 0)
)

