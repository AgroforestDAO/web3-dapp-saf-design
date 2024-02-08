import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { Avatar, Button, TextField } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import styled from '@emotion/styled';
import '@fontsource/roboto';
import { useAppContext } from '../context/AppContext'; // Importe o useAppContext

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Profile = () => {
  const { user, setUser } = useAppContext(); // Use o useAppContext para obter o usuário
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user ? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : '');

  useEffect(() => {
    if (user) {
      const docRef = doc(db, 'users', user.uid); // Crie uma referência para o documento
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
      setUser({ ...user, displayName, email }); // Atualize o usuário no contexto após salvar no banco de dados
    });
    setIsEditing(false);
  };

  return (
    <ProfileContainer>
      <h1 style={{ color: 'black' }}>Perfil</h1>
      {user && photoURL ? <ProfileAvatar src={photoURL} /> : <ProfileAvatar />}
        <h1 style={{ color: 'black' }}>{displayName}</h1>
        <p style={{ color: 'black' }}>Email: {email}</p>
      {isEditing ? (
        <>
          <TextField label="Nome" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button onClick={handleSave}>Salvar</Button>
        </>
      ) : (
        <Button startIcon={<EditIcon />} onClick={handleEdit}>
          Editar
        </Button>
      )}
    </ProfileContainer>
  );
};

export default Profile;
