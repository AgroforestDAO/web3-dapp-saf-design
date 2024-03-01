import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, Container, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Details() {
 const { id } = useParams(); // Acessa o ID do SAF a partir do parâmetro de rota
 const [safDetails, setSafDetails] = useState(null);
 const [loading, setLoading] = useState(true);

 const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
 const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos'];
 const [savedSpecies, setSavedSpecies] = useState({});

 useEffect(() => {
    const fetchSafDetails = async () => {
      try {
        const docRef = doc(db, 'safs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSafDetails(docSnap.data());
          setSavedSpecies(docSnap.data().species || {});
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do SAF:", error);
      } finally {
        setLoading(false); // Certifique-se de que o estado de carregamento seja atualizado para false após a busca
      }
    };

    fetchSafDetails();
 }, [id]); // Dependência do useEffect para re-executar ao mudar o ID

 if (loading) {
    return <div>Carregando detalhes do SAF...</div>;
 }

 return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h4" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Detalhes
        </Typography>   
        <Typography variant="h4" component="h4" gutterBottom style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          SAF: {safDetails.safName}
        </Typography>   
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Guardião: {safDetails.guardian}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Mentor: {safDetails.mentor}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Tipo: {safDetails.safType}
        </Typography>      
        <Typography variant="h5" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
          Local: {safDetails.local}
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
                    {savedSpecies[stratumName] &&
                    savedSpecies[stratumName][timePeriod] !== undefined
                      ? savedSpecies[stratumName][timePeriod].map(species => species.name).join(', ')
                      : '-'}
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
