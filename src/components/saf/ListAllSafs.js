import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAllSafs } from '../../services/firebaseService';

function ListAllSafs() {
 const [safs, setSafs] = useState([]);
 const navigate = useNavigate(); // Utilização do useNavigate

 useEffect(() => {
    const fetchSafs = async () => {
      const allSafs = await getAllSafs();
      setSafs(allSafs);
    };

    fetchSafs();
 }, []);

 return (
    <div style={{ marginTop: "81px", padding: "10px" }}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Todos os SAFs
      </Typography>
      <Grid container spacing={2}>
        {safs.map((saf) => (
          <Grid item xs={12} sm={6} md={4} key={saf.id}>
            <Box
              component={Card}
              sx={{
                marginBottom: "15px",
                width: "100%",
                cursor: "pointer",
                transition: "0.3s",
                '&:hover': { transform: "scale(1.02)", backgroundColor: "#C3E3B9" },
              }}
              onClick={() => {
                navigate(`/details/${saf.id}`); // Navegação programática para a página de detalhes
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
                 {saf.safName}
                </Typography>
                <Typography color="text.secondary" style={{ fontFamily: "Roboto" }}>
                 Criado por: {saf.createdByName}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
 );
}

export default ListAllSafs;
