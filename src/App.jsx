import Header from "./Header";

import React from "react";
// import Meals from "./Meals";
// import CheckOut from "./CheckOut";
// import Cart from "./Cart";
import { lazy } from "react";
const Cart = lazy(() => import("./Cart"));
const CheckOut = lazy(() => import("./CheckOut"));
const Meals = lazy(() => import("./Meals"));

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
      </React.Suspense>
    </>
  );
}

export default App;
