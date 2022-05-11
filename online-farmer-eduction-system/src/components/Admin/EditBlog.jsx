import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory , } from "react-router-dom";

export default function EditBlog() {
  const [posts, setPosts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get("/education/getallblog/" )
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBlog = ( id) => {
  }

  // const goToBlog = (e) => {
  //   history.push("/admin/education/blog/" + e.id );

  // }

  return (
    <>
      <table className="table table-hover" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Read Blog</th>
            <th scope="col">Delete Blog</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>
                {/* <button> */}
                <button type="button" className="btn btn-outline-success" onClick={()=>{history.push("/admin/education/blog/" + item._id );}} id ={item._id}>
                  Read Blog
                </button>
              </td>
              <td>
                {/* <button> */}
                <button type="button" className="btn btn-outline-danger" onClick={deleteBlog(item._id)} id ={item._id}>
                  Delete Blog
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

