import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utlis/constantnav";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Cartbutton from "./Cartbutton";
import { useProductsContext } from "../context/products_context";

function Navbar() {
  const { OpenSideBar } = useProductsContext();
  return (
    <>
      <NavContainer className="container-fluid text-capitalize">
        <div className="container">
          <header>
            <Link to="/" className="logo">
              Funiture's
            </Link>
            <button className="menu__button" onClick={OpenSideBar}>
              <FaBars />
            </button>
            <nav>
              <ul className="list-unstyled m-0">
                {links.map((item) => {
                  const { id, text, url } = item;
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Cartbutton />
          </header>
        </div>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  padding: 30px 0;
  a {
    text-decoration: none;
    color: black;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }

  .logo {
    font-size: 32px;
    font-weight: 800;
  }

  .nav_cartButton_box {
    background-color: red;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    .nav_cartButton_box {
      display: none;
    }
  }

  nav ul {
    display: flex;
    gap: 60px;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    .menu__button {
      display: none;
    }
  }

  .menu__button {
    background-color: transparent;
    border: none;
    font-size: 28px;
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .cart-btn-wrapper {
      display: flex;
    }
  }
`;

export default Navbar;
