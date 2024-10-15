import { css } from "@emotion/css";
import { OrangeButton } from "../../styles/styles";
import { useContext } from "react";
import { cartContext, confirmedOrdersContext } from "../../data/data";

export default function NewOrderBtn() {
  const { setDisplayConfirmedOrders } = useContext(confirmedOrdersContext);
  const { cartDispatch } = useContext(cartContext);

  function startNewOrder() {
    if (setDisplayConfirmedOrders) {
      setDisplayConfirmedOrders(false);
    }

    if (cartDispatch) {
      cartDispatch({ type: "removeAllItems", cartItem: null });
    }
  }

  return (
    <OrangeButton onClick={() => startNewOrder()} className={newOrderButton}>
      Start New Order
    </OrangeButton>
  );
}

const newOrderButton = css`
  padding: 1em 12.5em;
  border-radius: 2em;

  @media (max-width: 600px) {
    padding: 1em 9.5em;
  }
`;
