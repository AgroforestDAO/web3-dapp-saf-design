import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Details from '../components/Details';
import PlantingDiagram from '../components/PlantingDiagram';
import Navbar from '../components/Navbar';

function Home() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);  

  // Add a function to set the selected species in App component
  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species);
  };

  return (    
    <div className="App">
      <Navbar />
      <h3>Saf Design</h3>
      <Sidebar onSpeciesChange={handleSpeciesChange} />
      <div className="main-view">
        {/* Conditionally render PlantingDiagram and Details */}
        {selectedSpecies && (
          <>
            <PlantingDiagram selectedSpecies={selectedSpecies} />
            <Details species={selectedSpecies} style={detailsStyle} />
          </>
        )}
      </div>
    </div>    
  );
};

const detailsStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  marginBottom: '50px'
};

export default Home;
