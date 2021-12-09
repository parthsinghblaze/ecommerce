import React, { createContext, useContext, useEffect, useReducer } from "react";
import { LOAD_PRODUCTS } from "../action";
import { filter_reducer as reducer } from "../reducers/filters_reducer";
import { useProductsContext } from "./products_context";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useGlobalFilterContext = () => useContext(FilterContext);
