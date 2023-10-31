import React, { useContext, useId } from "react";
import { AddItems, RemoveItems } from "../icons/Carts";
import "../../styles/app.css";
import { CartsContext } from "../../context/CartsProvider";

export const Cart = () => {
  const cartCheckbox = useId();
  const { cart, removeItemFromCart } = useContext(CartsContext);

  return (
    <div className="cart">
      <label className="cart-button" htmlFor={cartCheckbox}>
        <AddItems /> <span style={{color: cart.length ==0? "red": "green"}}>{cart.length}</span>
      </label>
      <input
        className="cart__checkbox"
        type="checkbox"
        id={cartCheckbox}
        name="cartCheckbox"
        hidden
      />

      <div className="show-cart">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <picture>
                <img src={product.thumbnail} alt={product.title} />
              </picture>

              <h3>{product.title}</h3>

           <span>Price: <strong> ${product.price}</strong></span>
            <br />
          <span>Quantity: {product.quantity}</span>

              <button onClick={()=>removeItemFromCart(product)}>
                <RemoveItems />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
