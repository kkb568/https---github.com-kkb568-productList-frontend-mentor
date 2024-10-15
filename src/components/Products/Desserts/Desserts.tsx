import { css } from "@emotion/css";
import { desserts, rose900 } from "../../../data/data";
import { setDessertItemKey } from "../../../utils/mainUtils";
import DessertItem from "./DessertItem/DessertItem";
import { useWindowWidth } from "../../../utils/hooks";

export default function Desserts() {
  const windowWidth = useWindowWidth();

  const dessertItems = desserts.map((dessert) => {
    const { image, name, category, price } = dessert;
    const keyValue = setDessertItemKey(desserts, dessert);

    return <DessertItem key={keyValue} image={image} name={name} category={category} price={price} windowWidth={windowWidth} />;
  });

  return (
    <div className={dessertsStyle}>
      <h1>Desserts</h1>
      <div className={dessertItemsStyle}>{dessertItems}</div>
    </div>
  );
}

const dessertsStyle = css`
  margin-left: 2em;

  h1 {
    font-family: "Red Hat bold";
    color: ${rose900};
  }
`;

const dessertItemsStyle = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
