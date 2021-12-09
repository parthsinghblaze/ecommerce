import React, { useState } from "react";
import styled from "styled-components";

function ProductImage({ images = [{ url: {} }] }) {
  const [main, setMain] = useState(images[0]);
  console.log(main);
  return (
    <ProductImageWrapper>
      <img src={main.url} alt="" className="main-img" />
      <div className="gallery">
        {images.map((item, index) => {
          return (
            <img
              src={item.url}
              alt=""
              key={index}
              className={`${item.url === main.url ? "active" : ""}`}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
    </ProductImageWrapper>
  );
}

export default ProductImage;

const ProductImageWrapper = styled.div`
  .main-img {
    height: 400px;
    width: 100%;
  }

  img {
    object-fit: cover;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    padding: 20px 0;

    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      display: block;
    }
  }

  .gallery .active {
    border: 4px solid black;
  }
`;
