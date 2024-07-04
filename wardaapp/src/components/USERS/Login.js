import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(3, 'Password must be at least 6 characters'),
});

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: values.email,
        password: values.password,
      });

      const { data } = response;

      if (data && data.role === 'admin') {
        alert(" successfully Login");
        navigate('/userdash'); // Redirect to admin page
      } else  if (data && data.role === 'user'){
        alert(" successfully Login");
        navigate('/dash'); // Redirect to user page
      }
      else{

        alert(" successfully Login");
        navigate('/teacher'); // Redirect to user page

      }
      

    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure, show error message, etc.
    }

    setSubmitting(false);
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh'}}>
      <div className='mask gradient-custom-4'></div>
      <MDBCard className='m-8' style={{maxWidth: '500px'}}>
        <MDBCardBody className='px-5 py-4'>
          <div>
            <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "70%" }} />
          </div>

          {/* Formik form with validation */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={MDBInput}
                  wrapperClass='mb-3'
                  label='Your Email'
                  size='md'
                  id='email'
                  type='email'
                  name='email'
                  className={errors.email && touched.email ? 'is-invalid' : ''}
                />
                {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}

                <Field
                  as={MDBInput}
                  wrapperClass='mb-3'
                  label='Password'
                  size='md'
                  id='password'
                  type='password'
                  name='password'
                  className={errors.password && touched.password ? 'is-invalid' : ''}
                />
                {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}

                <div className='d-flex justify-content-center'>
                  <button className='btn btn-primary my-2' type="submit">LOGIN</button>
                </div>
              </Form>
            )}
          </Formik>

          <div className='text-center'>
            <p className='mb-0'>Don't have an account?</p>
            <Link className='btn btn-link' to={'/signup'}>Sign Up</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
