import React from 'react'

export default function SchemeCard(props) {
	return (
		<>
		<div className="mx-auto g-3" style={{width: "800px"}}>
			<div className="card" style={{width: "50rem"}}>
  				<div className="card-body">
    				<p className="card-text">{props.title}</p>
    				<a href={props.href} className="card-link">Download</a>
    				<img src={props.src} width={props.width} hight={props.width} alt={props.alt} border={props.border}/>
  				</div>
			</div>
			</div>
		</>
	);
}