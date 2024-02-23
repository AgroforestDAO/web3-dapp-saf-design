import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { Avatar, Button, TextField, Typography, Container, Grid } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';
import styled from '@emotion/styled';

const ProfileContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 20px;
  }
`;

const ProfileAvatar = styled(Avatar)`
  && {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const Profile = () => {
  const { user, setUser } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '');

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setDisplayName(data.displayName);
            setEmail(data.email);
            setPhotoURL(data.photoURL);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário: ", error);
        });
    }
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const docRef = db.collection('users').doc(user.uid);
    docRef.update({
      displayName,
      email,
    }).then(() => {
      setUser({ ...user, displayName, email });
    });
    setIsEditing(false);
  };

  return (
    <>
      <NavBar />
      <ProfileContainer>
        <Typography variant="h4" gutterBottom style={{ color: 'black' }}>Perfil</Typography>
        {user && photoURL ? <ProfileAvatar src={photoURL} /> : <ProfileAvatar />}
        <Typography variant="h5" style={{ color: 'black' }}>{displayName}</Typography>
        <Typography variant="body1" style={{ color: 'black' }}>Email: {email}</Typography>
        {isEditing ? (
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField label="Nome" fullWidth value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleSave}>Salvar</Button>
            </Grid>
          </Grid>
        ) : (
          <Button startIcon={<EditIcon />} onClick={handleEdit} style={{ marginTop: '20px' }}>Editar</Button>
        )}
      </ProfileContainer>
    </>
  );
};

export default Profile;
