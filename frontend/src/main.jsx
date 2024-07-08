import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
