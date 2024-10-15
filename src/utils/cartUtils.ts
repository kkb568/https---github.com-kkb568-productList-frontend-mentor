import { defaultCartItem } from "../data/data";
import { CartActions, CartItem } from "../data/dataTypes";

export function cartReducer(state: CartItem[], action: CartActions): CartItem[] {
  const { type, cartItem } = action;

  switch (type) {
    case "addItem":
      return cartItem ? [...state, cartItem] : state;
    case "addItemAmount":
      return cartItem ? incrementAmount(state, cartItem.name) : state;
    case "subtractItemAmount":
      return cartItem ? decrementAmount(state, cartItem.name) : state;
    case "removeItem":
      return cartItem ? removeCartItem(state, cartItem.name) : state;
    case "removeAllItems":
      return removeAllCartItems(state);
    default:
      return state;
  }
}

// The function is used to increment the item's amount value.
function incrementAmount(cart: CartItem[], name: string): CartItem[] {
  const newCart: CartItem[] = cart.map((cartItem) => {
    return cartItem.name === name ? { ...cartItem, amount: cartItem.amount++ } : cartItem;
  });

  return newCart;
}

// The function is used to increment the item's amount value.
function decrementAmount(cart: CartItem[], name: string): CartItem[] {
  let newAmount: number = 0;

  // Set the newAmount to found item's amount minus one.
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      newAmount = cart[i].amount--;
    }
  }

  // Remove the cart item if the newAmount is equal to zero (meaning that the item has been removed from the cart).
  if (newAmount === 0) {
    return removeCartItem(cart, name);
  }

  // Update the item with the new amount value if not equal to zero.
  const newCart = cart.map((cartItem) => {
    return cartItem.name === name ? { ...cartItem, amount: newAmount } : cartItem;
  });

  return newCart;
}

// The function is used to remove item from cart's array.
function removeCartItem(cart: CartItem[], name: string): CartItem[] {
  const newCart = cart.filter((cartItem) => cartItem.name !== name);
  return newCart;
}

function removeAllCartItems(cart: CartItem[]): CartItem[] {
  const newCart: CartItem[] = [...cart];

  while (newCart.length > 0) {
    newCart.pop();
  }

  return newCart;
}

export function getCartItem(cart: CartItem[], name: string): CartItem {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      return cart[i];
    }
  }

  return defaultCartItem;
}

export function getCartItemAmount(cart: CartItem[], name: string): number {
  let amount: number = 0;

  if (cart.length === 0) {
    return amount;
  }

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      amount = cart[i].amount;
      return amount;
    }
  }

  return amount;
}

// The function is used to get the total cost of all items in the cart.
export function getTotalPrice(cart: CartItem[]): number {
  let totalPrice: number = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].amount * cart[i].price;
  }

  return totalPrice;
}
