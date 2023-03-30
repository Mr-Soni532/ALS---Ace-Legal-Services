import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppointmentState from './context/appointment/appointmentContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppointmentState>
        <App />
      </AppointmentState>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
