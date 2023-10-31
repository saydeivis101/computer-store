import React, { useContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Products } from "./components/products/Products";
import './styles/app.css'
import { Cart } from "./components/cart/Cart";


export const ComputerStore = () => {



    return (
    <div className="container">
 
      <Cart/>

      <Header />


      <Products  />

    </div>
  );
};
