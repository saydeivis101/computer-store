import { useContext, useState } from "react";

export function useCarts(){

    const [carts, setCarts] = useState([])
    const cloneCarts = structuredClone(carts);
    useContext()


    const addItemsToCart = (product)=>{
        const hasProduct = carts.findIndex(item=> item.id == product.id);

        if(hasProduct>=0){
            carts[hasProduct].quantity +=1;
            return;
        }

        setCarts(prevState=>{[...prevState, {...product, quantity:1}]})
    }

    const removeOneItemFromCart = (product)=>{
        setCarts(cloneCarts.filter(item => product.id !== item.id));
    }

    const removeItemsFromCart = ()=>{
        setCarts([]);
    }

    return {
        addItemsToCart,
        removeOneItemFromCart,
        removeItemsFromCart,
    }
}