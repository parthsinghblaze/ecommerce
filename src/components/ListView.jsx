import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utlis/helpers";
import { Link } from "react-router-dom";

function ListView({ products }) {
  return (
    <>
      <ListViewWrapper>
        {products.map((item) => {
          const { id, image, name, price, description } = item;
          return (
            <article key={id}>
              <img src={image} alt="" />
              <div>
                <h5>{name}</h5>
                <h5> {formatPrice(price)} </h5>
                <p>{description.substring(0, 150)}...</p>
                <Link to={`/products/${id}`}> Details </Link>
              </div>
            </article>
          );
        })}
      </ListViewWrapper>
    </>
  );
}

const ListViewWrapper = styled.div`
  article {
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h5 {
      text-transform: uppercase;
    }

    a {
      color: white;
      padding: 10px 20px;
      background: black;
      border-radius: 4px;
      text-decoration: none;
    }
  }
`;

export default ListView;
