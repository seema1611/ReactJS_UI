import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import PriceTypes from './components/PriceTypes';

function App() {
  return (

    <div className="main">
      <Navbar/>
      <Content/>
      <PriceTypes/>
    </div>
  );
}

export default App;
