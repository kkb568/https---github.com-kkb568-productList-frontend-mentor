import { css } from "@emotion/css";
import { cartContext, red } from "../../../data/data";
import { useContext } from "react";
import EmptyCart from "./EmptyCart";
import CartContent from "./CartContent.tsx/CartContent";

export default function Cart() {
  const { cart } = useContext(cartContext);

  return (
    <div className={cartStyle}>
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? <EmptyCart /> : <CartContent />}
    </div>
  );
}

const cartStyle = css`
  background-color: white;
  padding: 2em;
  border-radius: 1em;
  width: fit-content;
  height: fit-content;
  margin-left: 1em;
  margin-top: 2em;

  h2 {
    font-family: "Red hat semi-bold";
    color: ${red};
    margin-top: 0;
  }
`;
