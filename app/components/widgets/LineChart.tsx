import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering chart elements with ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  dataFilter: string;
  theme: string;
}

const LineChart: React.FC<LineChartProps> = ({ dataFilter, theme }) => {
  const allData = [10, 20, 30, 25, 35, 40];
  let filteredData = allData;

  // Filter data based on user settings
  if (dataFilter === 'lastWeek') {
    filteredData = allData.slice(4); // Show only last two months
  } else if (dataFilter === 'lastMonth') {
    filteredData = allData.slice(3); // Show last three months
  }

  // Define chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: filteredData,
        borderColor: theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(75, 192, 192, 1)',
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // Curved line
      },
    ],
  };

  return (
    <div style={{ width: '600px', height: '600px' }}>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
