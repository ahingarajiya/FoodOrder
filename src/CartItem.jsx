import React from "react";
import { currencyFormatter } from "./common/formating";
import { useDispatch } from "react-redux";
import { addtoCart, removeCart } from "./myslice";

export default function CartItem({ single }) {
  const dispatch = useDispatch();

  const handelClickadd = () => {
    dispatch(addtoCart({ iteam: single }));
  };
  const handelClickremove = () => {
    dispatch(removeCart({ iteam: single }));
  };
  return (
    <li className="cart-item">
      <p>
        {single.name} - {single.qut} X {currencyFormatter.format(single.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={(single) => handelClickremove(single)}>-</button>
        <span>{single.qut}</span>
        <button onClick={(single) => handelClickadd(single)}>+</button>
      </p> 
    </li>
  );
}
