import React from "react";

export default function BlogRow(props) {
  return (
    <>
    <table className="table table-hover" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Blog Table</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Mark</td>
            <td>
              <button type="button" class="btn btn-success">
                Read Blog
              </button>
            </td>
          </tr> */}
          {props.data.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>
                <button type="button" className="btn btn-success">
                  Read Blog
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
