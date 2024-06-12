import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh'}}>
      <div className='mask gradient-custom-4'></div>
      <MDBCard className='m-8' style={{maxWidth: '500px'}}> {/* Add margin top here */}
        <MDBCardBody className='px-5 py-4'> {/* Adjust padding here */}
         <div>
         <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "70%" }} />
         </div>
         
          <MDBInput wrapperClass='mb-3' label='Your Email' size='md' id='form2' type='email'/> {/* Adjust wrapperClass and size */}
          <MDBInput wrapperClass='mb-3' label='Password' size='md' id='form3' type='password'/> {/* Adjust wrapperClass and size */}
        
          <div className='d-flex justify-content-center'>
            <Link className='btn btn-primary my-2' to={'/userdash'}>LOGIN</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
