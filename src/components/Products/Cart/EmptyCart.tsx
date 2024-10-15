import { css } from "@emotion/css";
import emptyCartIllustration from "/images/illustration-empty-cart.svg";
import { rose500 } from "../../../data/data";

export default function EmptyCart() {
  return (
    <div className={emptyCartContent}>
      <img src={emptyCartIllustration} alt="Illustration of a piece of cake cut off from a brown cake" />
      <p>Your added items will appear here</p>
    </div>
  );
}

const emptyCartContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 8em;
  }

  p {
    color: ${rose500};
    font-family: "Red hat semi-bold";
  }
`;
