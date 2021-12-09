import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Error() {
  return (
    <div className="container-fluid py-5 text-center">
      <div className="container py-5 text-uppercase text-danger">
        <h1>404 Page Not Found</h1>
        <Link to="/" className="text-decoration-none">
          <Button variant="contained" color="error">
            {" "}
            Go Back{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
