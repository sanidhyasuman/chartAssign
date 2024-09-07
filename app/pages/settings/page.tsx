'use client';
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import './settings.css';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [dataFilter, setDataFilter] = useState('all');

  useEffect(() => {
    // Load saved preferences from localStorage or API
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFilter = localStorage.getItem('dataFilter') || 'all';
    setTheme(savedTheme);
    setDataFilter(savedFilter);
  }, []);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); // Save preferences locally
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    setDataFilter(selectedFilter);
    localStorage.setItem('dataFilter', selectedFilter); // Save preferences locally
  };

  return (
    <Layout>
      <div className="settings">
        <h1>Dashboard Settings</h1>

        <div className="setting-group">
          <label htmlFor="theme-select">Select Theme:</label>
          <select id="theme-select" value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="setting-group">
          <label htmlFor="filter-select">Data Filter:</label>
          <select id="filter-select" value={dataFilter} onChange={handleFilterChange}>
            <option value="all">All Data</option>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
          </select>
        </div>

        <div className="settings-footer">
          <button onClick={() => alert('Settings saved!')}>Save Settings</button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
