import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../basic/Dropdown';
import TimePeriodStepper from './TimePeriodStepper'; // Importe o componente Stepper aqui
import { AppProvider } from '../../context/AppContext';
import image from '../../assets/Tempo.jpeg';
import { Box, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { addSaf } from '../../services/firebaseService';
import { getCurrentUser } from '../../services/firebaseService';


function SafPlaning() {
  const navigate = useNavigate();
  const [selectedSpecies, setSelectedSpecies] = useState({});
  
  const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos'];

  function handleSpeciesSelection(stratumName, timePeriod, species) {
    setSelectedSpecies((prev) => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species,
      },
    }));
  }

  async function handleSave() {
    const _user = await getCurrentUser();
    let payload = {
      uid: _user.uid,
      species: selectedSpecies
    }
    console.log(_user.uid); 
    setSelectedSpecies(selectedSpecies);

    await addSaf(payload);
    navigate('/dashboard');
  }  

  return (
    <AppProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom style={{ fontFamily: 'Roboto' }}>
            Planejamento de SAF
          </Typography>
          {/* Inclua o componente Stepper aqui */}
          <img src={image} alt="Descrição da imagem" style={{ width: '100%' }}  />
          <TimePeriodStepper /> 
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
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
                      <TableCell key={timePeriod}>
                        <Dropdown
                          selected={
                            selectedSpecies[stratumName]
                              ? selectedSpecies[stratumName][timePeriod]
                              : []
                          }
                          onSelect={(species) =>
                            handleSpeciesSelection(stratumName, timePeriod, species)
                          }
                          stratumName={stratumName}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box my={4} display="flex" justifyContent="center">
            <Button variant="contained" style={{ backgroundColor: '#617c59' }} onClick={handleSave}>
              Salvar
            </Button>
          </Box>
        </Box>
      </Container>
    </AppProvider>
  );
}

export default SafPlaning;