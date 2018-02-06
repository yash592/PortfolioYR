import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import ProfileImage from "./components/profileImage";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";

import MyComponent from "./components/parallax";

class App extends Component {

  render() {

    return (

    <div>
            <Navbar />
            <ProfileImage />
            <About />
            <Education />
            <Skills />

    </div>
  )
};
};
export default App;
