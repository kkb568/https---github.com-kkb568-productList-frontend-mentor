import { CartItem, Dessert } from "../data/dataTypes";

/* The function is used to set the key value for each dessert item 
by finding the index value for each item. */
export function setDessertItemKey(dessertArr: Dessert[], dessert: Dessert): number {
  let key: number = 0;

  for (let i = 0; i < dessertArr.length; i++) {
    if (dessertArr[i] === dessert) {
      break;
    }
    key++;
  }

  return key;
}

/* The function is used to set the key value for each cart item 
by finding the index value for each item. */
export function setCartItemKey(cart: CartItem[], cartItem: CartItem): number {
  let key: number = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i] === cartItem) {
      break;
    }
    key++;
  }

  return key;
}

export function getThumbnailImage(desserts: Dessert[], name: string): string {
  let thumbNail: string = "";

  for (let i = 0; i < desserts.length; i++) {
    if (desserts[i].name === name) {
      thumbNail = desserts[i].image.thumbnail;
      break;
    }
  }

  return thumbNail;
}
