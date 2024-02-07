import React from "react";
import Model from "./common/Model";
import Input from "./common/Input";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { showCheckout } from "./myslice";

export default function CheckOut() {
  const storeCheckOut = useSelector((state) => state.showCheckout);
  const total = useSelector((state) => state.total);

  console.log("checkout", storeCheckOut, total);

  const dispatch = useDispatch();

  function handelCheckout() {
    console.log("Hide Checkout");
    dispatch(showCheckout());
  }

  return (
    <Model open={storeCheckOut}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount : {total}</p>
        <Input label="Full Name" type="text" id="fullName" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Coad" type="text" id="postalCoad" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button " onClick={handelCheckout}>
            {" "}
            Close
          </Button>
          <Button> Submit Order</Button>
        </p>
      </form>
    </Model>
  );
}
