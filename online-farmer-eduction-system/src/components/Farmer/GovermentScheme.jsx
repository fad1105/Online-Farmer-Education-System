import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import SchemeCard from "./SchemeCard";
import axios from "axios";

export default function GovermentScheme() {
	const [posts,setPosts] = useState([])
    useEffect(()=> {
        axios.get("/schemes/fetchschemes")
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
        <h1> Goverment Schemes</h1>
        </div>
        {
        	posts.map(post => (
        		<SchemeCard href={post.pdfurl} title={post.title}/>
        		))
        }
			</div>
		</>
	)
}

SchemeCard.propType = {
  src: PropTypes.string,
  width: PropTypes.Number,
  alt: PropTypes.string,
  border: PropTypes.Number,
};
SchemeCard.defaultProps = {
  src: "https://agricoop.nic.in/sites/all/modules/customs/cmf_utility/icons/application-pdf.png",
  width: 16,
  alt: "pdf",
  border: 0,
};
