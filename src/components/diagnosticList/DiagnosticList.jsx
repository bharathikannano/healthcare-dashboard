import React from 'react';
import './DiagnosticList.css'
const DiagnosticList = ({selectedPatient}) => {
  const{diagnostic_list} = selectedPatient;
return(
    <>
        <section className="diagnostic-list">
          <h2>Diagnostic List</h2>
          <table>
            <thead>
              <tr>
                <th>Problem/Diagnosis</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace these with dynamic diagnostic data */}
              {diagnostic_list.map((details,index) => (
                <tr key={index}>
                  <td>{details?.name}</td>
                  <td>{details?.description}</td>
                  <td>{details?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
    </>
)
} 
export default DiagnosticList;