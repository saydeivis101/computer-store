import React, { useId } from 'react'
import { AddItems } from '../icons/Carts'
import '../../styles/app.css'

export const Cart = () => {

  const cartCheckbox = useId()

  return (
   <div className="cart">
     <label className='cart-button' htmlFor={cartCheckbox}>
            <AddItems/>
        </label>
        <input className='cart__checkbox' type="checkbox" id={cartCheckbox} name="cartCheckbox" hidden />
   

        <div className="show-cart">
           <ul>
            <li>
              <picture>
                <img src="https://i.dummyjson.com/data/products/21/thumbnail.png" alt="Title of the product" />
              </picture>
              <footer>
                <h3>Title of the Product</h3>
                <span>
                  Qnty
                </span>
                <button>
                  +1
                </button>
              </footer>
            </li>
           </ul>
        </div>  

   </div>
  )
}
