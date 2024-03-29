import { useSelector, useDispatch } from "react-redux";
import { showCheckout, showModel, totalUpdate } from "./myslice";
import Model from "./common/Model";
import { currencyFormatter } from "./common/formating";
import Button from "./common/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartValue = useSelector((state) => state.cart);
  const cartFlag = useSelector((state) => state.showCart);
  const dispatch = useDispatch();
  function hideCart() {
    dispatch(showModel());
  }
  function handelCheckout() {
    dispatch(showCheckout());
  }

  let cartTotal = 0;
  if (cartValue.length > 0) {
    cartTotal = cartValue.reduce(
      (totalPrice, iteam) => totalPrice + iteam.qut * parseInt(iteam.price),
      0
    );

    dispatch(totalUpdate(cartTotal))
  }


  return (
    <Model className="cart" open={cartFlag} >
      <ul>
        {cartValue.map((single) => (
          <CartItem key={single.id} single={single} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCart}>
          Close
        </Button>
        {cartValue.length >  0 && <Button onClick={handelCheckout}>Go to Checkout </Button>}
      </p>
    </Model>
  );
}
