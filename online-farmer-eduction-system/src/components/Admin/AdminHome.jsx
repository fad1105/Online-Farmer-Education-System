import React from "react";
import EditBlog from "./EditBlog";
import Blogwriter from "./Blogwriter";
import NavbarAdmin from './NavbarAdmin'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";    

export default function AdminHome() {
  return (
    <div>
      <Router>
        <div
          style={{
            backgroundImage:
              "url(https://education.icar.gov.in/public/images/background.png)",
          }}
        >
          <NavbarAdmin/>
          <div className="container">
            <Switch>
              <Route path="/admin/education/newblog">
                  <Blogwriter/>
              </Route>
              <Route path="/admin/education/editblog">
                  <EditBlog/>
              </Route>
              {/* <Route path="/govermentschemes">
                <GovermentScheme />
              </Route> */}
              {/* <Route path="/events">
                <Event />
              </Route> */}
                {/* <BlogTable/> */}
              {/* <Route path="/blogfarmer/:name">
                <Blogfarmer name={props.match.params.name} />
              </Route> */}
              {/* <Route
                exact
                path="/blogTable/:name"
                render={(props) => <BlogTable name={props.match.params.name} />}
              /> */}
              {/* <Route
                exact
                path="/blog/:id"
                render={(props) => <Blogfarmer id={props.match.params.id} />}
              />
              <Route path="/weather">
                <Weather />
              </Route> */}
              {/* <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route> */}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
