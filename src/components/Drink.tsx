import produce from "immer";
import React, { useState } from "react";

const Drink = () => {
  const [drinks, setDrinks] = useState({
    title: "Amerikano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Update Bug</button>
    </div>
  );
};

export default Drink;
