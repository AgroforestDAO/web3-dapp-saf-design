// router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import SignInSide from '../pages/SignIn';
import Profile from '../pages/Profile';
import Details from '../components/saf/Details';
import AddSaf from "../components/saf/AddSaf";
import Admin from "../pages/Admin";
import AllSafs from '../pages/AllSafs';

function AppRouter() {
 return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/all-safs" element={<ProtectedRoute><AllSafs /></ProtectedRoute>} />
          <Route path="/add-saf" element={<ProtectedRoute><AddSaf /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/details/:id" element={<ProtectedRoute><Details /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
 );
}

export default AppRouter;
