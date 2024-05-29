import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Userdata from './Userdata';
import Useradd from './Useradd';
import Userdetals from './Userdetals';
import Useredit from './Useredit';

const Mainrouter =  createBrowserRouter ([
    {
        path : "/",
        element : <Navbar/>,
        // path : "/Userdata",
        element : <><Navbar/><Userdata/></>
    },
    {
        path : "/Useradd",
        element : <><Navbar/><Useradd/></>
    },
    {
        path : "/Userdetals/:userid",
        element : <><Navbar/><Userdetals/></>
    },
    {
        path : "/Useredit/:userid",
        element : <><Navbar/><Useredit/></>
    }
   
])

export default  Mainrouter 