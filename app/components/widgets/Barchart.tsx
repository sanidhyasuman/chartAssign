import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  dataFilter: string;
  theme: string;
}

const BarChart: React.FC<BarChartProps> = ({ dataFilter, theme }) => {
  // Data filtering logic
  const allData = [12, 19, 3, 5, 2, 3, 7];
  let filteredData = allData;

  if (dataFilter === 'lastWeek') {
    filteredData = allData.slice(5); // Show only last week 
  } else if (dataFilter === 'lastMonth') {
    filteredData = allData.slice(4); // Show last month's data
  }

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: filteredData,
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(75, 192, 192, 0.6)',
        borderColor: theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
