import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Transtition from './components/Transition/Transition';

function App() {
  return (
    <div className="gradient__bg">
      <Transtition />
      <div className='late'>
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;