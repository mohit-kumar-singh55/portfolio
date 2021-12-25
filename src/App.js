import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Transition from './components/Transition/Transition';
import BgAnimation from './components/BackgroundAnimation/BackgroundAnimation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="gradient__bg">
        <Transition />
        <div className='late'>
          {/* BgAnimation */}
          <BgAnimation />

          {/* Bubble Animations */}
          <div className="animateme1 css-1tokw9w"></div>
          <div className="animateme2 css-jfjuh7"></div>

          {/* SideBar */}
          <div id="progressbar"></div>
          <div id="scrollpath"></div>

          {/* Main Content */}
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about"about element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;