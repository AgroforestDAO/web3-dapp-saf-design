import React, { createContext, useState, useContext } from 'react';
import speciesList from '../especies';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedSpecies, setSelectedSpecies] = useState({});
  const [user, setUser] = useState(null); // Adicione o estado do usuário aqui

  return (
    <AppContext.Provider value={{ speciesList, selectedSpecies, setSelectedSpecies, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
