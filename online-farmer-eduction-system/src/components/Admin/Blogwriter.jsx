import React from "react";

export default function Blogwriter() {
  return (
    <>
      <div className="my-3 col-8 m-4 p-4 " style={{ color: "white" }}>
        <form>
          <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
              Select Type 
            </label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Horticulture">Horticulture</option>
              <option value="Seeds">Seeds </option>
              <option value="Dairy Technology">Dairy Technology</option>
              <option value="Agriculture Technology">Agriculture Technology</option>
              <option value="Organic Farming">Organic Farming</option>
              <option value="fisheries">fisheries</option>
              <option value="">Live Stock</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              aria-describedby="Title"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="Image URL"
              aria-describedby="Image URL"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              aria-describedby="Description"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
