import { css } from "@emotion/css";
import { DessertItemProps } from "../../../../data/dataTypes";
import AddToCartBtn from "./AddToCartBtn";
import { cartContext, red, rose500, rose900 } from "../../../../data/data";
import { useContext } from "react";
import { getCartItemAmount } from "../../../../utils/cartUtils";
import OrangeBtn from "./OrangeBtn";

export default function DessertItem({ image, name, category, price, windowWidth }: DessertItemProps) {
  const { desktop, tablet, mobile } = image;

  const smallerImageUrl = windowWidth >= 600 ? tablet : mobile;
  const imageUrl = windowWidth >= 1000 ? desktop : smallerImageUrl;

  const { cart } = useContext(cartContext);
  const amount = getCartItemAmount(cart, name);

  const priceValue = price.toFixed(2);

  return (
    <div className={dessertItemStyle}>
      <div className={upperDessertContent}>
        <img src={`/images/${imageUrl}`} alt={name} className={amount > 0 ? imageBorder : undefined} />
        {amount === 0 ? <AddToCartBtn name={name} price={price} /> : <OrangeBtn amount={amount} name={name} />}
      </div>
      <div>
        <p>{category}</p>
        <p>{name}</p>
        <p>${priceValue}</p>
      </div>
    </div>
  );
}

const dessertItemStyle = css`
  margin-bottom: 1em;

  div:last-child {
    > p:first-child {
      color: ${rose500};
    }

    > p:nth-child(2) {
      font-family: "Red hat semi-bold";
      line-height: 0;
      color: ${rose900};
    }

    > p:last-child {
      font-family: "Red hat semi-bold";
      color: ${red};
    }
  }
`;

const upperDessertContent = css`
  display: flex;
  flex-direction: column;

  > img {
    width: 18em;
    border-radius: 0.5em;
    margin-bottom: 1.5em;
  }
`;

const imageBorder = css`
  border: 3px solid ${red};
`;
