import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}
// passing data via props(properties)
function ListGroup({ items, heading }: ListGroupProps) {
  // using useState hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // JSX Expression
  return (
    <>
      <h1>{heading}</h1>
      {/* Conditional Rendering */}
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {/* Rending list using map */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // handling events or (e)
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
