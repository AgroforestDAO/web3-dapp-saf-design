// PlaningView.js

import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getSaf, getCurrentUser } from '../services/firebaseService';

function PlaningView() {
  const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
  const timePeriods = ['0-6 meses', '6-18 meses', '2-10 anos', '10-30 anos'];
  const [savedData, setSavedData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const user = await getCurrentUser();
      const data = await getSaf(user.uid);
      setSavedData(data.species); // Atualizado para lidar com a estrutura de dados
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dados salvos:</h2>
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
                  <TableCell align="center" key={timePeriod}>
                    {savedData[stratumName] &&
                    savedData[stratumName][timePeriod] !== undefined
                      ? savedData[stratumName][timePeriod].map(species => species.name).join(', ')
                      : '-'}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PlaningView;
