import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./components/Home"
import Login from "./components/Login"
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
      </Routes>
    </div>
  </>
  );
}

export default App;
