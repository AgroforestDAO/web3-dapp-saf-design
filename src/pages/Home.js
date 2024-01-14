// Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Details from '../components/Details';
import { SpeciesProvider } from '../context/SpeciesContext';

function Home() {
  return (    
    <div className="App">
      <Navbar />
      <h3>Saf Design</h3>    
      <SpeciesProvider>
        <Dropdown />
        <Details />
      </SpeciesProvider>
    </div>    
  );
};

export default Home;
