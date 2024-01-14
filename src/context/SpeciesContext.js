// SpeciesContext.js
import React, { createContext, useContext, useState } from 'react';

export const SpeciesContext = createContext();

export function SpeciesProvider({ children }) {
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  return (
    <SpeciesContext.Provider value={{ selectedSpecies, setSelectedSpecies }}>
      {children}
    </SpeciesContext.Provider>
  )
}

export function useSpecies() {
  return useContext(SpeciesContext);
}