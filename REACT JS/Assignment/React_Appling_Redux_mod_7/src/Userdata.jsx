import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Userdetals from './Userdetals';
import Useredit from './Useredit';
import Userdetels from './Userdetals';

const Userdata = () => {
 
    const [userdata,setUserdata] = useState([])
    const navigate = useNavigate()

    useEffect (()=>{
        fetch("http://localhost:4000/user").then((result)=>{
           return result.json().then((resp)=>{
                // console.log(resp);
                setUserdata(resp)
            })
        })
    },[])
 
    console.log(userdata);

    
    const Useradd = ()=>{
        navigate("/useradd")
    }
    const Userdetels = (id)=>{
        navigate("/Userdetals/" + id);
    }
    const Useredit = (id)=>{
        navigate("/useredit/" + id)
    }
    const Userdelet = (id) => {
      if(window.confirm("do you went to remove ?")){
        fetch("http://localhost:4000/user/" + id, {
          method : "DELETE"
        }).then((resp)=>{
          alert("REMOVED SUCCESSFULLY.")
          window.location.reload();
        }).catch((err)=>{
          console.log(err.massage)
        })
      }
    }


    return ( 
        <>
        <h1>Userdata</h1>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>username</th>
          <th scope='col'>userpassword</th>
          {/* <th scope='col'>Position</th> */}
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <tr>
        <button onClick={Useradd}>useradd</button>
      </tr>
      <MDBTableBody>
        {
            
            userdata.map((lalit)=>
            <tr>    
                <td>{lalit.id}</td>
                <td>{lalit.name}</td>
                <td>{lalit.userEmail}</td>
                <td>{lalit.password}</td>
                <td>{lalit.userAge}</td>
                <td>{lalit.userCity}</td>
                <td>action</td>
                <td>
                    <button onClick={()=>{Userdetels(lalit.id)}}>userdetals</button>
                    <button onClick={()=>{Useredit(lalit.id)}}>useredit</button>
                    <button  onClick={()=>{Userdelet(lalit.id)}}>userdelet</button>
                </td>
            </tr>
            )
        }
       
      </MDBTableBody>
    </MDBTable>
        </>
     );
}
 
export default Userdata;