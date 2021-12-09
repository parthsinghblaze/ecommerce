import React from "react";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import styled from "styled-components";
import Products from "./Products";

function Featureproducts() {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <FeaturedWrapper className="container-fluid py-5">
        <div className="container">
          <h3 className="text-center">Feature Products</h3>
          <div className="featured-container">
            {featured.slice(0, 3).map((item) => {
              return <Products {...item} key={item.id} />;
            })}
          </div>
        </div>
      </FeaturedWrapper>
    </>
  );
}

const FeaturedWrapper = styled.div`
  .featured-container {
    display: grid;
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    .featured-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .featured-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Featureproducts;
