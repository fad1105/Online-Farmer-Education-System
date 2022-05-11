import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Blogfarmer(props) {
  const [posts, setPosts] = useState([]);
  let count = 0 ;
  // useEffect(() => {
  //   axios
  //     .get("/education/blog/" + props.id)
  //     .then((res) => {
  //       console.log(count);
  //       count = count + 1 ;
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <div className="card" >
        <div>
          <center>
            <ul>
              <hr/>
              <h1>{posts.title}</h1>
              <hr/>
              <br/>
              <div className="template-data">
                <img
                  src={posts.imageurl}
                  className="card-img-top "
                  alt="..."
                  style={{ width: "400px", height: "400px", margin: "auto" }}
                />
                <br/>
                <br/>
                <p>{posts.description}</p>
              </div>
            </ul>
          </center>
        </div>
      </div>
    </>
  );
}
