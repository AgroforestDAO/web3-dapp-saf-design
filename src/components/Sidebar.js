// Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home as HomeIcon, Settings as SettingsIcon } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 return (
    <div style={{ 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      height: '100%', 
      width: '250px', // Aumenta a largura
      marginTop: 0, // Remove a margem superior
      backgroundColor: '#4A634F', // Torna a cor um pouco mais escura
      paddingTop: '60px', // Ajusta o padding superior para manter o conteúdo centralizado verticalmente
    }}>
      <List style={{ paddingTop: '42px' }}>
        <ListItem button component={Link} to="/home" style={{ color: 'white' }}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="My Safs" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem button component={Link} to="/all-safs" style={{ color: 'white' }}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="All Safs" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem button component={Link} to="/all-safs" style={{ color: 'white' }}>
          <ListItemIcon>
            <AddIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Novo SAF" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem button component={Link} to="/admin" style={{ color: 'white' }}>
          <ListItemIcon>
            <SettingsIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Admin" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
    </div>
 );
};

export default Sidebar;
