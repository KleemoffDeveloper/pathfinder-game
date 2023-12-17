


import NavBar from './NavBar';
import Login from './LoginFolder/Login'
import AuthDetails from './LoginFolder/AuthDetails';
import Signup from './LoginFolder/SignUp'
import Reset from './LoginFolder/Reset'

import './App.css';


// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, React } from 'react'


// COMPONENTS
import NavBar from "./Components/Navbar";



// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Play from "./Pages/Play";


import './App.css'



function App() {

  return (

    <div className="App bg-secondary">
      <Router>
        <NavBar />
        <AuthDetails />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/play" element={<Play />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App

