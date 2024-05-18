import React, { useEffect, useState } from 'react'
import{
MDBBtn,
MDBContainer,
MDBCard,
MDBCardBody,
MDBInput,
MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function Edituser() {

    let navigate =useNavigate()
    const {id} =useParams()

    const [user,setUser]=useState({
        name:" ",
        username: "",
        password:"",
        email:" "
    })

    const{name,username,password,email}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadUser()
    },[]);
    const onSubmit= async(e)=>{

        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")

    };
    const loadUser=async () =>{
        const result= await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
  return (
    <div className='Container'>
    <form onSubmit={(e)=>onSubmit(e)}>
       <MDBCard className='m-7' style={{ maxWidth: '500px' }}>
          <MDBCardBody className='px-5 py-4'>
            <h2 className="text-uppercase text-center mb-4">Create an account</h2>
            <MDBInput wrapperClass='mb-3' label='Your Name' size='md' id='form1' type='text' name='name' value={name} 
            onChange={(e)=>onInputChange(e)} />
            <MDBInput wrapperClass='mb-3' label='username' size='md' id='form2' type='text' name='username'value={username} 
                 onChange={(e)=>onInputChange(e)}
            />
              <MDBInput wrapperClass='mb-3' label='ur paswrd' size='md' id='form4' type='password' name='password' value={password}
             onChange={(e)=>onInputChange(e)} />
           
             
            <MDBInput wrapperClass='mb-3' label='Your Email' size='md' id='form3' type='email' name='email'value={email}
             onChange={(e)=>onInputChange(e)} />
           
            <MDBBtn className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>edit</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </form>
 
    </div>
  )
}
