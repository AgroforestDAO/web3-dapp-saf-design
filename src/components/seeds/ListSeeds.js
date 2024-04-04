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
import { getSeeds,
//  updateSeeds,
//  deleteSeeds
} from "../../services/firebaseService";

const ListSeeds = () => {
 const [seeds, setSeeds] = useState([]);
 const [open, setOpen] = useState(false);
 const [selectedSeeds, setSelectedSeeds] = useState(null);

//  useEffect(() => {
//     const fetchSeeds = async () => {
//       const seedsList = await getSeeds();
//       setSeeds(seedsList);
//     };

//     fetchSeeds();
//  }, []);

 const handleClickOpen = (seed) => {
    setSelectedSeeds(seed);
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 const handleDelete = async () => {
    try {
      //await deleteSeed(selectedSeeds.id);
      console.log("Semente excluída com sucesso!");
      // Recarregar a lista de sementes após a exclusão
      const updatedSeeds = await getSeeds();
      setSeeds(updatedSeeds);
    } catch (error) {
      console.error("Erro ao excluir sementes: ", error);
    } finally {
      handleClose();
    }
 };

 return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Sementes
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome da espécie</TableCell>
              <TableCell>Registro criado por</TableCell>
              <TableCell>Criado com o Email</TableCell>
              <TableCell>Carteira do guardião</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {seeds.map((seed) => (
              <TableRow key={seed.id}>
                <TableCell>{seed.name}</TableCell>
                <TableCell>{seed.createdByName}</TableCell>
                <TableCell>{seed.createdByEmail}</TableCell>
                <TableCell>{seed.ownerWallet}</TableCell>
                <TableCell align="right">
                 <Button color="error" variant="outlined" onClick={() => handleClickOpen(seed)}>Remover</Button>
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
            Você tem certeza que deseja remover a semente {selectedSeeds && selectedSeeds.name}?
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

export default ListSeeds;
