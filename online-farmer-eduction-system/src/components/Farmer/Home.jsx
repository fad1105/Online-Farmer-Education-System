import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import "./style.css";
import Education from "./Education";
import GovermentScheme from "./GovermentScheme";
import Event from "./Event";
import Login from "./Login";
import SignUp from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "./Weather";
import Blogfarmer from "./BlogFarmer";
import BlogTable from "./BlogTable";

export default function home(props) {
  return (
    <>
      <Router>
        <div
          style={{
            backgroundImage:
              "url(https://education.icar.gov.in/public/images/background.png)",
          }}
        >
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/govermentschemes">
                <GovermentScheme />
              </Route>
              <Route path="/events">
                <Event />
              </Route>
              <Route path="/education">
                <Education />
                {/* <BlogTable/> */}
              </Route>
              {/* <Route path="/blogfarmer/:name">
                <Blogfarmer name={props.match.params.name} />
              </Route> */}
              <Route
                exact
                path="/blogTable/:name"
                render={(props) => (
                  <BlogTable name={props.match.params.name} />
                )}
              />
              <Route
                exact
                path="/blog/:id"
                render={(props) => (
                  <Blogfarmer id={props.match.params.id} />
                )}
              />
              <Route path="/weather">
                <Weather />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
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
