import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase'; // Importe o auth do seu arquivo firebase.js
import Home from '../pages/Home'; // Importe o componente da página Home
import SignInSide from '../pages/SignIn'; // Importe o componente da página SignInSide

function AppRouter() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuth(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/home" /> : <SignInSide />} />
        <Route path="/home" element={!isAuth ? <Navigate to="/" /> : <Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
