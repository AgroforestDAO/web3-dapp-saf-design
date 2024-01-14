import React from 'react';
import speciesList from '../species';

function Dropdown(props) {
  const handleChange = function(event) {
    const selectedName = event.target.value;
    const selected = speciesList.find(function(species) {
      return species.name === selectedName;
    });
    
    props.onSelect(selected);
  };

  return (
    <>
      <select value={props.selected?.name || ''} onChange={handleChange}>
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
