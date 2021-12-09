import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Stars({ stars, reviews }) {
  console.log(stars, reviews);
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <div className="py-2">{tempStars}</div>;
}

export default Stars;
