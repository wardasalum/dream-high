import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ViewUser from './components/ViewUser'
import Edduser from './components/Edduser';
import Edituser from './components/Edituser';
import Viewspecific from './components/Viewspecific';
import Home from './components/Home';
import Home2 from './components/home2';
import Dashboard from './components/dashboard/Dashboard';
import Addadmin from './components/admin/Addadmin';
import Admintable from './components/admin/Admintable';
import Editadmin from './components/admin/Editadmin';
import Userdash from './components/Userdash';








function App() {
  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home/>
              <div style={{ marginTop: '0px' }}>
                <Home2/> 
              </div>
            </>
          }
        />

        <Route path="/edduser" element={<Edduser />} />
        <Route path="/edituser/:id" element={<Edituser />} />
        <Route path="/viewuser" element={<ViewUser/>} />
        <Route path="/viewspecific" element={<Viewspecific />} />
        <Route path="/addadmin" element={<Addadmin />} />
        <Route path="/editadmin/:id" element={<Editadmin />} />
        <Route path="/admintable" element={<Admintable />} />
        <Route path="/admindash" element={<Dashboard/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;

