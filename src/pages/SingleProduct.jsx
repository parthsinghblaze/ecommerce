import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utlis/constantnav";
import {
  Loading,
  Error,
  PageHero,
  ProductImage,
  Stars,
  AddToCart,
} from "../components/index";
import styled from "styled-components";
import { formatPrice } from "../utlis/helpers";

function SingleProduct() {
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div className="container-fluid">
      <div className="container">
        <SingleProductWrapper>
          <PageHero title={name} product />
          <div className="back-btn">
            <Link to="/products"> back to products </Link>
          </div>
          <div className="single-product-container">
            <ProductImage images={images} />
            <div className="single-product-content">
              <h2>{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <h5>{formatPrice(price)}</h5>
              <p className="desp">{description}</p>
              <p className="info">
                <span>Avaiable : </span>
                {stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
              <p className="info">
                <span>SKU : </span>
                {sku}
              </p>
              <p className="info">
                <span>Brand : </span>
                {company}
              </p>
              <hr />
              {stock > 0 && <AddToCart product={product} />}
            </div>
          </div>
        </SingleProductWrapper>
      </div>
    </div>
  );
}

const SingleProductWrapper = styled.div`
  .back-btn {
    padding: 10px 20px;
    background-color: black;
    display: inline-block;
    text-transform: capitalize;
    a {
      color: white;
      text-decoration: none;
      display: block;
    }
  }
  .single-product-container {
    padding: 20px 0;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 20px;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default SingleProduct;
