import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
 Table,
 TableBody,
 TableCell,
 Container,
 TableContainer,
 TableHead,
 TableRow,
 Paper,
 Typography,
 Card,
 CardContent,
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogContentText,
 DialogTitle
} from "@mui/material";

import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import MainPageProofs from "../proof/index";

function Details() {
 const navigate = useNavigate();
 const { id } = useParams(); // Acessa o ID do SAF a partir do parâmetro de rota
 const [safDetails, setSafDetails] = useState(null);
 const [loading, setLoading] = useState(true);
 const [open, setOpen] = useState(false);

 const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
 const timePeriods = ["Placenta I(0-6 meses)", "Placenta II(6-18 meses)", "Pioneiras(2-10 anos)", "Secundárias(10-30 anos)", "Clímax(30-100 anos)"];
 const [savedSpecies, setSavedSpecies] = useState({});

 useEffect(() => {
    const fetchSafDetails = async () => {
      try {
        const docRef = doc(db, "safs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSafDetails(docSnap.data());
          setSavedSpecies(docSnap.data().species || {});
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes do SAF:", error);
      } finally {
        setLoading(false); // Certifique-se de que o estado de carregamento seja atualizado para false após a busca
      }
    };

    fetchSafDetails();
 }, [id]); // Dependência do useEffect para re-executar ao mudar o ID

 const handleClickOpen = () => {
    setOpen(true);
 };

 const handleClose = () => {
    setOpen(false);
 };

 const handleDelete = async () => {
    try {
      const docRef = doc(db, "safs", id);
      await deleteDoc(docRef);
      console.log("SAF removido com sucesso!");
      // Redirecionar para outra página ou atualizar a lista de SAFs, conforme necessário
    } catch (error) {
      console.error("Erro ao remover o SAF:", error);
    } finally {
      handleClose();
      navigate("/home")
    }
 };

 if (loading) {
    return <div>Carregando detalhes do SAF...</div>;
 }

 return (
    <div style={{ marginTop: "90px" }}>
      <Container maxWidth="lg">
        <Typography variant="h5" component="div" style={{ fontFamily: "Roboto" }}>
          Detalhes
        </Typography>
        <Card>
          <CardContent>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            >
              {safDetails.safName}
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              style={{ fontFamily: "Roboto" }}
            >
              Guardião: {safDetails.guardianName}
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              style={{ fontFamily: "Roboto" }}
            >
              Mentor: {safDetails.mentorName}
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              style={{ fontFamily: "Roboto" }}
            >
              Tipo: {safDetails.safType}
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              style={{ fontFamily: "Roboto" }}
            >
              Local: {safDetails.local}
            </Typography>           

            <Typography
              variant="h5"
              component="h5"
              gutterBottom
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                marginTop: "33px",
              }}
            >
              Planejamento geral
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: "bold" }}>
                      ESTRATO / Sucessão
                    </TableCell>
                    {timePeriods.map((timePeriod) => (
                      <TableCell
                        align="center"
                        style={{ fontWeight: "bold" }}
                        key={timePeriod}
                      >
                        {timePeriod}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stratumNames.map((stratumName) => (
                    <TableRow key={stratumName}>
                      <TableCell align="center" style={{ fontWeight: "bold" }}>
                        {stratumName}
                      </TableCell>
                      {timePeriods.map((timePeriod) => (
                        <TableCell align="center" key={timePeriod}>
                          {savedSpecies[stratumName] &&
                          savedSpecies[stratumName][timePeriod] !== undefined
                            ? savedSpecies[stratumName][timePeriod]
                                .map((species) => species.name)
                                .join(", ")
                            : "-"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <MainPageProofs />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button variant="contained" color="error" onClick={handleClickOpen}>
                Remover
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmação</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja remover este SAF? Esta ação não pode ser desfeita.
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
}

export default Details;
