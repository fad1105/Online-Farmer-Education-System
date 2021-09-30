import React from 'react'

export default function EventCard(props) {
	return (
		<>
		<div className="col-3 my-4 g-5">
			<div className="card" style={{width: "18rem"}}>
  				<div className="card-header">
    				Event {props.event}
  				</div>
  				<ul className="list-group list-group-flush">
			    <li className="list-group-item">About: {props.about}</li>
			    <li className="list-group-item">Address: {props.address}</li>
			    <li className="list-group-item">Time: {props.time}</li>
 				 </ul>
			</div>
			</div>
		</>
	)
}