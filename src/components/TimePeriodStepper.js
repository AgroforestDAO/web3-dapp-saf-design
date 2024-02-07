import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
//import styles from '../styles/styles';

const timePeriods = ['Placenta', 'Pioneiras', 'Secundarias I, II e III', 'Primarias'];

export default function TimePeriodStepper() {
  return (
    <Box sx={{ width: '100%', color: 'darkgreen' }}>
      <Stepper alternativeLabel>
        {timePeriods.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
