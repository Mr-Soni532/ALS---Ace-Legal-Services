import './App.css';
import './MediaQSmall.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index_Page/IndexPage';
import Appointment from './pages/appointment/Appointment';
import Lawyers from './pages/Lawyer/Lawyers';
import UserDashboard from './pages/User_Dashboard/UserDashboard';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import BookSlot from './pages/BookSlot/BookSlot';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/signup/signupPage';
import EventVerified from './pages/EventVerified/EventVerified';
import OtpPage from './pages/verifyotp/OtpPage';
import AdminPage from './pages/Admin_page/AdminPage';
import AddLawyerForm from './pages/AddForms/AddLawyerForm';
import BookingSuccess from './pages/bookingSuccess/BookingSuccess';
import FailedBooking from './pages/failedBooking/FailedBooking';
import { useState } from 'react';
function App() {
  const [isAuthenticated, setAuthentication] = useState(true);

  function handleAuthentication(value) {
    setAuthentication(value)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage setAuthentication={handleAuthentication} />} />
        <Route path='/verifyOTP' element={<OtpPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/userdashboard" element={isAuthenticated ? <UserDashboard /> : <LoginPage />} />
        <Route path="/appointmentReview" element={isAuthenticated ? <EventVerified /> : <LoginPage />} />
        <Route path='/addlawyer' element={isAuthenticated ? <AddLawyerForm /> : <LoginPage />} />
        <Route path="/appointment" element={isAuthenticated ? <Appointment /> : <LoginPage />} />
        <Route path="/bookslot" element={isAuthenticated ? <BookSlot /> : <LoginPage />} />
        <Route path="/lawyers" element={isAuthenticated ? <Lawyers /> : <LoginPage />} />
        <Route path='/successBooking' element={isAuthenticated ? <BookingSuccess /> : <LoginPage />} />
        <Route path='/failedBooking' element={isAuthenticated ? <FailedBooking /> : <LoginPage />} />
      </Routes>
    </div>
  );

}

export default App;
