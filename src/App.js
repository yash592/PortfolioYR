import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import profileImage from "./components/profileImage";
import About from "./components/about";
const App = () => (

    <div>
            <Navbar />
            <profileImage />
            <About />
    </div>
);
export default App;
