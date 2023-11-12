import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBar';
import SignIn from './components/SignIn'
import Contact from './components/Contact'

import './App.css';


function App() {

  return (
    <>
    
    <NavBar />
    <Routes>
        <Route  path="/sign-in" element={<SignIn />}/>
        <Route  path="/contact" element={<Contact/>}/>
    </Routes>
 
  </>
  );
}

export default App;