import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const successions = ["Placenta I(0-6 meses)", "Placenta II(6-18 meses)", "Pioneiras(2-10 anos)", "Secundárias(10-30 anos)", "Clímax(30-100 anos)"];

export default function TimePeriodStepper() {
  return (
    <Box sx={{ width: '100%', color: 'darkgreen' }}>
      <Stepper alternativeLabel>
        {successions.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconProps={{ style: { color: '#617c59' } }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
