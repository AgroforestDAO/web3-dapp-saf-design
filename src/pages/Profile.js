import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import {
 Avatar,
 Typography,
 Container, 
 Card,
 CardContent,
} from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
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
            <Typography variant="body1" style={{ color: "black" }}>
              Email: {email}
            </Typography>
            <Typography variant="body1" style={{ color: "black" }}>
              Telefone: {phoneNumber}
            </Typography>
          </CardContent>
        </Card>
      </ProfileContainer>
    </>
 );
};

export default Profile;
