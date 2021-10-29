import React from "react";

export default function EventTable() {
  return (
    <>
      <table class="table table-hover" style={{backgroundColor:'white'}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button type="button" class="btn btn-success">Edit</button></td>
            <td><button type="button" class="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
