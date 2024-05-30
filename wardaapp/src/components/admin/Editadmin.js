import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import{
MDBBtn,
MDBContainer,
MDBCard,
MDBCardBody,
MDBInput,
MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';


export default function Editadmin() {
   
    let navigate =useNavigate()
    const {id} =useParams()

    const [admin,setAdmin]=useState({
        lastname:" ",
        email:"",
        firstname:"",
        school:" "
    })

    const{lastname,email,firstname,school}=admin

    const onInputChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    };

    useEffect(()=>{
        loadAdmin()
    },[]);

    const onSubmit= async(e)=>{

        e.preventDefault();
        console.log("Submitting:", admin);
        await axios.put(`http://localhost:8080/admin/${id}`,admin)
        navigate("/admintable")

    };
    const loadAdmin=async () =>{
        const result= await axios.get(`http://localhost:8080/admin/${id}`)
        setAdmin(result.data)
    }
  return (

        <div className='Container'>
    <form onSubmit={(e)=>onSubmit(e)}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
            <div className='mask gradient-custom-4'></div>
            <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
              <MDBCardBody className='px-5 py-4'>
            <h2 className="text-uppercase text-center mb-4">EDIT ADMIN</h2>
            <MDBInput wrapperClass='mb-3' label='Lastname' size='md' id='form1' type='text' name='lastname' value={lastname} 
            onChange={(e)=>onInputChange(e)} />
              <MDBInput wrapperClass='mb-3' label='firstname' size='md' id='form2' type='text' name='firstname' value={firstname}
             onChange={(e)=>onInputChange(e)} />
           
              <MDBInput wrapperClass='mb-3' label='email' size='md' id='form4' type='email' name='email' value={email}
             onChange={(e)=>onInputChange(e)} />
           
             
            <MDBInput wrapperClass='mb-3' label='School' size='md' id='form3' type='text' name='school' value={school}
             onChange={(e)=>onInputChange(e)} />
           
           
           <Button className='mb-3 w-100 gradient-custom-4' size='md' type='button'  onClick={onSubmit}>UPDATE</Button>
            </MDBCardBody>
            </MDBCard>
          </MDBContainer>
          
        </form>
    </div>
  )
}
