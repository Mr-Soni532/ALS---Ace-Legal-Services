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
import UnAuthenticated from './pages/PageNotFound/UnAuthenticated';
function App() {

  return (
    <div className="App">
      <Routes>
        {/*! <!-- No Need for Authentication --> */}
        <Route path="/" element={<IndexPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path='/unAuthenticated' element={<UnAuthenticated />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path='/successBooking' element={<BookingSuccess />} />
        <Route path='/failedBooking' element={<FailedBooking />} />

        {/*! <!-- Authentication Required (Done)--> */}
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentReview" element={<EventVerified />} />
        <Route path="/bookslot" element={<BookSlot />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/addlawyer' element={<AddLawyerForm />} />
        <Route path='/verifyOTP' element={<OtpPage />} />
      </Routes>
    </div>
  );

}

export default App;
