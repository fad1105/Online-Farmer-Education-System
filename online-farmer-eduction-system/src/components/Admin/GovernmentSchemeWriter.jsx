import React from "react";

export default function GovernmentSchemeWriter() {
  return (
    <>
      <div className="my-3 col-8 m-4 p-4 " style={{ color: "white" }}>
        <form>
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
            Resource URL
            </label>
            <input
              type="text"
              className="form-control"
              id="Resource URL"
              aria-describedby="Resource URL"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
