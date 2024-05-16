import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import ViewUser from './components/ViewUser'




function App() {
  return (

    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ViewUser/>
              {/* <div style={{ marginTop: '0px' }}>
                <Home2 /> */}
              {/* </div> */}
            </>
          }
        />


        <Route path="/addadmin" element={<Registration />} />
        <Route path="/viewadmin" element={<Registration />} />
        <Route path="/add hub" element={<Registration />} />
        <Route path="/view hub" element={<Registration />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;

