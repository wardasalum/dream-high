import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Registration() {


  return (
 
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
        <div className='mask gradient-custom-4'></div>
        <MDBCard className='m-7' style={{ maxWidth: '500px' }}>
          <MDBCardBody className='px-5 py-4'>
            <h2 className="text-uppercase text-center mb-4">Create an account</h2>
            <MDBInput wrapperClass='mb-3' label='Your Name' size='md' id='form1' type='text' name='name'  />
            <MDBInput wrapperClass='mb-3' label='Your Email' size='md' id='form2' type='email' name='email' />
            <MDBInput wrapperClass='mb-3' label='Password' size='md' id='form3' type='password' name='password' />
            <MDBInput wrapperClass='mb-3' label='Repeat your password' size='md' id='form4' type='password' name='rpswd' />
            <MDBBtn className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>Register</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
 
  );
}

export default Registration;
