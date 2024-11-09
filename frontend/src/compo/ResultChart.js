import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js components

const ResultChart = () => {
  // Sample data for 10 students
  const studentResults = [
    { name: 'John Doe', math: 85, science: 90, english: 78 },
    { name: 'Jane Smith', math: 95, science: 88, english: 92 },
    { name: 'Tom Brown', math: 70, science: 80, english: 85 },
    { name: 'Lucy White', math: 88, science: 92, english: 80 },
    { name: 'Mark Johnson', math: 75, science: 75, english: 90 },
    { name: 'Emma Davis', math: 95, science: 91, english: 94 },
    { name: 'Liam Miller', math: 60, science: 70, english: 68 },
    { name: 'Olivia Wilson', math: 82, science: 78, english: 85 },
    { name: 'Noah Moore', math: 91, science: 85, english: 88 },
    { name: 'Sophia Taylor', math: 87, science: 89, english: 90 },
  ];

  // Prepare data for the bar chart
  const chartData = {
    labels: studentResults.map(student => student.name),
    datasets: [
      {
        label: 'Math',
        data: studentResults.map(student => student.math),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Science',
        data: studentResults.map(student => student.science),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
      {
        label: 'English',
        data: studentResults.map(student => student.english),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // Function to get the top 3 rankers for each subject
  const getTopRankers = (subject) => {
    return studentResults
      .sort((a, b) => b[subject] - a[subject])
      .slice(0, 3)
      .map(student => student.name);
  };

  // Data for the donut chart
  const donutChartData = {
    labels: [
      ...getTopRankers('math'),
      ...getTopRankers('science'),
      ...getTopRankers('english'),
    ],
    datasets: [
      {
        data: [
          ...getTopRankers('math').map(name => studentResults.find(student => student.name === name).math),
          ...getTopRankers('science').map(name => studentResults.find(student => student.name === name).science),
          ...getTopRankers('english').map(name => studentResults.find(student => student.name === name).english),
        ],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)', // Math
          'rgba(153, 102, 255, 0.7)', // Science
          'rgba(255, 99, 132, 0.7)', // English
          'rgba(255, 206, 86, 0.7)', // Math 2nd
          'rgba(54, 162, 235, 0.7)', // Science 2nd
          'rgba(255, 159, 64, 0.7)', // English 2nd
          'rgba(255, 205, 86, 0.7)', // Math 3rd
          'rgba(201, 203, 207, 0.7)', // Science 3rd
          'rgba(131, 191, 219, 0.7)', // English 3rd
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options for the bar chart
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Subject Scores',
      },
    },
  };

  // Chart options for the donut chart
  const donutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Student Results</h1>
      
      {/* Bar Chart */}
      <div style={{ marginBottom: '40px' }}>
        <Bar data={chartData} options={barOptions} />
      </div>

      {/* Donut Chart */}
      <h2 style={{ textAlign: 'center' }}>Top 3 Rankers Donut Chart</h2>
      <Doughnut data={donutChartData} options={donutOptions} />
    </div>
  );
};

export default ResultChart;
