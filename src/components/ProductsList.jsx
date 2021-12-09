import React from "react";
import { useGlobalFilterContext } from "../context/filters_context";
import GridView from "./GridView";
import styled from "styled-components";
import ListView from "./ListView";

function ProductsList() {
  const { filter_products: products, grid_view } = useGlobalFilterContext();

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return (
    <>
      <GridProductList>
        <GridView products={products} />
      </GridProductList>
    </>
  );
}

const GridProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default ProductsList;
