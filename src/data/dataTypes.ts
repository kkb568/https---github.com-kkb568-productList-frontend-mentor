export type ImageUrls = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Dessert = {
  image: ImageUrls;
  name: string;
  category: string;
  price: number;
};

export type DessertItemProps = {
  image: ImageUrls;
  name: string;
  category: string;
  price: number;
  windowWidth: number;
};

export type CartBtnProps = {
  name: string;
  price: number;
};

export type OrangeBtnProps = {
  name: string;
  amount: number;
};

export type CartItem = {
  name: string;
  amount: number;
  price: number;
};

export type CartContext = {
  cart: CartItem[];
  cartDispatch: React.Dispatch<CartActions> | null;
};

export type CartActionTypes = "addItem" | "removeItem" | "addItemAmount" | "subtractItemAmount" | "removeAllItems";

export type CartActions = {
  type: CartActionTypes;
  cartItem: CartItem | null;
};

export type ConfirmedOrdersData = {
  displayConfirmedOrders: boolean;
  setDisplayConfirmedOrders: React.Dispatch<React.SetStateAction<boolean>> | null;
};
