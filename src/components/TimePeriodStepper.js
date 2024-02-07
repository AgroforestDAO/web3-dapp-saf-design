import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const timePeriods = ['Placenta', 'Pioneiras', 'Secundarias I, II e III', 'Primarias'];

export default function TimePeriodStepper() {
  return (
    <Box sx={{ width: '100%', color: 'darkgreen' }}>
      <Stepper alternativeLabel>
        {timePeriods.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconProps={{ style: { color: '#617c59' } }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
