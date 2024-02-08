import React, { useState } from "react";
import logo from "./assets/logo.jpg";
import Button from "./common/Button";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { showModel } from "./myslice";
export default function Header() {

  // for the cart componat
  const cartFlag = useSelector((state) => state.showCart);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function showCart() {
      if (cart.length == 0) {
        return
      }
    dispatch(showModel());
  }


  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={showCart} >
          Cart {cart.length}
        </Button>
      </nav>
      
    </header>
  );
}
