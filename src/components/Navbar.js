import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@mui/material';
import logo from '../assets/logo_agroforestDAO_round.png';
import { auth } from '../firebase'; // Importe o auth do firebase

const NavBar = () => {
  const navigate = useNavigate();

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
          AgroforestDAO
        </Typography>

        {/* Espaço entre o título e os botões */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Links à direita */}
             
        <Button color="inherit" onClick={goToProfile}>Perfil</Button>
        <Button color="inherit" onClick={handleLogout}>Sair</Button>
        {/* <Button color="inherit">Link 2</Button>
        <Button color="inherit">Link 3</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
