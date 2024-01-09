import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Details from './components/Details';
import PlantingDiagram from './components/PlantingDiagram';
import './App.css';

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  // Add a function to set the selected species in App component
  const handleSpeciesChange = (species) => {
    setSelectedSpecies(species);
  };

  return (    
    <div className="App">
      <h3>Saf Design</h3>
      <Sidebar onSpeciesChange={handleSpeciesChange} />
      <div className="main-view">
        {/* Conditionally render PlantingDiagram and Details */}
        {selectedSpecies && (
          <>
            <PlantingDiagram selectedSpecies={selectedSpecies} />
            <Details species={selectedSpecies} />
          </>
        )}
      </div>
    </div>    
  );
}

export default App;
