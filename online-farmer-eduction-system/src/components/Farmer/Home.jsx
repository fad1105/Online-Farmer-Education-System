import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

export default function home() {
  return (
    <>
      <Navbar />
      <div className="container my-3">

        </div>
    
    </>
  );
}

Navbar.propType = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Farmers' Portal",
  aboutText: "About",
};
