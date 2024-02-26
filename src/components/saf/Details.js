import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, Container, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { getSaf, getCurrentUser } from '../../services/firebaseService';

function Details() {
  const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos'];
  const [savedData, setSavedData] = useState([]);
  const [savedSpecies, setSavedSpecies] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      const data = await getSaf(user.uid);
      setSavedSpecies(data ? data.species : {});
      setSavedData(data ? data : {}); // Atualizado para lidar com a estrutura de dados
    }
    fetchData();
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
        Meu SAF
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto' }}>
        Nome: {savedData.safName}
      </Typography>      
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto' }}>
        Guardião: {savedData.guardian}
      </Typography>      
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto' }}>
        Mentor: {savedData.mentor}
      </Typography>      
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto' }}>
        Tipo de SAF: {savedData.safType}
      </Typography>      
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto' }}>
        Local: {savedData.local}
      </Typography>      
      <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
        Planejamento geral
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>ESTRATO / Sucessão</TableCell>
              {timePeriods.map((timePeriod) => (
                <TableCell align="center" style={{ fontWeight: 'bold' }} key={timePeriod}>{timePeriod}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stratumNames.map((stratumName) => (
              <TableRow key={stratumName}>
                <TableCell align="center" style={{ fontWeight: 'bold' }}>{stratumName}</TableCell>
                {timePeriods.map((timePeriod) => (
                  <TableCell align="center" key={timePeriod}>
                    {savedSpecies[stratumName] && savedSpecies[stratumName][timePeriod]
                      ? savedSpecies[stratumName][timePeriod].map(species => species.name).join(', ')
                      : ''}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
    </div>
  );
}

export default Details;
