// import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const Userdetels = () => {
    const [userdata, setUserdata] = useState({})
    const { userid } = useParams()
    useEffect(() => {
        fetch("http://localhost:4000/user/" + userid).then((result) => {
            result.json().then((resp) => {
                // console.log(resp);
                setUserdata(resp)
            })
        })
    }, [])
    console.log(userdata);
    return (
        <>


<MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Password</th>
          <th scope='col'>Age</th>
          <th scope='col'>City</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>{userdata.id}</td>
          <td>{userdata.name}</td>
          <td>{userdata.email}</td>
          <td>{userdata.password}</td>
          <td>{userdata.age}</td>
          <td>{userdata.city}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>

             {/* <h1>{userdata}</h1>
            {
                userdata &&

                <>
                    <h1>{userdata.id}</h1>
                    <h1>{userdata.name}</h1>
                    <h1>{userdata.password}</h1>
                    <h1>{userdata.age}</h1>
                    <h1>{userdata.city}</h1>
                </> 
            
            } */}
        </>
    );
}

export default Userdetels