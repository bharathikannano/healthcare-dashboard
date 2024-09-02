import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css'; // Import CSS for styling
import Header from './header/Header';
import PatientsList from './patientsList/PatientsList';
import DiagnosisHistory from './diagnosisHistory/DiagnosisHistory';
import PatientDetails from './patientDetails/PatientDetails';
import DiagnosticList from './diagnosticList/DiagnosticList';
import LabResults from './labResults/LabResults';

import {fetchData} from '../../src/api/apiSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);
  
  const [selectedPatient, setSelectedPatient] = useState();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const patientSelected = (index) => {
    setSelectedPatient(index);
  };

  return (
    <div className="dashboard">
      {
        data?.length > 0 && (
          <>
          <Header/>
          <main className="content">
            <div className="container-one">
              <PatientsList data={{data}} patientSelected={patientSelected}/>
            </div>
            <div className='container-two'>
              <DiagnosisHistory selectedPatient={selectedPatient || data[0]}/>
              <DiagnosticList selectedPatient={selectedPatient || data[0]}/>
            </div>
            <div className='container-three'>
              <PatientDetails selectedPatient={selectedPatient || data[0]}/>
              <LabResults selectedPatient={selectedPatient || data[0]}/>
            </div>
          </main>
          </>
        )
    }
    </div>
  );
};

export default Dashboard;