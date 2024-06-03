import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import PersistentDrawerRight from './components/firstpage/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
 <App/>
    <Router>
      <Routes>
        {/* <Route path='' element={<MainNavigation/>}></Route>
        <Route path='/user/welcome' element={<WelcomeComponent />}></Route>
        <Route path='/user/menu' element={<MainNavigation/>}></Route>
        <Route path='/user/dash' element={<ResponsiveDrawer/>}></Route> */}
        <Route exact path="/" component={PersistentDrawerRight} />
       
        {/* Define routes for other components */}
     </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
