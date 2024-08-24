
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

export default function Addschools() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [school, setSchool] = useState({
        category: "",
        name: "",
       number_females: "",
       number_males : ""
    });

    const { category, name,  number_males,  number_females } = school;

    const typeOptions = [
        'Form1',
        'Form2',
        'Form3',
        'Form4',
        'Form5',
        'Form6'
    ];


    const onInputChange = (e) => {
        setSchool({ ...school, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        // Check if any field is empty
        if (!category || !name || ! number_females || ! number_males) {
            alert("Please fill in all fields");
            return;
        }
        try {
            if (id) {
                await axios.put(`http://localhost:8080/school/${id}`, school);
                alert("School updated successfully!");
            } else {
                await axios.post("http://localhost:8080/school", school);
                alert("School added successfully!");
            }
        
            navigate("/viewSChool");;
        } catch (error) {
            console.error("Error adding/updating school: ", error);
            alert("Failed to add/update school. Please try again.");
        }
    };


    // const onSubmit = async (e) => {
    //     e.preventDefault();
    //     // Check if any field is empty
    //     if (!category || !name || ! number_females || ! number_males) {
    //         alert("Please fill in all fields");
    //         return;
    //     }
    //     try {
    //         await axios.post("http://localhost:8080/school", school);
    //         // After successful submission, clear the form fields
    //         setSchool({
    //             category: "",
    //             name: "",
    //            number_females: "",
    //            number_males : ""

    //         });
    //         alert("School added successfully!");
    //         navigate("/viewSChool");
    //     } catch (error) {
    //         console.error("Error adding school: ", error);
    //         alert("Failed to add school. Please try again.");
    //     }
    // };

    return (
        <div className='Container'>
            <form onSubmit={(e) => onSubmit(e)}>
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh' }}>
                    <div className='mask gradient-custom-4'></div>

                    <MDBCard className='m-9' style={{ maxWidth: '700px' }}>
                        <MDBCardBody className='px-5 py-4'>
                            <h2 className="text-uppercase text-center mb-4">ADD SCHOOL</h2>
                            {/* Dropdown for Type */}
                            <div className='mb-3'>
                                <label htmlFor='type' className='form-label'>Categories</label>
                                <select
                                    className='form-select'
                                    id='category'
                                    name='category'
                                    value={school.category}
                                    onChange={onInputChange}
                                    required
                                >
                                    <option value=''>Select Category</option>
                                    {typeOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <MDBInput wrapperClass='mb-3' label='Name' size='md' id='form4' type='text' name='name' required value={name}
                                onChange={(e) => onInputChange(e)} />

                            <MDBInput wrapperClass='mb-3' label='female' size='md' id='form3' type='text' name='number_females' required value={number_females}
                                onChange={(e) => onInputChange(e)} />

                            <MDBInput wrapperClass='mb-3' label='male' size='md' id='form2' type='text' name='number_males' required value={number_males}
                                onChange={(e) => onInputChange(e)} />
                            <Button className='mb-3 w-100 gradient-custom-4' size='md' type='submit'>{id ? 'UPDATE' : 'ADD'}</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

            </form>
        </div>
    )
}

