import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import speciesList from '../especies'; // Certifique-se de que este caminho esteja correto

const AppContext = createContext();

export function AppProvider({ children }) {
 const [user, setUser] = useState(null);
 const [selectedSpecies, setSelectedSpecies] = useState({});
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
 }, []);

 return (
    <AppContext.Provider value={{ speciesList, selectedSpecies, setSelectedSpecies, user, setUser, loading }}>
      {children}
    </AppContext.Provider>
 );
}

export function useAppContext() {
 return useContext(AppContext);
}
