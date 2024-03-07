import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card, CardContent } from '@mui/material';
import { addSpecie, getCurrentUser } from '../services/firebaseService'; // Certifique-se de ajustar o caminho conforme necessário

const AddSpecieModal = () => {
 const [open, setOpen] = useState(false);
 const [specie, setSpecie] = useState({
    name: '',
    stratum: '',
    occupied_space: '',
    succession: '',   
    createdByName: '', // Ajuste conforme necessário
    createdByEmail: '', // Ajuste conforme necessário
    createdAt: new Date(),
    updatedAt: new Date(),
 });

 // Supondo que você tenha uma função para obter o UID do usuário atual
 const fetchCurrentUser = async () => {
    const _user = await getCurrentUser(); // Função para obter o usuário atual
    setSpecie({ ...specie, createdByUID: _user.uid }); // Atualiza o UID do usuário atual
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
  // Transforma a string de succession em um array
  const successionArray = specie.succession.split(',').map(item => item.trim());
  try {
     await addSpecie({ ...specie, succession: successionArray });
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
                 label="Stratum"
                 name="stratum"
                 value={specie.stratum}
                 onChange={handleChange}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 label="Espaço Ocupado"
                 name="occupied_space"
                 value={specie.occupied_space}
                 onChange={handleChange}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 label="Sucessão"
                 name="succession"
                 value={specie.succession}
                 onChange={handleChange}
                 fullWidth
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
