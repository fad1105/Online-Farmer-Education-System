import React from "react";
import ImageCard from "./ImageCard";

export default function education() {

    
  return (
    <>
    <div >
    <div className="row text-center "  >
        
        <div className="my-5" style={{color:"white"}}>
        <h1> Farmers e-World</h1>
        </div>
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/cereals.png" name="Agriculture" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/horticulture.png" name="Horticulture" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/seed.jpg" name="Seeds" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/dairy_tech.png" name="Dairy Technology" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/agri_equipments.png" name="Agriculture Technology" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/organic_farming.jpg" name="Organic Farming" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/fisheries.png" name="Seeds" />
        <ImageCard urltext = "https://ecourses.icar.gov.in/images/live%20stock.png" name="Live Stock" />

        
     </div>

    </div>
      
    </>
  );
}
