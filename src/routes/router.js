import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/AppContext'; // Caminho do arquivo AppContext.js
import ProtectedRoute from './ProtectedRoute'; // Caminho do arquivo ProtectedRoute.js
import Home from '../pages/Home';
import SignInSide from '../pages/SignIn';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Details from '../components/saf/Details'; // Importe o componente Details

function AppRouter() {
 return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/details/:id" element={<ProtectedRoute><Details /></ProtectedRoute>} /> {/* Adicione a rota para Details */}
        </Routes>
      </Router>
    </AppProvider>
 );
}

export default AppRouter;
