import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppointmentState from './context/appointment/appointmentContext';

import { BrowserRouter } from 'react-router-dom';
import UserState from './context/Admin_page/userFunction/userState';
import AdminState from './context/Admin_page/adminContext/adminState';
import LawyerState from './context/Admin_page/lawyercontext/lawyerState';
import AuthState from './context/AuthContext/AuthState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <AuthState>
        <AppointmentState>
          <UserState>
            <LawyerState>
              <AdminState>
                <App />
              </AdminState>
            </LawyerState>
          </UserState>
        </AppointmentState>
      </AuthState>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
