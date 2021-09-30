import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "./style.css";
import Education from "./Education";
import GovermentScheme from './GovermentScheme';
import Event from "./Event";

export default function home() {
  return (
    <>
      <div style={{backgroundImage:"url(https://education.icar.gov.in/public/images/background.png)"}}>
      <Navbar/>
      <div className="container " >
      {/*<Education/>*/}
      <GovermentScheme/>
      </div>
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
