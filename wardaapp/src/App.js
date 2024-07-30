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
import Teacherdash from './components/teacher/Teacherdash';
import AddActivity from './components/Activity/upcoming activity';
import ActivityView from './components/Activity/ActivityView'
import ClassAdd from './components/class_management/ClassAdd';
import ViewClass from './components/class_management/ViewClass';
import Example from './components/exmple';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Example/>
              {/* <div style={{ marginTop: '0px' }}>
                <Home2 />
              </div>
              <Footer /> */}
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/addclass" element={<ClassAdd />} />
        <Route path="/ResurceView" element={<ResourceView />} />
        <Route path="/ViewClass" element={<ViewClass />} />
        <Route path="/edduser" element={<Edduser />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resrcadd" element={<ResourceAdd />} />
        <Route path="/addschool" element={<Addschools />} />
        <Route path="/viewSChool" element={<SchoolView />} />
        <Route path="/edituser/:id" element={<Edituser />} />
        <Route path="/editresource/:id" element={<ResourceAdd />} />
        <Route path="/editcategory/:id" element={<ClassAdd/>} />
        <Route path="/editActivity/:id" element={<AddActivity />} />
        <Route path="/viewspecific" element={<Viewspecific />} />
        <Route path="/addhub" element={<Hubtable />} />
        <Route path="/editadmin/:id" element={<Editadmin />} />
        <Route path="/hublist" element={<List />} />
        <Route path="/userdash" element={<Userdash />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/activityadd" element={<AddActivity/>} />
        <Route path="/activityview" element={<ActivityView/>} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/requestsend" element={<ResourceRequest />} />
        <Route path="/teacher" element={<Teacherdash/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reguest" element={<RequestView />} />
        <Route path="/ActivityView" element={<ActivityView />} />
        <Route path="/reguestapprv" element={<RequestApproval />} />


      </Routes>
    </Router>
  );
}

export default App;
