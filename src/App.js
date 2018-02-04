import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import ProfileImage from "./components/profileImage";
import About from "./components/about";
const App = () => (

    <div>
            <Navbar />
            <ProfileImage />
            <About />


    </div>
);
export default App;
