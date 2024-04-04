import React, { createContext, useState, useEffect, useContext } from 'react';

const SpeciesContext = createContext();

export function SpeciesProvider({ children }) {
 const [species, setSpecies] = useState(null); 
 const [loading, setLoading] = useState(true);
 
 useEffect(() => {
  console.log("use effect");
 })
 
 return (
    <SpeciesContext.Provider value={{ species, setSpecies, loading }}>
      {children}
    </SpeciesContext.Provider>
 );
}

export function useSpeciesContext() {
 return useContext(SpeciesContext);
}
