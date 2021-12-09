import React from "react";
import { PageHero } from "../components";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";
import Sort from "../components/Sort";
import { useGlobalFilterContext } from "../context/filters_context";
import styled from "styled-components";

function Products() {
  // const { filter_products: products, all_products } = useGlobalFilterContext();
  return (
    <>
      <PageHero title="Products" />
      <ProductContainerWrapper className="products-container container">
        <Filters />
        <div className="products-list-container">
          <Sort />
          <ProductsList />
        </div>
      </ProductContainerWrapper>
    </>
  );
}

const ProductContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Products;
