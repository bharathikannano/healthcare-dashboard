import React from 'react';
import './VitalCard.css';

const VitalCard = ({ icon, title, value, unit, status, statusText,data }) => {
  console.log('data',data);
  return (
    <div className="vital-card">
      <div className="vital-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="vital-info">
        <p className="vital-title">{title}</p>
        <p className="vital-value">{value} <span className="vital-unit">{unit}</span></p>
        <p className="vital-status">{statusText}</p>
      </div>
    </div>
  );
};

export default VitalCard;