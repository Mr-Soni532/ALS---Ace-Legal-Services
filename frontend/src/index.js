import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppointmentState from './context/appointment/appointmentContext';

import { BrowserRouter } from 'react-router-dom';
import UserState from './context/Admin_page/userFunction/userState';
import LawyerState from './context/Admin_page/lawyercontext/lawyerState';
import AdminState from './context/Admin_page/adminContext/adminState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <AppointmentState>
        <LawyerState>
          <UserState>
            <AdminState>
              <App />
            </AdminState>
          </UserState>
        </LawyerState>
      </AppointmentState>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
