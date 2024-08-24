

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput
} from 'mdb-react-ui-kit';
import { Button } from '@mui/material';

export default function AddActivity() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [activity, setActivity] = useState({
        date: "",
        type: "",
        // name: "",
        description: ""
    });

    const { date, type, description } = activity;

    const typeOptions = [
        'Training',
        'Seminar',
        'Workshop'
    ];

    useEffect(() => {
        if (id) {
            fetchActivity(id);
        }
    }, [id]);

    const fetchActivity = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/activity/${id}`);
            setActivity(response.data); // Assuming response.data contains the activity details
        } catch (error) {
            console.error("Error fetching activity: ", error);
            // Handle error, e.g., redirect or show error message
        }
    };

    const onInputChange = (e) => {
        setActivity({ ...activity, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
        if (!type || !date || !description) {
            alert("Please fill in all fields");
            return;
        }
        try {
            if (id) {
                await axios.put(`http://localhost:8080/activity/${id}`, activity);
                alert("Activity updated successfully!");
            } else {
                await axios.post("http://localhost:8080/activity", activity);
                alert("Activity added successfully!");
            }
            navigate("/ActivityView");
        } catch (error) {
            console.error("Error adding/updating activity: ", error);
            alert("Failed to add/update activity. Please try again.");
        }
    };

    return (
        <div className='Container'>
            <form onSubmit={onSubmit}>
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
                    <div className='mask gradient-custom-4'></div>

                    <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
                        <MDBCardBody className='px-5 py-4'>
                            <h2 className="text-uppercase text-center mb-4">{id ? 'EDIT ACTIVITY' : 'ADD ACTIVITY'}</h2>

                            <div className='mb-3'>
                                <label htmlFor='type' className='form-label'>Type</label>
                                <select
                                    className='form-select'
                                    id='type'
                                    name='type'
                                    value={type}
                                    onChange={onInputChange}
                                    required
                                >
                                    <option value=''>Select Type</option>
                                    {typeOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <MDBInput wrapperClass='mb-3' label='Description' size='md' id='form2' type='text' name='description' required value={description}
                                onChange={onInputChange} />

                            <MDBInput wrapperClass='mb-3' label='Date' size='md' id='form2' type='text' name='date' required value={date}
                                onChange={onInputChange} />

                            <Button className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>{id ? 'UPDATE' : 'ADD'}</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </form>
        </div>
    );
}
