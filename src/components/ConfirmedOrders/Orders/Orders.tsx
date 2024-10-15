import { css } from "@emotion/css";
import { useContext } from "react";
import { cartContext, rose50, rose900 } from "../../../data/data";
import { getTotalPrice } from "../../../utils/cartUtils";
import OrderItem from "./OrderItem";
import { setCartItemKey } from "../../../utils/mainUtils";

export default function Orders() {
  const { cart } = useContext(cartContext);
  const totalPrice = getTotalPrice(cart).toFixed(2);

  const orderList = cart.map((cartItem) => {
    const { name, price, amount } = cartItem;
    const keyValue = setCartItemKey(cart, cartItem);

    return <OrderItem key={keyValue} name={name} price={price} amount={amount} />;
  });

  return (
    <div className={ordersContainer}>
      {orderList}
      <div className={orderTotal}>
        <p>Order Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}

const ordersContainer = css`
  width: fit-content;
  height: fit-content;
  background-color: ${rose50};
  padding: 0 1em;
  margin-bottom: 2em;
  border-radius: 0.5em;

  @media (max-width: 600px) {
    width: 20em;
  }
`;

const orderTotal = css`
  display: flex;
  gap: 16em;
  align-items: center;
  color: ${rose900};

  p:last-child {
    font-family: "Red hat bold";
    font-size: 1.2em;
  }

  @media (max-width: 600px) {
    gap: 13em;
  }
`;
