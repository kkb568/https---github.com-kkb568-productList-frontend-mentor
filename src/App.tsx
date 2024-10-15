import { useReducer, useState } from "react";
import Products from "./components/Products/Products";
import { cartContext, confirmedOrdersContext } from "./data/data";
import { cartReducer } from "./utils/cartUtils";
import ConfirmedOrders from "./components/ConfirmedOrders/ConfirmedOrders";

function App() {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [displayConfirmedOrders, setDisplayConfirmedOrders] = useState<boolean>(false);

  return (
    <main>
      <cartContext.Provider value={{ cart, cartDispatch }}>
        <confirmedOrdersContext.Provider value={{ displayConfirmedOrders, setDisplayConfirmedOrders }}>
          <Products />
          {displayConfirmedOrders && <ConfirmedOrders />}
        </confirmedOrdersContext.Provider>
      </cartContext.Provider>
    </main>
  );
}

export default App;
