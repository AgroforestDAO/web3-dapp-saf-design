import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card, CardContent, Autocomplete } from '@mui/material';
import { addSeeds, getCurrentUser } from '../../services/firebaseService'; // Certifique-se de ajustar o caminho conforme necessário

const AddSeedsModal = () => {
 const [open, setOpen] = useState(false);
 const [specie, setSpecie] = useState({
    name: '',
    stratum: [],   
    succession: [],
    createdByName: '',
    createdByEmail: '',
    ownerWallet: '', 
    createdAt: new Date(),
    updatedAt: new Date(),
 });

 const stratumOptions = ['EMERGENTE', 'ALTO', 'MÉDIO', 'BAIXO'];
 const successionOptions = ['PLACENTA I', 'PLACENTA II', 'PIONEIRAS', 'SECUNDÁRIAS', 'CLÍMAX'];

 const fetchCurrentUser = async () => {
    const _user = await getCurrentUser(); // Função para obter o usuário atual
    setSpecie({ ...specie, createdByUID: _user.uid, ownerWallet: _user.ownerWallet });
 };

 const handleChange = (event) => {
    setSpecie({ ...specie, [event.target.name]: event.target.value });
 };

 const handleClickOpen = () => {
    setOpen(true);
    fetchCurrentUser(); // Atualiza o UID do usuário atual antes de abrir o modal
 };

 const handleClose = () => {
    setOpen(false);
 };

 const handleSubmit = async (event) => {
 event.preventDefault();
 // Concatena os valores de stratum em uma única string
 const stratumString = specie.stratum.join(', ');
 // Transforma as strings de succession em arrays
 const successionArray = specie.succession.map(item => item.trim());
 try {
   const payload = { stratum: stratumString, succession: successionArray, ownerWallet: specie.ownerWallet }

     await addSeeds(payload);
     console.log('Espécie salva com sucesso');
     setOpen(false);
 } catch (error) {
     console.error('Erro ao salvar espécie:', error);
 }
 };

 useEffect(() => {
    setSpecie({ ...specie, name: specie.name });
 }, []);

 return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Adicionar Semente
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastro de Sementes</DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                 margin="dense"
                 label="Nome"
                 name="name"
                 value={specie.name.toUpperCase()}
                 onChange={handleChange}
                 fullWidth
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
                    <TextField {...params} label="Estrato" margin="dense" fullWidth />
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
                    <TextField {...params} label="Sucessão" margin="dense" fullWidth />
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

export default AddSeedsModal;
