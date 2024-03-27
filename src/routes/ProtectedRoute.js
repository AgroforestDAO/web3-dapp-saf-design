// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'; 
import Sidebar from '../components/Sidebar';
import Navbar from "../components/Navbar";

const ProtectedRoute = ({ children }) => {
 const { user, loading } = useAuthContext();

 if (loading) {
    return <div>Carregando...</div>; // Pode ser substituído por um componente de carregamento personalizado
 }

 if (!user) {
    return <Navigate to="/" />; // Redireciona para a página de login
 }

 return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Navbar style={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 1 }} />
      <Sidebar style={{ width: '250px', position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 0 }} />
      <div style={{ flexGrow: 1, marginLeft: '250px' }}>
        {children}
      </div>
    </div>
 );
};

export default ProtectedRoute;
