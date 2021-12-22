import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Transtition from './components/Transition/Transition';
import BgAnimation from './components/BackgroundAnimation/BackgroundAnimation';

function App() {
  return (
    <div className="gradient__bg">
      <Transtition />
      <div className='late'>
        {/* BgAnimation */}
        <BgAnimation />

        {/* Bubble Animations */}
        <div class="animateme1 css-1tokw9w"></div>
        <div class="animateme2 css-jfjuh7"></div>

        {/* SideBar */}
        <div id="progressbar"></div>
        <div id="scrollpath"></div>

        {/* Main Content */}
        <Header />
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;