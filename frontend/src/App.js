import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index_Page/IndexPage';
import Appointment from './pages/appointment/Appointment';
import Lawyers from './pages/Lawyer/Lawyers';
import UserDashboard from './pages/User_Dashboard/UserDashboard';
import PageNotFound from './pages/PageNotFound/PageNotFound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
