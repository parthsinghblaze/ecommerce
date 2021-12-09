import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FilterProvider } from "./context/filters_context";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
