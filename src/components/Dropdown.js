import React from 'react';
import { useSpecies } from '../context/SpeciesContext';

function Dropdown({ selected, onSelect }) {
  const { speciesList } = useSpecies();

  const handleChange = function(event) {
    const selectedName = event.target.value;
    const selected = speciesList.find(function(species) {
      return species.name === selectedName;
    });
    
    onSelect(selected);
  };

  return (
    <>
      <select value={selected?.name || ''} onChange={handleChange} style={{ backgroundColor: selected ? '#617c59' : 'white' }}>
        <option value="">Select...</option>
        {speciesList.map(function(species, index) {
          return (
            <option key={index} value={species.name}>
              {species.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default Dropdown;