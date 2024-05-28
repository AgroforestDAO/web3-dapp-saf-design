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
  DialogTitle,
} from "@mui/material";

import { getSpecies, updateSpecie, deleteSpecie } from "../../services/firebaseService"; // Ajuste o caminho conforme necessário

const ListSpecies = () => {
 const [species, setSpecies] = useState([]);
 const [open, setOpen] = useState(false);
 const [selectedSpecie, setSelectedSpecie] = useState(null);
 const [data, setData] = useState([]);

 useEffect(() => {
    const fetchSpecies = async () => {
      const speciesList = await getSpecies();
      setSpecies(speciesList);
      console.log(speciesList);
    };

    fetchSpecies();
 }, []);

  const handleClickOpen = (specie) => {
    setSelectedSpecie(specie);
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

  const handleEdit = (specie, id) => {
    const updatedData = { name: "Item Atualizado" }; // Ajuste conforme necessário
    updateSpecie(specie, updatedData);
    setData(
      data.map((specie) => (specie.id === id ? { ...specie, ...updatedData } : specie))
    );
  };

  const handleDelete = async () => {
    try {
      await deleteSpecie(selectedSpecie.id);
      console.log("Espécie excluída com sucesso!");
      // Recarregar a lista de espécies após a exclusão
      const updatedSpecies = await getSpecies();
      setSpecies(updatedSpecies);
    } catch (error) {
      console.error("Erro ao excluir espécie: ", error);
    } finally {
      handleClose();
    }
 };

  return (
    <div style={{ marginTop: "100px" }}>
      <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
        Espécies
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome da espécie</TableCell>
              <TableCell>Registro criado por</TableCell>
              <TableCell>Criado com o Email</TableCell>
              <TableCell>Endereço ETH do criador</TableCell>
              <TableCell>Estrato</TableCell>
              <TableCell>Sucessão</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {species.map((specie) => (
              <TableRow key={specie.id}>
                <TableCell>{specie.name}</TableCell>
                <TableCell>{specie.createdByName}</TableCell>
                <TableCell>{specie.createdByEmail}</TableCell>
                <TableCell>{specie.creatorAddress}</TableCell>
                <TableCell>{specie.stratum}</TableCell>
                <TableCell>{specie.succession}</TableCell>
                <TableCell align="right">
                 <Button color="error" variant="outlined" onClick={() => handleClickOpen(specie)}>Remover</Button>
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
            Você tem certeza que deseja remover a espécie {selectedSpecie && selectedSpecie.name}?
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

export default ListSpecies;