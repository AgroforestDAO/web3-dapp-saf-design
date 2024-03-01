import React, { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { createFilterOptions } from '@mui/material/Autocomplete';

// Supondo que speciesData.js está no mesmo diretório que este arquivo
import speciesData from '../../especies'; // Ajuste o caminho conforme necessário

function Dropdown({ selected = [], onSelect, stratumName }) {
 // Removido o uso do contexto
 const [inputValue, setInputValue] = useState('');
 const [chips, setChips] = useState([]);

 const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
 };

 const handleKeyDown = ({ key }) => {
    if (key === 'Enter') {
      setChips([...chips, inputValue]);
      setInputValue('');
    }
 };

 const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
 });

 // Usando os dados importados diretamente
 const filteredSpeciesList = useMemo(() => speciesData.filter(species => species.stratum === stratumName), [stratumName]);

 const handleChange = (event, newValue) => {
    onSelect(newValue);
 };

 return (
    <Autocomplete
      multiple
      id="species-autocomplete"
      value={selected}
      onChange={handleChange}
      options={filteredSpeciesList}
      filterOptions={filterOptions}
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
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      )}
    />
 );
}

export default Dropdown;
