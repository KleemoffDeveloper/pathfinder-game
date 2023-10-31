import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./components/Contact"
import About from "./components/About"
import './App.css';


function App() {
  return (
    <>
    <NavBar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/about-us" element={<About/>}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
