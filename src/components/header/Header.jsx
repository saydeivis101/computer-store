import React, { useContext, useState } from "react";
import { FiltersContext } from "../../context/FiltersProvider";

export const Header = () => {
 
  const {filters, setFilters} = useContext(FiltersContext);

  const onNewPrice = (event) => {
    const newMinPrice = parseInt(event.target.value, 10); 
    const roundedMinPrice = Math.floor(newMinPrice / 50) * 50; // Redondea al múltiplo de 50 más cercano
    setFilters({ ...filters, minPrice: roundedMinPrice }); 
  };

  const onNewSelectedCategory = (event)=>{
    const category = event.target.value;
    setFilters({...filters, category});
  }

  return (
    <div className="hero">
      <h1>ComputerStore</h1>

      <header>
        <div className="filters">
          <div className="products-price">
            <strong>Max Price</strong>
            <input
              type="range"
              name="products-range"
              id=""
              min="0"
              max="1000"
              value={filters.minPrice}
              onChange={onNewPrice}
              step="0"
            />
            <label htmlFor="">${filters.minPrice}</label>
          </div>

          <div className="product-categories">
            <select name="product-category" id="" onChange={newValue => onNewSelectedCategory(newValue)}>
              <option value="all">All</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Smartphones</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
        </div>
      </header>
    </div>
  );
};
