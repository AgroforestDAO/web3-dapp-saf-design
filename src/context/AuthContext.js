import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
 const [user, setUser] = useState(""); 
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
        setUser();
      }
      setLoading(false);
    });

    return () => unsubscribe();
 }, []);

 return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
 );
}

export function useAuthContext() {
 return useContext(AuthContext);
}
