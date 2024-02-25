// NewSaf.js

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function NewSaf() {
  const [safName, setSafName] = useState('');
  const [plantingArea, setPlantingArea] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome do SAF:', safName);
    console.log('Área de plantio:', plantingArea);
    console.log('Endereço:', address);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 20 }}>
      <Typography>Criar SAF</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="safName"
        label="Nome do SAF"
        name="safName"
        autoFocus
        value={safName}
        onChange={e => setSafName(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="plantingArea"
        label="Área de plantio"
        id="plantingArea"
        value={plantingArea}
        onChange={e => setPlantingArea(e.target.value)}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="address"
        label="Endereço"
        id="address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Salvar
      </Button>
    </Box>
  );
}

export default NewSaf;
