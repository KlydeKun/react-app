import "./App.css";
import Alert from "./components/Alert";
import BugUpdate from "./components/BugUpdate";
import Button from "./components/Button";
import Click from "./components/Click";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

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
      <Click />
      <BugUpdate />
    </>
  );
}

export default App;
