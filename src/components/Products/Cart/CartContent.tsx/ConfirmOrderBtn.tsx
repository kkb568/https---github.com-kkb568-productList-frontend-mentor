import { css } from "@emotion/css";
import { OrangeButton } from "../../../../styles/styles";
import { useContext } from "react";
import { confirmedOrdersContext } from "../../../../data/data";

export default function ConfirmOrderBtn() {
  const { setDisplayConfirmedOrders } = useContext(confirmedOrdersContext);

  return (
    <OrangeButton onClick={() => setDisplayConfirmedOrders && setDisplayConfirmedOrders(true)} className={confirmOrderButton}>
      Confirm Order
    </OrangeButton>
  );
}

const confirmOrderButton = css`
  padding: 1em 7.5em;
  border-radius: 2em;
`;
