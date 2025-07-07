export interface ShopCardItem {
  id: string,
  name: string,
  year: number,
  price: string,
  quantity: number,
  info: string,
  status: string,
  imageUrl: string,
  imageSmUrl: string
}

export interface ShopCartStateItem {
  id: string,
  name: string,
  year: number,
  price: string,
  quantity: number,
  info: string,
  status: string
}

export interface ShopCartState {
  [id: string]: ShopCartStateItem;
}
