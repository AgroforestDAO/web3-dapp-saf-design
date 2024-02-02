import React from 'react';
import { useSpecies } from '../context/SpeciesContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Dropdown({ selected = [], onSelect }) {
  const { speciesList = [] } = useSpecies();

  const handleChange = function(event, newValue) {
    onSelect(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="species-autocomplete"
      value={selected}
      onChange={handleChange}
      options={speciesList}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Select species" placeholder="Select..." />
      )}
    />
  );
}

export default Dropdown;
