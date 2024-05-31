import React, { useMemo, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { createFilterOptions } from "@mui/material/Autocomplete";

//import speciesData from "../../especies";
import { getSpecies } from "../../services/firebaseService"; // Ajuste o caminho conforme necessário

function Dropdown({ selected = [], onSelect, stratumName, succession }) {
 const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.name,
 });

 const [combinedSpeciesList, setCombinedSpeciesList] = useState([]);

 useEffect(() => {
    const fetchSpecies = async () => {
      const remoteSpecies = await getSpecies(); // Supondo que getSpecies retorna uma lista de espécies
      // // Combinando os dados locais com os remotos
      // const combined = [ ...remoteSpecies];
      setCombinedSpeciesList(remoteSpecies);
    };

    fetchSpecies();
 }, []);

 const filteredSpeciesList = useMemo(
    () =>
      combinedSpeciesList.filter(
        (species) =>
          species.stratum === stratumName && species.succession.includes(succession)
      ),
    [combinedSpeciesList, stratumName, succession]
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
