import React,{useState,useEffect} from 'react';
import search from './../../assets/icons/search.svg';
import './PatientsList.css';
const PatientsList = ({data,patientSelected}) => {
    const [query, setQuery] = useState("");
    const [activePatient, setActivePatient] = useState(null);
    const filterData = (data) => {
        if(!query){
            return data?.data;
        }
        return data?.data?.filter((item) => {
            const queryLower = query.toLowerCase();
            return (
                item.name.toLowerCase().includes(queryLower) ||
                item.gender.toLowerCase().includes(queryLower) ||
                item.age.toString().includes(queryLower)
            );
        });
    };
    const filteredData = filterData(data);
    useEffect(() => {
        if (filteredData.length > 0) {
          setActivePatient(filteredData[0]); // Set the first patient as default
        }
      }, [filteredData]); // Dependency on filteredData to update when the list changes
    
      const handlePatientClick = (patient) => {
        setActivePatient(patient);
        patientSelected(patient);
      };    
return(
    <>
        <section className="patients-list">
            <div className="header">
                <h2>Patients</h2>
                <div className="patients-search">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <img src={search} alt="search" className="search-icon" />
                        </div>
                    </div>
            </div>
            <ul>
            {/* Replace these with dynamic patient data */}
            {filteredData.map((patient, index) => {
                const { name, age, gender, profile_picture } = patient;
                const isActive = patient === activePatient;
                return (
                    <li className={`patient-item ${isActive ? 'active' : ''}`} key={index} onClick={()=>{
                        handlePatientClick(patient);
                        }}>
                        <img src={profile_picture} alt={name || 'Patient'} />
                        <div className="patient-info">
                            <span>{name}</span>
                            <span>{gender}, {age}</span>
                        </div>
                        <div className="more-options">⋮</div>
                    </li>
                );
            })}
            {/* Repeat for other patients */}
            </ul>
        </section>
    </>
)
};

export default PatientsList;