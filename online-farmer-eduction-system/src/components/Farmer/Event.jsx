import React from 'react';
import EventCard from './EventCard';
export default function Event() { 
    
	return (
		<>
    <div className="row text-center "  >
        
        <div className="my-5" style={{color:"white"}}>
        <h1> Events</h1>
        </div>
    <EventCard event="1" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
    <EventCard event="2" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
    <EventCard event="3" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
    <EventCard event="4" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
    <EventCard event="5" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
    <EventCard event="6" about="Scheme" address="Rajkot bus port" time="1 October, 2021. 6:00 PM" />
     </div>
    </>
	)
}