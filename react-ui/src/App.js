import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import PriceTypes from './components/PriceTypes';
import Footer from './components/Footer'

function App() {
  return (

    <div className="main">
      <Header/>
      <Content/>
      <PriceTypes/>
      <Footer/>

        <div className="copy">
          <h5>copyright@ Your Website 2000</h5>
        </div>
    </div>
  );
}

export default App;
