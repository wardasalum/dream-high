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
         
          <MDBInput wrapperClass='mb-3' label='Your Name' size='md' id='form1' type='text'/> {/* Adjust wrapperClass and size */}
          <MDBInput wrapperClass='mb-3' label='Your Email' size='md' id='form2' type='email'/> {/* Adjust wrapperClass and size */}
          <MDBInput wrapperClass='mb-3' label='Password' size='md' id='form3' type='password'/> {/* Adjust wrapperClass and size */}
          <MDBInput wrapperClass='mb-3' label='Repeat your password' size='md' id='form4' type='password'/> {/* Adjust wrapperClass and size */}
   
          {/* <MDBBtn className='mb-3 w-100 gradient-custom-4' size='md'>LOGIN</MDBBtn> Adjust margin bottom and size */}
          <Link className='btn btn-primary center my-2'  to ={'/admindash'}> REGISTER</Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
