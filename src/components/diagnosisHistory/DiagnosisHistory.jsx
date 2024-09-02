import React, { useState } from 'react';
import BloodPressureChart from '../bloodPressureChart/BloodPressureChart';
import './DiagnosisHistory.css';
import VitalCard from './VitalCard';
import respiratoryIcon from '../../assets/respiratoryRate.svg';
import temperatureIcon from '../../assets/temperature.svg';
import heartRateIcon from '../../assets/HeartBPM.svg';

const DiagnosisHistory = ({ selectedPatient }) => {
  const { diagnosis_history } = selectedPatient;

  const findMinMaxBloodPressure = (data) => {
    if (!data || data.length === 0) return null;

    let minSystolic = data[0].blood_pressure.systolic.value;
    let maxSystolic = data[0].blood_pressure.systolic.value;
    let minDiastolic = data[0].blood_pressure.diastolic.value;
    let maxDiastolic = data[0].blood_pressure.diastolic.value;

    data.forEach((record) => {
      const systolic = record.blood_pressure.systolic.value;
      const diastolic = record.blood_pressure.diastolic.value;

      if (systolic < minSystolic) minSystolic = systolic;
      if (systolic > maxSystolic) maxSystolic = systolic;
      if (diastolic < minDiastolic) minDiastolic = diastolic;
      if (diastolic > maxDiastolic) maxDiastolic = diastolic;
    });

    return {
      minSystolic,
      maxSystolic,
      minDiastolic,
      maxDiastolic,
    };
  };

  const bpValues = findMinMaxBloodPressure(diagnosis_history);

  // State to toggle between min and max values
  const [showMinSystolic, setShowMinSystolic] = useState(true);
  const [showMinDiastolic, setShowMinDiastolic] = useState(true);

  const toggleSystolic = () => setShowMinSystolic(!showMinSystolic);
  const toggleDiastolic = () => setShowMinDiastolic(!showMinDiastolic);

  return (
    <section className="diagnosis-history">
      <h2>Diagnosis History</h2>
      <div className="chart">
        <BloodPressureChart data={diagnosis_history} />
        <div className="bp-information">
          <div className="Systolic-info">
            <p className="Systolic-title title">
              <span className="Systolic-dot dot"></span>Systolic
            </p>
            <p className="Systolic-value value">
              {bpValues ? (showMinSystolic ? bpValues.minSystolic : bpValues.maxSystolic) : 'N/A'}
            </p>
            <p className="Systolic-status status" onClick={toggleSystolic}>
              {showMinSystolic ? '↑ Higher than Average' : '↓ Lower than Average'}
            </p>
          </div>
          <div className="hl"></div>
          <div className="Diastolic-info">
            <p className="Diastolic-title title">
              <span className="Diastolic-dot dot"></span>Diastolic
            </p>
            <p className="Diastolic-value value">
              {bpValues ? (showMinDiastolic ? bpValues.minDiastolic : bpValues.maxDiastolic) : 'N/A'}
            </p>
            <p className="Diastolic-status status" onClick={toggleDiastolic}>
              {showMinDiastolic ? '↑ Higher than Average' : '↓ Lower than Average'}
            </p>
          </div>
        </div>
      </div>
      <div className="vitals">
        <VitalCard
          icon={respiratoryIcon}
          title="Respiratory Rate"
          value={diagnosis_history[0]?.respiratory_rate?.value || 'N/A'}
          unit="bpm"
          status={diagnosis_history[0]?.respiratory_rate?.levels || 'N/A'}
          statusText={diagnosis_history[0]?.respiratory_rate?.levels || 'N/A'}
        />
        <VitalCard
          icon={temperatureIcon}
          title="Temperature"
          value={diagnosis_history[0]?.temperature?.value || 'N/A'}
          unit="°F"
          status={diagnosis_history[0]?.temperature?.levels || 'N/A'}
          statusText={diagnosis_history[0]?.temperature?.levels || 'N/A'}
        />
        <VitalCard
          icon={heartRateIcon}
          title="Heart Rate"
          value={diagnosis_history[0]?.heart_rate?.value || 'N/A'}
          unit="bpm"
          status={diagnosis_history[0]?.heart_rate?.levels || 'N/A'}
          statusText={diagnosis_history[0]?.heart_rate?.levels || 'N/A'}
        />
      </div>
    </section>
  );
};

export default DiagnosisHistory;