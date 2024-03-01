import React from 'react';
import { useAppContext } from '../../context/AuthContext';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

function Dropdown({ selected = [], onSelect, stratumName }) {
  const { speciesList = [] } = useAppContext();

  const handleChange = function(event, newValue) {
    onSelect(newValue);
  };
  
  // Filtra as espécies com o estrato especificado
  const filteredSpeciesList = speciesList.filter(species => species.stratum === stratumName);

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
