import { css } from "@emotion/css";
import { useContext } from "react";
import { cartContext, rose900 } from "../../../../data/data";
import { getTotalPrice } from "../../../../utils/cartUtils";

export default function OrderTotal() {
  const { cart } = useContext(cartContext);
  const totalPrice = getTotalPrice(cart).toFixed(2);

  return (
    <div className={orderTotal}>
      <p>Order Total</p>
      <p>${totalPrice}</p>
    </div>
  );
}

const orderTotal = css`
  display: flex;
  gap: 9em;
  align-items: center;
  color: ${rose900};

  p:last-child {
    font-family: "Red hat bold";
    font-size: 1.2em;
  }
`;
