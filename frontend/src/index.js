import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppointmentState from './context/appointment/appointmentContext';

import { BrowserRouter } from 'react-router-dom';
import UserState from './context/Admin_page/userFunction/userState';
import AdminState from './context/Admin_page/adminContext/adminState';
import LawyerContext from './context/Admin_page/lawyercontext/lawyerContext';
import LawyerState from './context/Admin_page/lawyercontext/lawyerState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <AppointmentState>
        <UserState>
          <LawyerState>
            <AdminState>
              <App />
            </AdminState>
          </LawyerState>
        </UserState>
      </AppointmentState>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
