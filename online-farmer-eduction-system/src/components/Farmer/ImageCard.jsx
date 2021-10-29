import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Blogfarmer from "./BlogFarmer";

export default function ImageCard(props) {
  let history = useHistory();
  const gotoBlogTable = () => {
    history.push("/blogTable/" + props.name );
  };
  return (
    <>
      <div className="col-3 my-4 g-5">
        <div className="card " style={{ backgroundColor: "#ecf0e1" }}>
          <img
            src={props.urltext}
            className="card-img-top "
            alt="..."
            style={{ width: "200px", height: "200px", margin: "auto" }}
          />
          <div className="card-body">
            {/* <Link
                className="nav-link active"
                aria-current="page"
                to="/blogFarmer"
              >
                {props.name}
              </Link>
              <Route path="/blogFarmer">
                <blogFarmer/>
              </Route> */}
            <div
              className="btn btn-outline-primary  d-grid "
              onClick={gotoBlogTable}
            >
              {props.name}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
