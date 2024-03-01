import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, Container, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function Details({saf}) {
 const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
 const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos'];
  
 const [savedSpecies, setSavedSpecies] = useState([]);
  
 useEffect(() => {
    if(saf){
      setSavedSpecies(saf.species || []); // Inicializa corretamente o estado com os dados de species
    }
 }, [saf]);

 return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Detalhes
        </Typography>   
        <Typography variant="h4" component="h4" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          SAF: {saf.safName}
        </Typography>   
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Guardião: {saf.guardian}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Mentor: {saf.mentor}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Tipo: {saf.safType}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Local: {saf.local}
        </Typography>      
        <Typography variant="h5" component="h5" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold', marginTop: '33px' }}>
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
                      {/* Aqui você precisa ajustar a lógica de acesso aos dados com base na estrutura correta de savedSpecies */}
                      {/* Exemplo genérico, ajuste conforme necessário */}
                      {savedSpecies.length > 0 ? savedSpecies.map(species => species.name).join(', ') : ''}
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
