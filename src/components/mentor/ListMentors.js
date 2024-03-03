import React, { useState, useEffect } from "react";
import {
 Typography,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogContentText,
 DialogTitle
} from "@mui/material";
import { getMentors, deleteMentor } from "../../services/firebaseService"; // Ajuste o caminho conforme necessário

const ListMentors = () => {
 const [mentors, setMentors] = useState([]);
 const [open, setOpen] = useState(false);
 const [selectedMentor, setSelectedMentor] = useState(null);

 useEffect(() => {
    const fetchMentors = async () => {
      const mentorsList = await getMentors();
      setMentors(mentorsList);
    };

    fetchMentors();
 }, [mentors]);

 const handleClickOpen = (mentor) => {
    setSelectedMentor(mentor);
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 const handleDelete = async () => {
    try {
      await deleteMentor(selectedMentor.id);
      console.log("Mentor excluído com sucesso!");
      // Recarregar a lista de mentores após a exclusão
      const updatedMentors = await getMentors();
      setMentors(updatedMentors);
    } catch (error) {
      console.error("Erro ao excluir mentor: ", error);
    } finally {
      handleClose();
    }
 };

 return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Mentores
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mentors.map((mentor) => (
              <TableRow key={mentor.id}>
                <TableCell>{mentor.name}</TableCell>
                <TableCell>{mentor.email}</TableCell>
                <TableCell align="right">
                 <Button color="error" variant="outlined" onClick={() => handleClickOpen(mentor)}>Remover</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja remover o mentor {selectedMentor && selectedMentor.name}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Sim, remover
          </Button>
        </DialogActions>
      </Dialog>
    </div>
 );
};

export default ListMentors;
