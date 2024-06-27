import React, { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

const SharedState = () => {
  const [cartItems, setCartItems] = useState([
    "Product1",
    "product2",
    "product3",
  ]);

  return (
    <div style={{ margin: "2rem" }}>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default SharedState;
