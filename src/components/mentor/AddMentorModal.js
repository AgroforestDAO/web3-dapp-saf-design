import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card, CardContent } from '@mui/material';
import { addMentor, getCurrentUser } from '../../services/firebaseService'; // Certifique-se de ajustar o caminho conforme necessário

const AddMentorModal = () => {
 const [open, setOpen] = useState(false);
 const [mentor, setMentor] = useState({
    name: '',
    email: '',
    createdByUID: '', // Este campo precisa ser definido com um valor válido
    createdByName: '', // Ajuste conforme necessário
    createdByEmail: '', // Ajuste conforme necessário
    createdAt: new Date(),
    updatedAt: new Date(),
 });

 // Supondo que você tenha uma função para obter o UID do usuário atual
 const fetchCurrentUser = async () => {
    const _user = await getCurrentUser(); // Função para obter o usuário atual
    setMentor({ ...mentor, createdByUID: _user.uid }); // Atualiza o UID do usuário atual
 };

 const handleChange = (event) => {
    setMentor({ ...mentor, [event.target.name]: event.target.value });
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
    try {
      await addMentor(mentor);
      console.log('Mentor salvo com sucesso');
      setOpen(false);
    } catch (error) {
      console.error('Erro ao salvar mentor:', error);
    }
 };

 return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Adicionar Mentor
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastro de Mentor</DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                 margin="dense"
                 label="Nome"
                 name="name"
                 value={mentor.name}
                 onChange={handleChange}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 label="Email"
                 name="email"
                 value={mentor.email}
                 onChange={handleChange}
                 fullWidth
                />
                {/* Adicione campos adicionais conforme necessário */}
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

export default AddMentorModal;
