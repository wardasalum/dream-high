// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import './adminstyle.css'

// export default function Admintable() {
//   const [admins, setAdmins] = useState([]);

//   const {id}=useParams()

  
//   useEffect(() => {
//     loadAdmins();
//   }, []);


//   //for retrieve data
//   const loadAdmins = async () => {
//     const result = await axios.get("http://localhost:8080/admins")

//     setAdmins(result.data);
//   };
//   return (
//     <div  style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh'} }>
//        <br></br>  <br></br>
//        <table className="table table-bordered small-table" >
//   <thead>
//     <tr>
//     <th scope="col">ID</th>
//       <th scope="col">Firstname</th>
//       <th scope="col">lastname</th>
//       <th scope="col">Email</th>
//       <th scope="col">Hub</th>
//       <th scope="col">ACTION</th>
//     </tr>
//   </thead>
//   <tbody>
  
// {
//   admins.map((admin, index) => (
//                 <tr>
//                   <th scope="row" key={index}>{index + 1}</th>
//                   <td>{admin.firstname}</td>
//                   <td>{admin.lastname}</td>
//                   <td>{admin.email}</td>
//                   <td>{admin.school}</td>
//                   <Link className='btn btn-primary mx-2' to ='/addadmin'>ADD</Link>
//                   <Link className='btn btn-primary mx-2' to ='/'>View</Link>
//                 </tr>
//               ))
// }
  
    
 
//   </tbody>
// </table>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './adminstyle.css';

export default function Admintable() {
  const [admins, setAdmins] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadAdmins();
  }, []);

  // For retrieving data
  const loadAdmins = async () => {
    const result = await axios.get("http://localhost:8080/admins");
    setAdmins(result.data);
  };
    //for delete data
    const deleteAdmin = async (id)=> {
      await axios.delete(`http://localhost:8080/admin/${id}`)
      loadAdmins()
    }

  return (
    <div style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <table className="table table-bordered small-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Hub</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{admin.firstname}</td>
                <td>{admin.lastname}</td>
                <td>{admin.email}</td>
                <td>{admin.school}</td>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link className='btn btn-primary' to='/addadmin' style={{ backgroundColor: 'blue', width: '80px', textAlign: 'center' }}>ADD</Link>
                    <Link className='btn btn-primary'to={`/editadmin/${admin.id}`}style={{ backgroundColor: 'green', width: '80px', textAlign: 'center' }}>UPDATE</Link>
                    <button type="button" className="btn btn-danger" style={{ width: '80px', textAlign: 'center' }}
                     onClick={()=>deleteAdmin(admin.id)}>DELETE</button>
                  </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
