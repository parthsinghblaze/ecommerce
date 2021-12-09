import React from "react";
import Products from "./Products";

function GridView({ products }) {
  return (
    <>
      {products.map((item) => (
        <Products key={item.id} {...item} />
      ))}
    </>
  );
}

export default GridView;
