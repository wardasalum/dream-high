import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Viewuser() {

  const [users, setUsers] = useState([]);

  const {id}=useParams()

  useEffect(() => {
    loadUsers();
  }, []);

//for retrieve data
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users")

    setUsers(result.data);
  };

  //for delete data
  const deleteUser = async (id)=> {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }



  return (
    <div className='container'>

      <div className="table table-dark table-striped">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">pasword</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.email}</td>
                  <Link className='btn btn-primary mx-2' to ='/edduser'>ADD</Link>
                  <Link className='btn btn-primary mx-2' to ='/canceluser'>Cancel</Link>
                  <Link className='btn btn-primary mx-2' to ='/viewspecific'>View</Link>
                  <Link  class="btn btn-primary" to={`/edituser/${user.id}`} >Edit</Link>
                  <button type="button" class="btn btn-danger"  
                  onClick={()=>deleteUser(user.id)}>Delete</button>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>

    </div>
  )
}
