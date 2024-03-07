import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { createFilterOptions } from "@mui/material/Autocomplete";

// Supondo que speciesData.js está no mesmo diretório que este arquivo
import speciesData from "../../especies"; // Ajuste o caminho conforme necessário

function Dropdown({ selected = [], onSelect, stratumName, succession }) {
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.name,
  });

  // Filtrando as espécies com base no estrato e na sucessão
  const filteredSpeciesList = useMemo(
    () =>
      speciesData.filter(
        (species) =>
          species.stratum === stratumName && species.succession === succession
      ),
    [stratumName, succession]
  );

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
          <Chip
            variant="outlined"
            label={option.name}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Selecione as espécies"
          placeholder="Selecionar..."
          style={{ width: "230px" }} // Define a largura fixa aqui
        />
      )}
    />
  );
}

export default Dropdown;
