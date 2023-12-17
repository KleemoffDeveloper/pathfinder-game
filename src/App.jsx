
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from './LoginFolder/Login'
import AuthDetails from './LoginFolder/AuthDetails';
import Signup from './LoginFolder/SignUp'
import Reset from './LoginFolder/Reset'

import './App.css';

function App() {

  return (
    <>
    

    <AuthDetails />
    <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/reset" element={<Reset/>}/>
    </Routes>
 
  </>
  );

}

export default App

