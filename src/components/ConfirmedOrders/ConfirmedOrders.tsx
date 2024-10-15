import { css } from "@emotion/css";
import orderConfirmedIcon from "/images/icon-order-confirmed.svg";
import NewOrderBtn from "./NewOrderBtn";
import Orders from "./Orders/Orders";
import { rose500, rose900 } from "../../data/data";

export default function ConfirmedOrders() {
  return (
    <div className={outerContainer}>
      <div className={innerContainer}>
        <img src={orderConfirmedIcon} alt="Green tick enclosed in a green circle" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <Orders />
        <NewOrderBtn />
      </div>
    </div>
  );
}

const outerContainer = css`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    align-items: end;
  }
`;

const innerContainer = css`
  background-color: white;
  width: fit-content;
  height: 30em;
  padding: 2em;
  border-radius: 0.5em;
  overflow-y: auto;

  img {
    width: 2em;
    margin-bottom: -0.5em;
  }

  h2 {
    font-family: "Red hat semi-bold";
    color: ${rose900};
    font-size: 2em;
    margin-top: 0.5em;
  }

  > p {
    margin-top: -1em;
    color: ${rose500};
  }
`;
