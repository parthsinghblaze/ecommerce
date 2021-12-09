import React from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { links } from "../utlis/constantnav";
import Cartbutton from "./Cartbutton";
import { useProductsContext } from "../context/products_context";

function Sidebar() {
  const { isSideBarOpen, CloseSideBar } = useProductsContext();
  return (
    <>
      <SidebarWrapper className="text-capitalize">
        <aside
          className={` ${isSideBarOpen ? "sidebar open-sidebar" : "sidebar"}`}
        >
          <div className="aside-header">
            <h1>Furniture's</h1>
            <button className="close-btn" onClick={CloseSideBar}>
              <GrClose />
            </button>
          </div>
          <ul className="list-unstyled">
            {links.map((item) => {
              const { id, text, url } = item;
              return (
                <li key={id}>
                  <Link to={url} className="d-block" onClick={CloseSideBar}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Cartbutton className="cart-button-show" />
        </aside>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: lightpink;
    transition: 1s;
    padding: 20px;
  }

  .open-sidebar {
    left: 0;
  }

  .aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    background: transparent;
    border: none;
    font-weight: 800;
    font-size: 32px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
    margin: 50px 0;
  }

  .cart-button-show {
    display: block;
  }
`;

export default Sidebar;
