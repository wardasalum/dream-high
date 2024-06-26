
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit = (data) => {
    // Handle form submission logic here (e.g., API call, authentication)
    console.log(data);
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh'}}>
      <div className='mask gradient-custom-4'></div>
      <MDBCard className='m-8' style={{maxWidth: '500px'}}>
        <MDBCardBody className='px-5 py-4'>
          <div>
            <img src='/images/computer.png' alt="Computer" style={{ width: "60%", maxWidth: "200px", height: "70%" }} />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBInput
              wrapperClass='mb-3'
              label='Your Email'    size='md' id='email'  type='email'    {...register('email', { required: true })}/>       {errors.email && <span className="text-danger">Email is required</span>}

            <MDBInput
              wrapperClass='mb-3'
              label='Password'
              size='md'
              id='password'
              type='password'
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-danger">Password is required</span>}

            <div className='d-flex justify-content-center'>
              <button className='btn btn-primary my-2' type="submit">LOGIN</button>
            </div>
          </form>

          <div className='text-center'>
            <p className='mb-0'>Don't have an account?</p>
            <Link className='btn btn-link' to={'/signup'}>Sign Up</Link>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;


