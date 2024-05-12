import './App.css';
import Home from './components/Home'
import Home2 from './components/home2';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard/Dashboard';



function App() {
  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard />
              <div style={{ marginTop: '0px' }}>
                {/* <Home2 /> */}
              </div>
            </>
          }
        />


        <Route path="/addadmin" element={<Registration />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;

