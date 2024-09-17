import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Define a callback function to handle performance metrics
const logPerformanceMetrics = (metric: any) => {
  console.log(metric);
};

// Pass the callback function to reportWebVitals
reportWebVitals(logPerformanceMetrics);
