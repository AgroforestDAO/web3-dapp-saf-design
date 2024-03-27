import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Avatar } from '@mui/material';
import logo from '../assets/logo_agroforestDAO_round.png';
import { auth } from '../firebase'; // Importe o auth do firebase
import { useAuthContext } from '../context/AuthContext'; // Ajuste o caminho conforme necessário

const NavBar = () => {
 const navigate = useNavigate();
 const { user } = useAuthContext(); // Use o hook para obter o usuário atualmente logado

 const handleLogout = () => {
    auth.signOut() // Chame a função signOut do Firebase auth quando o botão for clicado
      .then(() => {
        console.log('Usuário deslogado');
      })
      .catch((error) => {
        console.error('Erro ao deslogar: ', error);
      });
 };

 const goToProfile = () => {
    navigate('/profile');
 };
  
 return (
    <AppBar style={{ backgroundColor: '#617c59' }}>
      <Toolbar>
        {/* Logo à esquerda */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={logo} alt="Logo" style={{ maxWidth: '130px', maxHeight: '60px' }} />
        </IconButton>
        <Typography variant="h6">
          SAF Design
        </Typography>

        {/* Espaço entre o título e os botões */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Exibir o avatar do usuário logado como um botão para a página de perfil */}
        {user && (
          <IconButton onClick={goToProfile} aria-label="Perfil">
            <Avatar alt={user.displayName} src={user.photoURL} sx={{ width: 32, height: 32, marginRight: 1 }} />
          </IconButton>
        )}

        {/* Botão para sair */}
        <Button color="inherit" onClick={handleLogout}>Sair</Button>
      </Toolbar>
    </AppBar>
 );
};

export default NavBar;
