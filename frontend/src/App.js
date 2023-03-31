import './App.css';

import IndexPage from "./pages/Index_Page/IndexPage"
import Appointment from './pages/appointment/Appointment';
import Lawyers from './pages/Lawyer/Lawyers';
// import Calander from './components/slots/Calander';
// import Calander from './components/slots/calander';
import LayerDta from "./assets/lawyers.json"


function App() {

  console.log(LayerDta);
  return (

    <div className="App">
      <Lawyers props={LayerDta} />
      {/* <Calander /> */}
      <IndexPage />
    </div >

    // <Appointment/>

  );
}

export default App;
