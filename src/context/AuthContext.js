// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { setCache, removeCache } from '../services/cacheService'; // Importe as funções de cache

const AuthContext = createContext();

export function AuthProvider({ children }) {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        // Armazena os dados do usuário no cache após o login
        setCache('currentUser', {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          uid: user.uid,
        });
        setUser({
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          uid: user.uid,
        });
      } else {
        // Limpa o cache do usuário ao fazer logout
        removeCache('currentUser');
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