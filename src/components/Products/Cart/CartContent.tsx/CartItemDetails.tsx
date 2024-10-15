import { css } from "@emotion/css";
import { CartItem } from "../../../../data/dataTypes";
import { cartContext, red, rose300, rose500, rose900 } from "../../../../data/data";
import { useContext } from "react";
import { BottomLine } from "../../../../styles/styles";

export default function CartItemDetails({ name, price, amount }: CartItem) {
  const { cartDispatch } = useContext(cartContext);
  const cartItem: CartItem = { name, amount, price };

  const itemPrice = price.toFixed(2);
  const totalItemPrice = (price * amount).toFixed(2);

  return (
    <div>
      <div className={outerCartItemContent}>
        <h4>{name}</h4>
        <span className={innerCartItemContent}>
          <p>{amount}x</p>
          <p>@ ${itemPrice}</p>
          <p>
            <strong>${totalItemPrice}</strong>
          </p>
        </span>
        <button onClick={() => cartDispatch && cartDispatch({ type: "removeItem", cartItem })}>
          <p>X</p>
        </button>
      </div>
      <BottomLine />
    </div>
  );
}

const outerCartItemContent = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
    border: 1px solid ${rose300};
    border-radius: 5em;
    color: ${rose300};
    float: right;
    margin-top: -3em;

    p {
      margin-top: 0.9em;
    }

    &:hover {
      border-color: ${rose900};
      color: ${rose900};
    }
  }

  h4 {
    color: ${rose900};
  }
`;

const innerCartItemContent = css`
  display: grid;
  grid-template-columns: 0.3fr 0.6fr 1fr;
  margin-top: -1.5em;

  p:first-child {
    color: ${red};
    font-family: "Red hat semi-bold";
  }

  p:nth-child(2),
  p:last-child {
    color: ${rose500};
  }
`;
