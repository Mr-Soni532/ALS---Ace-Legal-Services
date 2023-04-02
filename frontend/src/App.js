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
import AddLawyerForm from './components/AdminCompo/AddLawyerForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/eventverified" element={<EventVerified />} />
        <Route path="/bookslot" element={<BookSlot />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/verifyOTP' element={<OtpPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/addlawyerform' element={<AddLawyerForm />} />
        <Route path='/verifyOTP' element={<OtpPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );

}

export default App;
