import React from 'react';
import './PatientDetails.css';
import birthIcon from './../../assets/icons/BirthIcon.svg';
import maleIcon from './../../assets/icons/MaleIcon.svg';
import femaleIcon from './../../assets/icons/FemaleIcon.svg';
import phoneIcon from './../../assets/icons/PhoneIcon.svg';
import insuranceIcon from './../../assets/icons/InsuranceIcon.svg';

const PatientDetails = ({selectedPatient}) => {
  const { name, gender, profile_picture, date_of_birth, phone_number, emergency_contact, insurance_type } = selectedPatient;
return(
    <>
        <section className="patient-details">
          <div className="patient-info-header">
            <img src={profile_picture} alt="Jessica Taylor" />
            <h2>{name}</h2>
          </div>
          <ul className="patient-info-list">
            <li className="patient-item">
              <img src={birthIcon} alt='Patient' />
              <div className="patient-info">
                  <span>Date Of Birth</span>
                  <span>{date_of_birth}</span>
              </div>
            </li>
            <li className="patient-item">
              <img src={gender === 'Male' ? maleIcon : femaleIcon} alt='Patient' />
              <div className="patient-info">
                  <span>Gender</span>
                  <span>{gender}</span>
              </div>
            </li>
            <li className="patient-item">
              <img src={phoneIcon} alt='Patient' />
              <div className="patient-info">
                  <span>Contact Info</span>
                  <span>{phone_number}</span>
              </div>
            </li>
            <li className="patient-item">
              <img src={phoneIcon} alt='Patient' />
              <div className="patient-info">
                  <span>Emergency Contacts</span>
                  <span>{emergency_contact}</span>
              </div>
            </li>
            <li className="patient-item">
              <img src={insuranceIcon} alt='Patient' />
              <div className="patient-info">
                  <span>Insurance Provider</span>
                  <span>{insurance_type}</span>
              </div>
            </li>
          </ul>
          <button className="show-info-btn">Show All Information</button>
        </section>
    </>
    )
}
export default PatientDetails;