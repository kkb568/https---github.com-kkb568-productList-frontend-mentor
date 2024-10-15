import { useContext } from "react";
import { cartContext, rose50, rose900 } from "../../../../data/data";
import CartItemDetails from "./CartItemDetails";
import { setCartItemKey } from "../../../../utils/mainUtils";
import { css } from "@emotion/css";
import carbonNeutral from "/images/icon-carbon-neutral.svg";
import ConfirmOrderBtn from "./ConfirmOrderBtn";
import OrderTotal from "./OrderTotal";

export default function CartContent() {
  const { cart } = useContext(cartContext);

  const cartItems = cart.map((cartItem) => {
    const { name, price, amount } = cartItem;
    const keyValue = setCartItemKey(cart, cartItem);

    return <CartItemDetails key={keyValue} name={name} price={price} amount={amount} />;
  });

  return (
    <div>
      {cartItems}
      <OrderTotal />
      <div className={note}>
        <img src={carbonNeutral} alt="Icon for signifying carbon-neutral" />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <ConfirmOrderBtn />
    </div>
  );
}

const note = css`
  display: flex;
  gap: 0.5em;
  background-color: ${rose50};
  padding: 0.5em 1em;
  border-radius: 0.5em;
  margin-bottom: 1em;

  p {
    color: ${rose900};

    span {
      font-family: "Red hat semi-bold";
    }
  }
`;
