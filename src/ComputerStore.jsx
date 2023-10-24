import React, { useContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Products } from "./components/products/Products";
import './styles/app.css'


export const ComputerStore = () => {



    return (
    <div className="container">
 

      <Header />


      <Products  />
    </div>
  );
};
