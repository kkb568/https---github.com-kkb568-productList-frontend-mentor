import { css } from "@emotion/css";
import { cartContext, red } from "../../../../data/data";
import { OrangeBtnProps } from "../../../../data/dataTypes";
import { useContext } from "react";
import { getCartItem } from "../../../../utils/cartUtils";

export default function OrangeBtn({ amount, name }: OrangeBtnProps) {
  const { cart, cartDispatch } = useContext(cartContext);

  const cartItem = getCartItem(cart, name);

  return (
    <div className={orangeBtnStyle}>
      <button onClick={() => cartDispatch && cartDispatch({ type: "subtractItemAmount", cartItem: cartItem })}>
        <p>-</p>
      </button>
      <span>{amount}</span>
      <button onClick={() => cartDispatch && cartDispatch({ type: "addItemAmount", cartItem: cartItem })}>
        <p>+</p>
      </button>
    </div>
  );
}

const orangeBtnStyle = css`
  background-color: ${red};
  color: white;
  font-family: "Red hat semi-bold";
  display: flex;
  align-items: center;
  gap: 3.5em;
  margin-left: 3.3em;
  margin-top: -3.5em;
  width: 12em;
  padding: 1em 0;
  border-radius: 50em;
  transition: all 0.3s ease;

  button {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 0.9em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.8em;
    height: 1.8em;
    padding: 0.5em;
    transition: all 0.3s ease;

    p {
      font-family: "Red hat semi-bold";
      font-size: 1.5em;
      color: white;
      transition: all 0.3s ease;
    }

    &:hover {
      background-color: white;

      p {
        color: ${red};
      }
    }
  }

  button:first-child {
    margin-left: 1em;
  }
`;
