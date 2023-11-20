import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Login from './components/Login'
import Contact from './components/Contact'
import AuthDetails from './components/AuthDetails';
import Signup from './components/SignUp'
import Reset from './components/Reset'

import './App.css';


function App() {

  return (
    <>
    
    <NavBar />
    <AuthDetails />
    <Routes>
        <Route  path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route  path="/contact-us" element={<Contact/>}/>
        <Route path="/reset" element={<Reset/>}/>
    </Routes>
 
  </>
  );
}

export default App;