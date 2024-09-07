'use client'
import './dashboard.css';
import React, { useEffect, useState } from 'react';
import LineChart from '../../components/widgets/LineChart';
import BarChart from '../../components/widgets/Barchart';
import Layout from '../../components/Layout';
// import DataTable from '../../components/widgets/DataTable';

const Dashboard: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [dataFilter, setDataFilter] = useState('all');

  useEffect(() => {
    // Load preferences from localStorage or API
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFilter = localStorage.getItem('dataFilter') || 'all';
    setTheme(savedTheme);
    setDataFilter(savedFilter);
  }, []);
 

  return (
    <Layout>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="widgets">
          <h2>Line Chart</h2>
        <LineChart dataFilter={dataFilter} theme={theme} />
        <h2>Bar Graph</h2>

          <BarChart dataFilter={dataFilter} theme={theme} />
          {/* {data.tableData.length > 0 && <DataTable data={data.tableData} />} */}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
