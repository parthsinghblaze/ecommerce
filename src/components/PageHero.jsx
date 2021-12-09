import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PageHero({ title, product }) {
  return (
    <PageHeroWrapper className="container-fluid">
      <div className="container">
        <div className="page-hero-container">
          <h4>
            <Link to="/">Home</Link>{" "}
            {product && <Link to="/products"> / Product</Link>} / {title}{" "}
          </h4>
        </div>
      </div>
    </PageHeroWrapper>
  );
}

const PageHeroWrapper = styled.div`
  padding: 20px 0;
  h4 a {
    color: black;
    text-decoration: none;
  }
`;

export default PageHero;
