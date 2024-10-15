import { css } from "@emotion/css";
import Cart from "./Cart/Cart";
import Desserts from "./Desserts/Desserts";
import { rose50 } from "../../data/data";

export default function Products() {
  return (
    <div className={products}>
      <Desserts />
      <Cart />
    </div>
  );
}

const products = css`
  background-color: ${rose50};
  width: 100%;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 2em 0;

  @media (max-width: 1000px) {
    display: block;
  }
`;
