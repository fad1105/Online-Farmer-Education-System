import React,{useState, useEffect} from 'react';
import EventCard from './EventCard';
import axios from "axios";

export default function Event() {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        axios.get("/events/fetchevents")
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]) 
	return (
		<>
    <div className="row text-center "  >
        
        <div className="my-5" style={{color:"white"}}>
        <h1> Events</h1>
        </div>
        {
            posts.map(post => (
                <EventCard event={post.eventnumber} about={post.title} address={post.address} time= {post.date} />
            ))
        }
     </div>
    </>
	)
}