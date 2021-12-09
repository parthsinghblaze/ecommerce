import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import Amountbtn from "./Amountbtn";

function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount <= stock) {
      setAmount(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <AddToCartWrapper>
      <div className="color-section">
        {colors.map((item, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: item }}
              onClick={() => setMainColor(item)}
              className="btn-color"
            >
              {mainColor == item ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <div className="amount-section">
        <Amountbtn amount={amount} increase={increase} decrease={decrease} />
      </div>
    </AddToCartWrapper>
  );
}

const AddToCartWrapper = styled.div`
  .color-section {
    display: flex;
    align-items: center;
  }
  .btn-color {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    color: white;
    font-size: 10px;
    border: none;
  }

  .amount-section {
    display: flex;
    padding: 20px 0;
    gap: 10px;

    button {
      border: none;
    }

    button:nth-child(1) {
      background: red;
    }

    button:last-child {
      background: blue;
    }
  }
`;

export default AddToCart;
