import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Registration = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name is too short!')
      .max(50, 'Name is too long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    rpswd: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Repeat your password')
  });

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
      <div className='mask gradient-custom-4'></div>
      <MDBCard className='m-7' style={{ maxWidth: '500px' }}>
        <MDBCardBody className='px-5 py-4'>
          <h2 className="text-uppercase text-center mb-4">Create an account</h2>
          <Formik
            initialValues={{ name: '', email: '', password: '', rpswd: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='mb-3'>
                  <MDBInput
                    label='Your Name'
                    size='md'
                    id='form1'
                    type='text'
                    name='name'
                    as={Field}
                    className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage component="div" name="name" className="invalid-feedback" />
                </div>
                <div className='mb-3'>
                  <MDBInput
                    label='Your Email'
                    size='md'
                    id='form2'
                    type='email'
                    name='email'
                    as={Field}
                    className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage component="div" name="email" className="invalid-feedback" />
                </div>
                <div className='mb-3'>
                  <MDBInput
                    label='Password'
                    size='md'
                    id='form3'
                    type='password'
                    name='password'
                    as={Field}
                    className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage component="div" name="password" className="invalid-feedback" />
                </div>
                <div className='mb-3'>
                  <MDBInput
                    label='Repeat your password'
                    size='md'
                    id='form4'
                    type='password'
                    name='rpswd'
                    as={Field}
                    className={`form-control ${touched.rpswd && errors.rpswd ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage component="div" name="rpswd" className="invalid-feedback" />
                </div>
                <div className='d-flex justify-content-center'>
                  <button type="submit" className='btn btn-primary my-2'>REGISTER</button>
                </div>
              </Form>
            )}
          </Formik>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registration;
