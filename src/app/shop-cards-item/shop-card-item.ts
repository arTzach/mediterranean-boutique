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

export interface ShopCardState {
  id: string,
  name: string,
  year: number,
  price: string,
  quantity: number,
  info: string,
  status: string
}
