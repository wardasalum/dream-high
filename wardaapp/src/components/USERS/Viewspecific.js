import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Viewspecific() {

    const[user,setUser]=useState({
        name:" ",
        username:"",
        email:"",
        password:""
    })
  
    const{id}= useParams();
    useEffect(()=>{
        loadUser()
    },[])

    const loadUser=async () =>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className='Container'>
            <div className='row'>
                <div>
                    <h2 className='text-center m-4'>User details </h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of user id : {user.id}
                            <ul className='list-group list-group flush'>
                                <li className='list-group-item'>
                                    <b>NAME:</b>
                       {user.name}
                                </li>

                                <li className='list-group-item'>
                                    <b>USERNAME:</b>
                                {user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>EMAIL:</b>
                           {user.email}
                                </li>
                                <li className='list-group-item'>
                                    <b>PASSWORD:</b>
                                {user.password}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to ={'/viewuser'}> Back to home</Link>
                </div>
            </div>


        </div>
    )
}
