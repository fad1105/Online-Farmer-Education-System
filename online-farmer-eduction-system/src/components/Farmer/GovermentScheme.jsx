import React from 'react'
import PropTypes from "prop-types";
import SchemeCard from "./SchemeCard";
export default function GovermentScheme() {
	return (
		<> 
		<div className="row text-center "  >
        
        <div className="my-5" style={{color:"white"}}>
        <h1> Goverment Schemes</h1>
        </div>
			<SchemeCard href="https://agricoop.nic.in/sites/default/files/Nam23122015.pdf" title="National Agriculture Market (NAM) through Agri Tech Infrastructure Fund (ATIF)"/>
			<SchemeCard href="https://agricoop.nic.in/sites/default/files/OpGdTM.pdf" title="Central Sector Schemes (Terminal Market Complex)"/>
			<SchemeCard href="https://agricoop.nic.in/sites/default/files/pssguidelines.pdf" title="Price Support Scheme (PSS): Operational Guidelines"/>
			<SchemeCard href="https://agricoop.nic.in/sites/default/files/jsdostatesut.pdf" title="JS DO Letters to States and UTs"/>
			<SchemeCard href="https://agricoop.nic.in/sites/default/files/Programmes%20%26%20Schemes%20of%20Drought%20Management.pdf" title="drought remedies"/>
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