import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'bottom',
        },
        title: {
            display: false,
            text: ''
        },
        tooltip: {
            enabled: true
        },
    },
    categoryPercentage: 1,
    barPercentage: 0.98,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,

            },
            title:{
                display: true,
                text:'Edge gateway Type',
            },
        },
        y: {
            grid: {
                display: false,
            },
            title:{
                display: true,
                text:'Total Count',
            },
            min: 0,
            max: 100,
        },
    },
};

const labels = ['Linux', 'PI', 'ESP', 'Windows']

export const data = {
    labels,
    datasets: [
        {
            // labels,
            data: [40, 80, 30, 75],
            backgroundColor: ["#39B5E0", "#A31ACB", "#FF78F0", '#F5EA5A'],
            barThickness: 35,
            borderRadius: 2
        },
    ],
};

function Barchart() {
    return (
        <div>
            <Bar options={options} data={data} height={'180px'} />
        </div>
    )
}
export default Barchart;