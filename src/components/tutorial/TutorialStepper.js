import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Stepper, Step, StepLabel, Button } from '@mui/material';
import TutorialCard from './TutorialCard';
import image1 from "../../assets/Tempo.jpeg";

const steps = ['Passo 1', 'Passo 2', 'Passo 3']; // Defina os passos do seu tutorial aqui

const TutorialStepper = () => {
 const [activeStep, setActiveStep] = useState(0);
 const [open, setOpen] = useState(true);

 const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
 };

 const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };

 const handleClose = () => {
    setOpen(false);
 };

 return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tutorial</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {/* Aqui você pode adicionar o conteúdo do modal, como um card com imagem e texto */}
        <TutorialCard imageUrl={image1} text={"Um pouco de informação..."}/>
        <div>
          {activeStep === 0 && <p>Introdução - Passo 1</p>}
          {activeStep === 1 && <p>Conteúdo do Passo 2</p>}
          {activeStep === 2 && <p>Conteúdo do Passo 3</p>}
        </div>
        <div>
          {activeStep !== 0 && (
            <Button onClick={handleBack} color="primary">
              Voltar
            </Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button onClick={handleNext} color="primary">
              Próximo
            </Button>
          ) : (
            <Button onClick={handleClose} color="primary">
              Finalizar
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
 );
};

export default TutorialStepper;
