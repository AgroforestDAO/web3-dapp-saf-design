import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { TextField, Button } from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
import NavBar from "../components/Navbar";
import { Container, Card, CardContent, Typography, Avatar } from "@mui/material";
import styled from "@emotion/styled";
import { getCache, setCache } from '../services/cacheService';

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
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
 }
`;

const Profile = () => {
  const { user } = useAuthContext();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
 
  useEffect(() => {
     if (user) {
       const cacheKey = `userProfile_${user.uid}`; // Chave de cache específica para o usuário
       const cachedProfile = getCache(cacheKey);
       if (cachedProfile) {
         setDisplayName(cachedProfile.displayName);
         setEmail(cachedProfile.email);
         setPhotoURL(cachedProfile.photoURL);
         setPhoneNumber(cachedProfile.phoneNumber);
         setTelegramUsername(cachedProfile.telegramUsername || "");
         setWalletAddress(cachedProfile.walletAddress || "");
       } else {
         const docRef = doc(db, "users", user.uid);
         getDoc(docRef)
           .then((docSnapshot) => {
             if (docSnapshot.exists()) {
               const data = docSnapshot.data();
               setDisplayName(data.displayName);
               setEmail(data.email);
               setPhotoURL(data.photoURL);
               setPhoneNumber(data.phoneNumber);
               setTelegramUsername(data.telegramUsername || "");
               setWalletAddress(data.walletAddress || "");
               // Armazena os dados do perfil no cache
               setCache(cacheKey, data);
             }
           })
           .catch((error) => {
             console.error("Erro ao buscar dados do usuário: ", error);
           });
       }
     }
  }, [user]);

  const updateProfile = async () => {
    try {
       const docRef = doc(db, "users", user.uid);
       await updateDoc(docRef, {
         displayName,
         email,
         phoneNumber,
         telegramUsername,
         walletAddress
       });
       alert('Perfil atualizado com sucesso!');
       // Limpa o cache do perfil do usuário após a atualização
      //  removeCache(`userProfile_${user.uid}`);
    } catch (error) {
       console.error('Erro ao atualizar o perfil:', error);
       alert('Ocorreu um erro ao atualizar o perfil. Por favor, tente novamente.');
    }
   };

 return (
    <>
      <NavBar />
      <ProfileContainer>
        <Card elevation={4} style={{ marginTop: "63px", width:"400px" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ color: "black" }}>
              Perfil
            </Typography>
            {photoURL ? (
              <ProfileAvatar src={photoURL} />
            ) : (
              <ProfileAvatar />
            )}
            <Typography variant="h5" style={{ color: "black" }}>
              {displayName}
            </Typography>
            <TextField
              label="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              variant="outlined"
              style={{ marginTop: 16, width: '100%' }}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              style={{ marginTop: 16, width: '100%' }}
            />
            <TextField
              label="Telefone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
              style={{ marginTop: 16, width: '100%' }}
            />
            <TextField
              label="Telegram Username"
              value={telegramUsername}
              onChange={(e) => setTelegramUsername(e.target.value)}
              variant="outlined"
              style={{ marginTop: 16, width: '100%' }}
            />
            <TextField
              label="Wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              variant="outlined"
              style={{ marginTop: 16, width: '100%' }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={updateProfile}
              style={{ marginTop: 16 }}
            >
              Atualizar Perfil
            </Button>
          </CardContent>
        </Card>
      </ProfileContainer>
    </>
 );
};

export default Profile;
