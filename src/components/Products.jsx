import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utlis/helpers";

function Products({ id, image, name, price }) {
  return (
    <>
      <ProductsWrapper className="product-box">
        <Link to={`products/${id}`}>
          <img src={image} alt="" />
          <div className="product-desp d-flex justify-content-between py-3">
            <h5 className="text-capitalize">{name}</h5>
            <h5>{formatPrice(price)}</h5>
          </div>
        </Link>
      </ProductsWrapper>
    </>
  );
}

const ProductsWrapper = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  h5 {
    font-size: 16px;
  }
`;

export default Products;
