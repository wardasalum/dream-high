
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

export default function ResourceRequest() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [request, setRequest] = useState({
        description: "",
        name:"",
        quantity: ""
    });

    const { description, name,  quantity} = request;

    const onInputChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
        if (!name || ! quantity || ! description) {
            alert("Please fill in all fields");
            return;
        }
        try {
            await axios.post("http://localhost:8080/request", request);
            // After successful submission, clear the form fields
            setRequest ({
                description: "",
                    name:"",
                     quantity: ""

            });
            alert("request have been send successfully!");
            navigate("/reguest");
        } catch (error) {
            console.error("Error sending request: ", error);
            alert("Failed to send request. Please try again.");
        }
    };

    
    // Function to fetch request status from backend
    const fetchRequestStatus = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/request/${id}`); // Replace with your backend endpoint
            // Assuming your backend returns status as part of the response
            const { status } = response.data;
            // You can set the status to state or use it to conditionally render UI
            console.log("Request status: ", status);
            // Example: setRequest({ ...request, status });
        } catch (error) {
            console.error("Error fetching request status: ", error);
        }
    };

    useEffect(() => {
        // Fetch request status when component mounts
        fetchRequestStatus();
    }, []);

    return (
        <div className='Container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
                    <div className='mask gradient-custom-4'></div>

                    <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
                        <MDBCardBody className='px-5 py-4'>
                            <h2 className="text-uppercase text-center mb-4">RESOURCE REQUEST</h2>

                            <MDBInput wrapperClass='mb-3' label='Name' size='md' id='form4' type='text' name='name' required value={name}
                                onChange={(e) => onInputChange(e)} />

                            <MDBInput wrapperClass='mb-3' label='number of' size='md' id='form3' type='text' name='quantity' required value={quantity}
                                onChange={(e) => onInputChange(e)} />

                            <MDBInput wrapperClass='mb-3' label='description of' size='md' id='form2' type='text' name='description' required value={description}
                                onChange={(e) => onInputChange(e)} />

                            <Button className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>ADD</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

            </form>
            
        </div>
    )
}

