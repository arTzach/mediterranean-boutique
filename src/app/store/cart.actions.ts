import {createActionGroup, props} from '@ngrx/store';

export const CartActions = createActionGroup({
  source: 'cart',
  events: {
    'Add To Cart': props<{ id : string }>(),
    'Remove From Cart': props<{id : string }>()
  }
})
