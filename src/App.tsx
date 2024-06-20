import "./App.css";
import Alert from "./components/Alert";
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
      <Alert>
        Hello <span>World</span>
      </Alert>
    </>
  );
}

export default App;
