import React, { useState } from 'react';
import speciesList from '../species';

const Dropdown = ({ onSpeciesChange }) => {
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const handleChange = (event) => {
    const selectedName = event.target.value;
    const selected = speciesList.find(species => species.name === selectedName);
    
    setSelectedSpecies(selectedName);

    // Pass the selected species to the parent component
    onSpeciesChange(selected);
  };

  return (
    <>
      <select value={selectedSpecies} onChange={handleChange}>
        <option value="">Select...</option>
        {speciesList.map((species, index) => (
          <option key={index} value={species.name}>
            {species.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
