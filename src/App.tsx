import { useState } from "react";
import Alert from "./components/Alert";
import BugUpdate from "./components/BugUpdate";
import Button from "./components/Button";
import Click from "./components/Click";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import NestedObject from "./components/NestedObject";
import SharedState from "./components/SharedState";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {/* <Button color="primary" onClick={() => console.log("Clicked!")}>
        My Button
      </Button> */}
      {/* <Click /> */}
      {/* <BugUpdate /> */}
      {/* <div>
        Nested Object
        <NestedObject />
      </div> */}
      {/* <SharedState /> */}
      {/* <Form /> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
