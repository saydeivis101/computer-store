import { useContext } from "react"
import { CartsContext } from "../context/CartsProvider"

export const useCarts = () => {
  
  const carts = useContext(CartsContext);

  if(carts == 'undefined'){
    throw new Error('The context is undefined, this means that the context is not available. Check if you have put the context in the right place');
  }

  return carts

}
