import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import logo from '../assets/logo_agroforestDAO_round.png';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#617c59' }}>
      <Toolbar>
        {/* Logo à esquerda */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <img src={logo} alt="Logo" style={{ maxWidth: '130px', maxHeight: '60px' }} />
        </IconButton>
        <Typography variant="h6">
          AgroforestDAO
        </Typography>

        {/* Links à direita */}
        {/* <Button color="inherit">Link 1</Button>
        <Button color="inherit">Link 2</Button>
        <Button color="inherit">Link 3</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
