import React from "react";
import { FaShoppingBag, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";

function Cartbutton() {
  const { CloseSideBar } = useProductsContext();
  return (
    <>
      <CartWrapper className="cart-btn-wrapper">
        <Link to="/cart" className="cart-btn" onClick={CloseSideBar}>
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">12</span>
          </span>
        </Link>
        <button className="auth-button">
          Login <FaUserPlus />
        </button>
      </CartWrapper>
    </>
  );
}

const CartWrapper = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;

  .auth-button {
    background: transparent;
    border: none;
  }

  .cart-btn {
    display: flex;
    gap: 10px;

    .cart-container {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      position: relative;

      .cart-value {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%, -50%);
        font-size: 18px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: skyblue;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default Cartbutton;
