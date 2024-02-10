import React from "react";
import { currencyFormatter } from "./common/formating";
import Button from "./common/Button";
import { useDispatch } from "react-redux";
import { addtoCart, removeCart } from "./myslice";

export default function SingleMeal({ data }) {
    const imgsrc = `http://localhost:3000/${data.image}`

    const dispatch = useDispatch();

    const handelClickadd = () =>{
      dispatch(addtoCart({iteam:data}))
    }
    const handelClickremove = () =>{
      dispatch(removeCart({iteam:data}))
    }
  return (
    <li className="meal-item">
      <article>
        <img src={imgsrc} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(data.price)}</p>
          <p className="meal-item-description ">{data.description}</p>
        </div>
        <p className="meal-item-actions ">
            <Button onClick={(data) => handelClickadd(data)}>
                Add to cart
            </Button>
{/*             <Button onClick={(data) => handelClickremove(data)}>
                Remove to cart
            </Button> */}
        </p>
      </article>
    </li>
  );
}
