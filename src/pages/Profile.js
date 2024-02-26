import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { db } from "../firebase";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { useAppContext } from "../context/AppContext";
import styled from "@emotion/styled";

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
  const { user } = useAppContext();
  const [displayName, setDisplayName] = useState(user ? user.displayName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [photoURL, setPhotoURL] = useState(user ? user.photoURL : "");
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : "");

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            setDisplayName(data.displayName);
            setEmail(data.email);
            setPhotoURL(data.photoURL);
            setPhoneNumber(data.phoneNumber);
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

  const handleSave = async () => {    
    await addDoc(collection(db, "users"), {
      displayName: displayName,
      email: email,
      phoneNumber: phoneNumber,
    })
      .then((docRef) => {
        console.log("Usuário escrito com ID: ", docRef.id);
    })
      .catch((error) => {
        alert(error.message);
      });
    setDisplayName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <>
      <NavBar />
      <ProfileContainer>
        <Card elevation={4} style={{ marginTop: "63px" }}>
          <CardContent>
            <Typography variant="h4" gutterBottom style={{ color: "black" }}>
              Perfil
            </Typography>
            {user && photoURL ? (
              <ProfileAvatar src={photoURL} />
            ) : (
              <ProfileAvatar />
            )}
            <Typography variant="h5" style={{ color: "black" }}>
              {displayName}
            </Typography>
            <Typography variant="body1" style={{ color: "black" }}>
              Email: {email}
            </Typography>
            <Typography variant="body1" style={{ color: "black" }}>
              Telefone: {phoneNumber}
            </Typography>
            {isEditing ? (
              <Grid container spacing={3} style={{ marginTop: "63px" }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Nome"
                    fullWidth
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Telefone"
                    fullWidth
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={handleSave}>
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Button
                startIcon={<EditIcon />}
                onClick={handleEdit}
                style={{ marginTop: "20px" }}
              >
                Editar
              </Button>
            )}
          </CardContent>
        </Card>
      </ProfileContainer>
    </>
  );
};

export default Profile;
