import { useSelector } from "react-redux";
import Header from "./Header";
import Meals from "./Meals";
import CheckOut from "./CheckOut";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Header />
      <Meals />
      <Cart />
      <CheckOut/>

    </>
  );
}

export default App;
