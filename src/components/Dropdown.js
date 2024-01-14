import React from 'react';
import speciesList from '../species';
import { useSpecies } from '../context/SpeciesContext';

const Dropdown = () => {
  const { selectedSpecies, setSelectedSpecies } = useSpecies();

  const handleChange = (event) => {
    const selectedName = event.target.value;
    const selected = speciesList.find(species => species.name === selectedName);
    
    setSelectedSpecies(selected);
  };

  return (
    <>
      <select value={selectedSpecies?.name || ''} onChange={handleChange}>
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