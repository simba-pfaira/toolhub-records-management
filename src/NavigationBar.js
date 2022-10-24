import React from 'react';
import './App.css';

const NavigationBar = () => {
  return (
    <div>
      <nav>
        <h2>Toolhub Records Management</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/records-dashboard'>Records Dashboard</a>
          </li>
          <li>
            <a href='/leaderboard'>Leaderboard</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
