import React from "react";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white py-5 text-center">
        <div className="container">
          <footer>
            <h2>Furniture's &copy; {new Date().getFullYear()} </h2>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
