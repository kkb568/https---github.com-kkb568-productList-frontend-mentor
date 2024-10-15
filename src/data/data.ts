import { createContext } from "react";
import { CartContext, CartItem, ConfirmedOrdersData, Dessert } from "./dataTypes";

export const desserts: Dessert[] = [
  {
    image: {
      thumbnail: "image-waffle-thumbnail.jpg",
      mobile: "image-waffle-mobile.jpg",
      tablet: "image-waffle-tablet.jpg",
      desktop: "image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "image-creme-brulee-thumbnail.jpg",
      mobile: "image-creme-brulee-mobile.jpg",
      tablet: "image-creme-brulee-tablet.jpg",
      desktop: "image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "image-macaron-thumbnail.jpg",
      mobile: "image-macaron-mobile.jpg",
      tablet: "image-macaron-tablet.jpg",
      desktop: "image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "image-tiramisu-thumbnail.jpg",
      mobile: "image-tiramisu-mobile.jpg",
      tablet: "image-tiramisu-tablet.jpg",
      desktop: "image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "image-baklava-thumbnail.jpg",
      mobile: "image-baklava-mobile.jpg",
      tablet: "image-baklava-tablet.jpg",
      desktop: "image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "image-meringue-thumbnail.jpg",
      mobile: "image-meringue-mobile.jpg",
      tablet: "image-meringue-tablet.jpg",
      desktop: "image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "image-cake-thumbnail.jpg",
      mobile: "image-cake-mobile.jpg",
      tablet: "image-cake-tablet.jpg",
      desktop: "image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "image-brownie-thumbnail.jpg",
      mobile: "image-brownie-mobile.jpg",
      tablet: "image-brownie-tablet.jpg",
      desktop: "image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "image-panna-cotta-thumbnail.jpg",
      mobile: "image-panna-cotta-mobile.jpg",
      tablet: "image-panna-cotta-tablet.jpg",
      desktop: "image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export const red = "#c73a0f";
export const rose50 = "#fcf9f7";
export const rose300 = "#c9aea6";
export const rose500 = "#87635a";
export const rose900 = "#260f08";

export const defaultCartItem: CartItem = {
  name: "",
  price: 0,
  amount: 0,
};

const defaultCartContext: CartContext = {
  cart: [],
  cartDispatch: null,
};

const defaultConfirmedOrdersContext: ConfirmedOrdersData = {
  displayConfirmedOrders: false,
  setDisplayConfirmedOrders: null,
};

export const cartContext = createContext<CartContext>(defaultCartContext);
export const confirmedOrdersContext = createContext<ConfirmedOrdersData>(defaultConfirmedOrdersContext);