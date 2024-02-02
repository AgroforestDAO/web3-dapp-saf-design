import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function PlaningView({ savedData, stratumNames, timePeriods }) {
  return (
    <div>
      <h2>Dados salvos:</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {timePeriods.map((timePeriod) => (
                <TableCell key={timePeriod}>{timePeriod}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stratumNames.map((stratumName) => (
              <TableRow key={stratumName}>
                <TableCell>{stratumName}</TableCell>
                {timePeriods.map((timePeriod) => (
                  <TableCell key={timePeriod}>
                    {savedData[stratumName] &&
                    savedData[stratumName][timePeriod] !== undefined
                      ? savedData[stratumName][timePeriod].map(species => species.name).join(', ') // Ajuste para a propriedade que deseja exibir
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
