import React from "react";

export default function ImageCard(props) {
  return (
    <>
      <div className="col-3 my-4 g-5">
        <div className="card " style={{backgroundColor:"#ecf0e1"}}>
          <img
            src={props.urltext}
            className="card-img-top "
            alt="..."
            style={{ width: "200px", height: "200px", margin: "auto" }}
          />
          <div className="card-body">
            <div className="btn btn-outline-primary  d-grid ">{props.name}</div>
          </div>
        </div>
      </div>
    </>
  );
}
