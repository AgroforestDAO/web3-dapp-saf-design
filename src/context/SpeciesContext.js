import React, { createContext, useState, useContext } from 'react';
import speciesList from '../especies';

const SpeciesContext = createContext();

export function SpeciesProvider({ children }) {
  const [selectedSpecies, setSelectedSpecies] = useState({});
  
  return (
    <SpeciesContext.Provider value={{ speciesList, selectedSpecies, setSelectedSpecies }}>
      {children}
    </SpeciesContext.Provider>
  );
}

export function useSpecies() {
  return useContext(SpeciesContext);
}
