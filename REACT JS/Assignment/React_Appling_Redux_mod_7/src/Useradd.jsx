import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
// import { Navigate } from 'react-router-dom';

const Useradd = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [city, setCity] = useState("")
  const navigate = useNavigate()
  const signin = (e) => {
    // console.log(id,username,userEmail,userpassword,Age,City);
    let data = { id, name, email, password, age, city }

    console.log(data);
    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        navigate("/userdata")
      })
      // console.log(result);

    })
  }
  return (
    <>
      <h1>Useradd</h1>
      <MDBContainer fluid className="p-3 my-5">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
          </MDBCol>

          <MDBCol col='4' md='6'>


            <MDBInput wrapperClass='mb-4' value={id} disabled onChange={(j) => setId(j.target.value)} label='id' id='formControlLg' type='id' size="lg" />
            <MDBInput wrapperClass='mb-4' value={name} onChange={(j) => setName(j.target.value)} label='User name' id='formControlLg' type='text' size="lg" />
            <MDBInput wrapperClass='mb-4' value={email} onChange={(j) => setEmail(j.target.value)} label='User Email' id='formControlLg' type='Email' size="lg" />
            <MDBInput wrapperClass='mb-4' value={password} onChange={(j) => setPassword(j.target.value)} label='User password' id='formControlLg' type='password' size="lg" />
            <MDBInput wrapperClass='mb-4' value={age} onChange={(j) => setAge(j.target.value)} label='Age' id='formControlLg' type='number' size="lg" />
            <MDBInput wrapperClass='mb-4' value={city} onChange={(j) => setCity(j.target.value)} label='City' id='formControlLg' type='text' size="lg" />


            <MDBBtn className="mb-4 w-100" size="lg" onClick={signin}>
              sign in
            </MDBBtn>

          </MDBCol>

        </MDBRow>

      </MDBContainer>
    </>
  );
}

export default Useradd;