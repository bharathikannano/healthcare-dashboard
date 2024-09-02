import React from 'react';
import './LabResults.css';
import download from './../../assets/icons/download.svg';
const LabResults = ({selectedPatient}) => {
  const {lab_results} = selectedPatient;
return(
    <>
        <section className="lab-results">
          <h2>Lab Results</h2>
          <ul>
            {lab_results?.map((detail)=>(
              <li key={detail}>{detail} <img src={download} alt="download" /></li>
            ))}
          </ul>
        </section>
    </>
    )
    }
    export default LabResults;