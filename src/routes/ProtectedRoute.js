// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext'; // Caminho do arquivo AppContext.js

const ProtectedRoute = ({ children }) => {
 const { user, loading } = useAppContext();

 if (loading) {
    return <div>Carregando...</div>; // Pode ser substituído por um componente de carregamento personalizado
 }

 if (!user) {
    return <Navigate to="/" />; // Redireciona para a página de login
 }

 return children;
};

export default ProtectedRoute;