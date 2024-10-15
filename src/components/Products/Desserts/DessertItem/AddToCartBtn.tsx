import { css } from "@emotion/css";
import addToCart from "/images/icon-add-to-cart.svg";
import { cartContext, red, rose500, rose900 } from "../../../../data/data";
import { useContext } from "react";
import { CartBtnProps } from "../../../../data/dataTypes";

export default function AddToCartBtn({ name, price }: CartBtnProps) {
  const { cartDispatch } = useContext(cartContext);

  return (
    <button
      className={addToCartBtnStyle}
      onClick={() => cartDispatch && cartDispatch({ type: "addItem", cartItem: { name, amount: 1, price } })}
    >
      <img src={addToCart} />
      <span>Add to Cart</span>
    </button>
  );
}

const addToCartBtnStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  font-family: "Red hat semi-bold";
  margin-left: 4em;
  margin-top: -4em;
  background-color: white;
  width: fit-content;
  padding: 1em 3em;
  border: 1px solid ${rose500};
  border-radius: 50em;
  transition: all 0.3s ease;

  img {
    width: 2em;
  }

  span {
    color: ${rose900};
    transition: all 0.3s ease;
  }

  &:hover {
    border-color: ${red};

    span {
      color: ${red};
    }
  }
`;
