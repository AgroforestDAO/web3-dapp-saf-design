import React from 'react';
import { useSpecies } from '../context/SpeciesContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

function Dropdown({ selected = [], onSelect, stratumName }) {
  const { speciesList = [] } = useSpecies();

  const handleChange = function(event, newValue) {
    onSelect(newValue);
  };
  
  // Filtra as espécies com stratum igual a "ALTO"
  const filteredSpeciesList = speciesList.filter(species => species.stratum === "ALTO");

  return (
    <Autocomplete
      multiple
      id="species-autocomplete"
      value={selected}
      onChange={handleChange}
      options={filteredSpeciesList}
      getOptionLabel={(option) => option.name}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Selecione as espécies" 
          placeholder="Selecionar..." 
          style={{ width: '230px' }} // Define a largura fixa aqui
        />
      )}
    />
  );
}

export default Dropdown;
