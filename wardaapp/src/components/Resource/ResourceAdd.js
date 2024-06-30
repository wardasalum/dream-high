
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Addresource() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [resource, setResource] = useState({
        type: "",
        name: "",
        total: ""
        
    });

    const { type,name, total } = resource;

    const typeOptions = [
        'resources',
        'facilities',
        'material'
    ];


    const onInputChange = (e) => {
        setResource({ ...resource, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
        if (!type || !name || !total ) {
            alert("Please fill in all fields");
            return;
        }
        try {
            await axios.post("http://localhost:8080/resource", resource);
            // After successful submission, clear the form fields
            setResource({
                type: "",
                name: "",
                total: ""
            });
            alert("Resource added successfully!");
            navigate("/ResurceView");
        } catch (error) {
            console.error("Error adding resource: ", error);
            alert("Failed to add resource. Please try again.");
        }
    };

    return (
        <div className='Container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
                    <div className='mask gradient-custom-4'></div>

                    <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
                        <MDBCardBody className='px-5 py-4'>
                            <h2 className="text-uppercase text-center mb-4">ADD RESOURCES</h2>
                            {/* Dropdown for Type */}
                        <div className='mb-3'>
                            <label htmlFor='type' className='form-label'>Type</label>
                            <select
                                className='form-select'
                                id='type'
                                name='type'
                                value={resource.type}
                                onChange={onInputChange}
                                required
                            >
                                <option value=''>Select Type</option>
                                {typeOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>

                            <MDBInput wrapperClass='mb-3' label='Name' size='md' id='form4' type='text' name='name' required value={name}
                                onChange={(e) => onInputChange(e)} />

                            <MDBInput wrapperClass='mb-3' label='Total' size='md' id='form2' type='text' name='total' required value={total}
                                onChange={(e) => onInputChange(e)} />
                      
                            <Button className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>ADD</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

            </form>
        </div>
    )
}

