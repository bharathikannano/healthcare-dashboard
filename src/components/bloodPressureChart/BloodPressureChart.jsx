import React,{useState} from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend
);
// Utility function to map month names to numbers
const monthToNumber = (month) => {
    const months = {
        "January": 1,
        "February": 2,
        "March": 3,
        "April": 4,
        "May": 5,
        "June": 6,
        "July": 7,
        "August": 8,
        "September": 9,
        "October": 10,
        "November": 11,
        "December": 12
    };
    return months[month];
};

const BloodPressureChart = ({ data }) => {


const sortedData = [...data]?.sort((a, b) => {
    if (a.year === b.year) {
        return monthToNumber(b.month) - monthToNumber(a.month);
    }
    return b.year - a.year;
});

const [hoveredData, setHoveredData] = useState(null);

    const chartData = {
        labels: sortedData.map(item => `${item.month}, ${item.year}`),
        datasets: [
            {
                label: 'Systolic',
                data: sortedData.map(item => item.blood_pressure.systolic.value),
                borderColor: '#C26EB4',
                backgroundColor: '#C26EB4',
                fill: true,
                tension: 0.4,
                pointRadius: 6, // Larger point size
                pointBackgroundColor: '#C26EB4', // Point color
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
            },
            {
                label: 'Diastolic',
                data: sortedData.map(item => item.blood_pressure.diastolic.value),
                borderColor: '#8C6FE6',
                backgroundColor: '#8C6FE6',
                fill: true,
                tension: 0.4,
                pointRadius: 6, // Larger point size
                pointBackgroundColor: '#8C6FE6', // Point color
                pointBorderColor: '#FFFFFF',
                pointBorderWidth: 2,
              },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            // legend: {
            //     position: 'top',
            // },
            title: {
                display: true,
                text: 'Blood Pressure',
                align: 'start', // Align title to the left
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default BloodPressureChart;