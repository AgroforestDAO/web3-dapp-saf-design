import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import Home from '../pages/Home';
import SignInSide from '../pages/SignIn';
import Profile from "../pages/Profile";
import Dashboard from '../pages/Dashboard';

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
        <Route path="/profile" element={!isAuth ? <Navigate to="/" /> : <Profile />} />
        <Route path="/dashboard" element={!isAuth ? <Navigate to="/" /> : <Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default AppRouter;
