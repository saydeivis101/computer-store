import React, { createContext, useState } from "react";

export const CartsContext = createContext();

export function CartsProvider({children}) {
  const [cart, setCart] = useState([]);
  const duplicatedCart = structuredClone(cart);

  const addItemToCart = (product)=>{
    const itemInCart = cart?.findIndex(item=> item.id == product.id);
    if(itemInCart >= 0){
      duplicatedCart[itemInCart].quantity+=1;
      return setCart(duplicatedCart);
    }
    return setCart((prevState)=>([...prevState, {...product, quantity:1}]))
  }

  const removeItemFromCart = (product)=>{
    const itemInCart = cart?.findIndex(item=> item.id == product.id);
    if(product.quantity>1){
      duplicatedCart[itemInCart].quantity -= 1;
      return setCart(duplicatedCart);
    }
    const withoutItem = cart.filter(item=>(
      item.id!==product.id
    ));

    setCart(withoutItem);
  }
  
  const getQuantityInCart = (productId, cart)=>{
    const getProduct = cart?.find(item=>item.id==productId);
    return getProduct? getProduct.quantity : 0; 
  }

  const removeAllTheItems = ()=>{
    
    setCart([]);
  }

  return (
    <CartsContext.Provider value={{ cart, addItemToCart, removeItemFromCart, removeAllTheItems, getQuantityInCart }}>
      {children}
    </CartsContext.Provider>
  );
}
