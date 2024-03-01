// ListSafs.js
import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { getCurrentUser } from '../../services/firebaseService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ListSafs = () => {
  const [safs, setSafs] = useState([]);
  const navigate = useNavigate(); // Utilização do useNavigate
 
  useEffect(() => {
     const fetchSafs = async () => {
       try {
         const currentUser = await getCurrentUser();
         const safsRef = collection(db, 'safs');
         const q = query(safsRef, where('uid', '==', currentUser.uid));
         
         const querySnapshot = await getDocs(q);
         const safsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
         setSafs(safsData);
       } catch (error) {
         console.error("Erro ao buscar SAFs:", error);
       }
     };
   
     fetchSafs();
  }, []);
 
  return (
     <div style={{ marginTop:"81px", padding:"10px"}}>
       <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
         Meus SAF´s
       </Typography>
       {safs.map((saf) => (
         <Box 
         component={Card} 
         key={saf.id}
         sx={{ marginBottom: "15px", width: "600px", cursor: "pointer", transition: "0.3s", '&:hover': { transform: "scale(1.02)", backgroundColor: "#C3E3B9" } }} 
         onClick={() => {
           console.log("SAF selecionado:", saf);
           navigate(`/details/${saf.id}`); // Navegação programática para a página de detalhes
          }}
         >
           <CardContent>
             <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
               {saf.safName}
             </Typography>
             <Typography color="text.secondary" style={{ fontFamily: "Roboto" }}>
               Mentor: {saf.mentor}
             </Typography>
           </CardContent>
         </Box>
       ))}
     </div>
  );
 };
 
 export default ListSafs;
