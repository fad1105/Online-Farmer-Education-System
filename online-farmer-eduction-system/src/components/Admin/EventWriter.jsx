import React from 'react'

export default function EventWriter() {
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
            Address
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              aria-describedby="Address"
            />
          </div>
          
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
            Date
            </label>
            <input
              type="Date"
              className="form-control"
              id="Date"
              aria-describedby="Date"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
   
        </>
    )
}
