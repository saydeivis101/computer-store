import React, { useContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Products } from "./components/products/Products";
import "./styles/app.css";
import { Cart } from "./components/cart/Cart";
import { CartsProvider } from "./context/CartsProvider";

export const ComputerStore = () => {
  return (
    <CartsProvider>
      <div className="container">
        <Cart />

        <Header />

        <Products />
      </div>
    </CartsProvider>
  );
};
