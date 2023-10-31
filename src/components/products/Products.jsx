import React, { useContext, useState } from 'react'
import { FiltersContext } from '../../context/FiltersProvider';
import {products as initialState} from '../../mocks/products.json'
import {AddItems, RemoveItems} from '../icons/Carts'
import { useCarts } from '../../hooks/useCarts';

export const Products = () => {
    const [products, setproducts] = useState(initialState);

    const {filters, setFilters} = useContext(FiltersContext);

    const {cart, getQuantityInCart, addItemToCart, removeItemFromCart, removeAllTheItems } = useCarts()

    const filterProducts = (products)=>{
        return products.filter(product =>{
               return ( 
                filters.minPrice <= product.price && (filters.category == 'all' || product.category == filters.category ) )
}
        )
    }

    const newProducts = filterProducts(products);

    return (
    <>
        {
            products ? <ul className='products-grid'>
                {newProducts.slice(0,15).map(
                    product => 
                    <li key={product.id}>
                        <picture>
                            <img src={product.thumbnail} alt={product.title} />
                        </picture>
                        <h3>{product.title} - Price: <strong>${product.price}</strong></h3>
                        <h4>Quantity in Cart: <br/> {getQuantityInCart(product.id, cart)}</h4>
                      <button onClick={()=>addItemToCart(product)}>
                            <AddItems/>
                      </button>
                    </li>
                )}
            </ul> : null
        }
    </>
  )
}
