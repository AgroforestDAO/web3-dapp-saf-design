import React, { useState, useMemo } from "react";
import { useAppContext } from "../../context/AuthContext";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { createFilterOptions } from '@mui/material/Autocomplete';

function Dropdown({ selected = [], onSelect, stratumName }) {
 const { speciesList = [] } = useAppContext();

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

 // Filtra as espécies com o estrato especificado
 const filteredSpeciesList = useMemo(() => speciesList.filter(species => species.stratum === stratumName), [speciesList, stratumName]);

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
