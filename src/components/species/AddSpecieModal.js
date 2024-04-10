import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card, CardContent, Autocomplete } from '@mui/material';
import { addSpecie, getCurrentUser } from '../../services/firebaseService';


const AddSpecieModal = () => {
 const [open, setOpen] = useState(false);
 const [specie, setSpecie] = useState({
    name: '',
    stratum: [],    
    succession: [],
    productionCicle: '',
    createdByName: '',
    createdByEmail: '',
    createdByUID: '',    
 });


 const stratumOptions = ['EMERGENTE', 'ALTO', 'MÉDIO', 'BAIXO'];
 const successionOptions = ['PLACENTA I', 'PLACENTA II', 'PIONEIRAS', 'SECUNDÁRIAS', 'CLÍMAX'];
 
 const resetSpecieState = () => {
   setSpecie({
      name: '',
      stratum: [],    
      succession: [],
      productionCicle: '',
      createdByName: '', 
      createdByEmail: '',
      createdByUID: '',      
      createdByAddress: '',      
   });
 };

 const fetchCurrentUser = async () => {
  const user = await getCurrentUser(); // Função para obter o usuário atual
  setSpecie({ ...specie, createdByUID: user.uid, createdByAddress: user.walletAddress }); // Atualiza o UID do usuário atual
};
 
 const handleChange = (event) => {
   const value = event.target.value.toUpperCase();
    setSpecie({ ...specie, [event.target.name]: value, createdByUID: specie.createdByUID });
 };

 const handleClickOpen = () => {  
   resetSpecieState();
   fetchCurrentUser();
   setOpen(true);

 };

 const handleClose = () => {
 resetSpecieState();
 setOpen(false);
};

const handleSubmit = async (event) => {
  event.preventDefault();
  // Verifique se o usuário está autenticado
  const user = await getCurrentUser();
  if (!user) {
     console.error('Usuário não autenticado');
     // Trate o caso em que o usuário não está autenticado
     return;
  }
 
  // Concatena os valores de stratum em uma única string
  const stratumString = specie.stratum.join(', ');
  // Transforma as strings de succession em arrays
  const successionArray = specie.succession.map(item => item.trim());
  try {
       await addSpecie({ ...specie, stratum: stratumString, succession: successionArray });
       console.log('Espécie salva com sucesso');
       setOpen(false);
  } catch (error) {
       console.error('Erro ao salvar espécie:', error);
  }
 };

 return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Adicionar Espécie
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastro de Espécie</DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                 margin="dense"
                 label="Nome"
                 name="name"
                 value={specie.name}
                 onChange={handleChange}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 label="Ciclo de produção(em dias)"
                 name="productionCicle"
                 value={specie.productionCicle}
                 onChange={handleChange}
                 fullWidth
                 type='number'
                />
                <Autocomplete
                 multiple
                 options={stratumOptions}
                 getOptionLabel={(option) => option}
                 value={specie.stratum}
                 onChange={(event, newValue) => {
                    setSpecie({ ...specie, stratum: newValue });
                 }}
                 renderInput={(params) => (
                    <TextField {...params} label="Stratum" margin="dense" fullWidth />
                 )}
                />                
                <Autocomplete
                 multiple
                 options={successionOptions}
                 getOptionLabel={(option) => option}
                 value={specie.succession}
                 onChange={(event, newValue) => {
                    setSpecie({ ...specie, succession: newValue });
                 }}
                 renderInput={(params) => (
                    <TextField {...params} label="Succession" margin="dense" fullWidth />
                 )}
                />
                <DialogActions>
                 <Button onClick={handleClose} color="primary">
                    Cancelar
                 </Button>
                 <Button type="submit" color="primary">
                    Salvar
                 </Button>
                </DialogActions>
              </form>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
 );
};

export default AddSpecieModal;
