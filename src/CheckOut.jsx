import React from "react";
import Model from "./common/Model";
import Input from "./common/Input";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { initialStateCart, showCheckout, showModel } from "./myslice";

export default function CheckOut() {
  const storeCheckOut = useSelector((state) => state.showCheckoutFlag);
  const total = useSelector((state) => state.total);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handelCheckout() {
    dispatch(showCheckout());
  }

  function handleSubmit(e) {
    e.preventDefault();
    const fb = new FormData(e.target);
    const formData = Object.fromEntries(fb.entries());
    fetch('http://localhost:3001/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: {...cart},
          customer: formData,
        },
      }),
    }) .then(response => {
      if (response.ok) {
        // Reset the form after successful submission
        e.target.reset();
        dispatch(initialStateCart())
        handelCheckout()
        dispatch(showModel());
      } })
  }

  return (
    <Model open={storeCheckOut} >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {total}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Coad" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button " onClick={handelCheckout}>
            Close
          </Button>
          <Button> Submit Order</Button>
        </p>
      </form>
    </Model>
  );
}
