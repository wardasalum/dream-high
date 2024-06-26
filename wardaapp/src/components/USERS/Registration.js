 import React, { useState } from 'react'
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import  {useParams}  from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  school: Yup.string().required('School is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

function Login() {
	
  const initialValues = {
    name: '',
    school: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false); 
  };

  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      school: ""
  });
  const{username,password,email,school}=user
  const onInputChange=(e)=>{
	  setUser({...user,[e.target.name]:e.target.value})
  };
  const onSubmit= async(e)=>{

	  e.preventDefault();
	  await axios.post("http://localhost:8080/user",user)
	  navigate("/login")

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
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form onSubmit={(e)=>onSubmit(e)}>
                <Field
                  as={MDBInput}
                  wrapperClass='mb-3'
                  label='Your name'
                  size='md'
                  id='name'
                  type='text'
				  value={username} 
            onChange={(e)=>onInputChange(e)}
                  name='username'
                  className={errors.name && touched.name ? 'is-invalid' : ''}
                />
                {errors.name && touched.name && <div className="invalid-feedback">{errors.name}</div>}

                <Field
                  as={MDBInput}
                  wrapperClass='mb-3'
                  label='School'
                  size='md'
				  value={school} 
            onChange={(e)=>onInputChange(e)}
                  id='school'
                  type='text'
                  name='school'
                  className={errors.school && touched.school ? 'is-invalid' : ''}
                />
                {errors.school && touched.school && <div className="invalid-feedback">{errors.school}</div>}

                <Field
                  as={MDBInput}
                  wrapperClass='mb-3'
                  label='Your Email'
                  size='md'
                  id='email'
				  value={email} 
            onChange={(e)=>onInputChange(e)}
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
				  value={password} 
            onChange={(e)=>onInputChange(e)}
                  type='password'
                  name='password'
                  className={errors.password && touched.password ? 'is-invalid' : ''}
                />
                {errors.password && touched.password && <div className="invalid-feedback">{errors.password}</div>}

				  <div className='d-flex justify-content-center'>
              <button className='btn btn-primary my-2' type="submit">Register</button>
            </div>
              </Form>
            )}
          </Formik>

          {/* Example of using react-router-dom Link */}
          <div className='d-flex justify-content-center'>
            <Link to={'/login'}>Already have an account? Login here</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;

