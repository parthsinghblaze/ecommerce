import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function Amountbtn({ amount, increase, decrease }) {
  return (
    <>
      <button onClick={() => decrease()}>
        <FaMinus />
      </button>
      <h4>{amount}</h4>
      <button onClick={() => increase()}>
        <FaPlus />
      </button>
    </>
  );
}

export default Amountbtn;
