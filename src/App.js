import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import ProfileImage from "./components/profileImage";
import About from "./components/about";
import Education from "./components/education";

import MyComponent from "./components/parallax";

const App = () => (

    <div>
            <Navbar />
            <MyComponent />
            <ProfileImage />
            <About />
            <Education />
            <MyComponent/>

    </div>
);
export default App;
