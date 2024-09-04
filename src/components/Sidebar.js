// Sidebar.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home as HomeIcon, Settings as SettingsIcon, Photo } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { getCurrentUser } from "../services/firebaseService";

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser && currentUser.isAdmin) {
        setIsAdmin(true);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      height: '100%', 
      width: '250px',
      marginTop: 0,
      backgroundColor: '#4A634F',
      paddingTop: '60px',
    }}>
      <List style={{ paddingTop: '42px' }}>
        <ListItem button component={Link} to="/home" style={{ color: 'white' }}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Meus SAFs" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem button component={Link} to="/all-safs" style={{ color: 'white' }}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Todos os SAFs" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        <ListItem button component={Link} to="/add-saf" style={{ color: 'white' }}>
          <ListItemIcon>
            <AddIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Novo SAF" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        
        {/* Renderiza o item Admin apenas se isAdmin for true */}
        {isAdmin && (
          <ListItem button component={Link} to="/admin" style={{ color: 'white' }}>
            <ListItemIcon>
              <SettingsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Admin" primaryTypographyProps={{ style: { color: 'white' } }} />
          </ListItem>
        )}

        <ListItem button component={Link} to="/nfts" style={{ color: 'white' }}>
          <ListItemIcon>
            <Photo style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="NFTs" primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
