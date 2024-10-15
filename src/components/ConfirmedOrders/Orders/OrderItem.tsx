import { css } from "@emotion/css";
import { desserts, red, rose500, rose900 } from "../../../data/data";
import { CartItem } from "../../../data/dataTypes";
import { getThumbnailImage } from "../../../utils/mainUtils";
import { BottomLine } from "../../../styles/styles";

export default function OrderItem({ name, price, amount }: CartItem) {
  const itemPrice = price.toFixed(2);
  const totalItemPrice = (price * amount).toFixed(2);

  const thumbNailImage = getThumbnailImage(desserts, name);

  return (
    <div>
      <div className={orderItemContainer}>
        <img src={`/images/${thumbNailImage}`} alt={name} />
        <div>
          <h4>{name}</h4>
          <span>
            <p>{amount}x</p>
            <p>@ ${itemPrice}</p>
          </span>
        </div>
        <p>${totalItemPrice}</p>
      </div>
      <BottomLine />
    </div>
  );
}

const orderItemContainer = css`
  display: grid;
  grid-template-columns: 0.2fr 3.8fr 0.2fr;
  column-gap: 1.2em;
  align-items: center;
  margin-bottom: 0.5em;

  img {
    width: 4em;
    border-radius: 0.3em;
  }

  div {
    h4 {
      color: ${rose900};
    }

    span {
      display: grid;
      grid-template-columns: 4em 4em;
      margin-top: -1.5em;

      p:first-child {
        color: ${red};
        font-family: "Red hat semi-bold";
      }

      p:last-child {
        margin-left: -2em;
        color: ${rose500};
      }
    }
  }

  > p {
    font-family: "Red hat semi-bold";
  }
`;
