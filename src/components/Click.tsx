import produce from "immer";
import React, { useState } from "react";

const Click = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const [secondTags, setsecondTags] = useState(["happy", "cheerful"]);
  const [thirdTags, setThirdTags] = useState(["happy", "cheerful"]);

  const firstClick = () => {
    // Add
    setTags([...tags, "exciting"]);
    console.log(tags);
  };

  const secondClick = () => {
    // Remove
    setsecondTags(secondTags.filter((tag) => tag !== "happy"));
    console.log(secondTags);
  };

  const thirdleClick = () => {
    // update
    setThirdTags(thirdTags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    console.log(thirdTags);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "15rem" }}>
      <button onClick={firstClick}>Click Me 1</button>
      <button onClick={secondClick}>Click Me 2</button>
      <button onClick={thirdleClick}>Click Me 3</button>
    </div>
  );
};

export default Click;
