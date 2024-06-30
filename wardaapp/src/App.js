import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/USERS/Registration';
import Login from './components/USERS/Login';
import ViewUser from './components/USERS/ViewUser'
import Edduser from './components/USERS/Edduser';
import Edituser from './components/USERS/Edituser';
import Viewspecific from './components/USERS/Viewspecific';
import Home from './components/firstpage/Home'
import Home2 from './components/firstpage/home2';
import Addadmin from './components/admin/Addadmin';
import Admintable from './components/admin/Admintable';
import Editadmin from './components/admin/Editadmin';
import Contact from './components/pages/ContactUs'
import Footer from './components/Footer/Footer';
import AboutUs from './components/pages/AboutUs';
import ResponsiveDrawer from './components/admindash/Userdash'
import Navbar from './components/firstpage/Navbar1';
import Userdash from './components/admindash/Userdash'
import Hubtable from './components/HUB/hubtable';
import ResourceView from './components/Resource/ResurceView';
import HubForm from './components/HUB/Hubform';
import List from './components/HUB/List';
import Dash from './components/userdash/dashboard';
import ResourceAdd from './components/Resource/ResourceAdd';
import Addschools from './components/School/Addschool';
import SchoolView from './components/School/viewschools';
import ResourceRequest from './components/Resource/ResourceRequest';
import RequestApproval from './components/Resource/RequestApproval';
import RequestView from './components/Resource/RequestList';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login/>
              {/* <div style={{ marginTop: '0px' }}>
                <Home2/> 
              </div>
            <Footer/> */}
            </>
          }
        />
       
        <Route path="/about" element={<AboutUs />} />
     <Route path="/ResurceView" element={<ResourceView />} />
         <Route path="/edduser" element={<Edduser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resrcadd" element={<ResourceAdd />} />
        <Route path="/addschool" element={<Addschools />} />
        <Route path="/viewSChool" element={<SchoolView />} />
        <Route path="/edituser/:id" element={<Edituser />} />
        <Route path="/viewspecific" element={<Viewspecific />} />
        <Route path="/addadmin" element={<Hubtable />} />
        <Route path="/editadmin/:id" element={<Editadmin />} />
        <Route path="/hublist" element={<List/>} />
        <Route path="/userdash" element={<Userdash/>} />
        <Route path="/dash" element={<Dash/>} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/requestsend" element={<ResourceRequest />} />
        <Route path="/reg" element={<Login />} />
        <Route path="/reguest" element={<RequestView/>} />
        <Route path="/reguestapprv" element={<RequestApproval/>} />

     
      </Routes>
    </Router>
  );
}

export default App;
