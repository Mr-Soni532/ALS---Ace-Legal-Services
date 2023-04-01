import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppointmentState from './context/appointment/appointmentContext';

import { BrowserRouter } from 'react-router-dom';
import UserState from './context/Admin_page/userFunction/userState';
import LawyerState from './context/Admin_page/lawyercontext/lawyerState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <LawyerState>
        <UserState>
          <AppointmentState>
            <App />
          </AppointmentState>
        </UserState>
      </LawyerState>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
