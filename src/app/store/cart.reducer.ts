import {createReducer, on} from '@ngrx/store';
import {ShopCartState, ShopCartStateItem} from '../shop-cards-item/shop-card-item';
import {CartActions} from './cart.actions';


export const initialState: ShopCartState = {};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (_state, { id }) => {
      const item = _state[id];
      const updatedItem: ShopCartStateItem =  item ? { ...item, quantity: item.quantity + 1 }
        : { id, quantity: 1, name: 'Product', info: '', year: 2022, price: '', status: ''};

      return { ..._state, [id]: updatedItem };
    }
  ),
  on(CartActions.removeFromCart, (_state, { id }) => {
      const item = _state[id];
      if ( !item ) return _state;
      if ( item.quantity === 1) {
        delete _state[id];
        return { ..._state };
      }
      const updatedItem: ShopCartStateItem = { ...item, quantity: item.quantity -1 };

      return { ..._state, [id]: updatedItem };
    }
  )
)
