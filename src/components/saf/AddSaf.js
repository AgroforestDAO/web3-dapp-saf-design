import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../basic/Dropdown";
import TimePeriodStepper from "./TimePeriodStepper"; 
import { AuthProvider } from "../../context/AuthContext";
import image from "../../assets/Tempo.png";
import {
 Box,
 Button,
 Container,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TextField,
 TableRow,
 Paper,
 Typography,
 FormControl,
} from "@mui/material";

import { getCurrentUser, addSaf } from "../../services/firebaseService";

import AddSpecieModal from "../species/AddSpecieModal";

function AddSaf() {
 const navigate = useNavigate();

 const [safName, setSafName] = useState("");
 const [guardian, setGuardian] = useState("");
 const [guardianTelegramUsername, setGuardianTelegramUsername] = useState("");
 const [guardianEmail, setGuardianEmail] = useState("");
 const [mentor, setMentor] = useState("");
 const [local, setLocal] = useState("");
 const [selectedSpecies, setSelectedSpecies] = useState({});

 const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
 const successions = ["PLACENTA I", "PLACENTA II", "PIONEIRAS", "SECUNDÁRIAS", "CLÍMAX"];

 function handleSpeciesSelection(stratumName, succession, species) {
    setSelectedSpecies(prev => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [succession]: species,
      },
    }));
 }

 async function handleSave() {
    if (!validateForm()) return;

    const _user = await getCurrentUser();
    let payload = {
      safName: safName,
      uid: _user.uid,
      userName: _user.displayName,
      email: _user.email,
      guardian: guardian,
      guardianEmail: guardianEmail,
      guardianTelegram: guardianTelegramUsername,
      mentor: mentor,
      local: local,
      species: selectedSpecies,      
    };
    console.log(payload);

    await addSaf(payload);
    navigate("/home");
 }

 function validateForm() {
   let isValid = true;
   
   if (!safName.trim()) {
     isValid = false;
   }

   if (!guardian.trim()) {
     isValid = false;
   }

   if (!guardianTelegramUsername.trim()) {
     isValid = false;
   }

   if (!guardianEmail.trim()) {
     isValid = false;
   }

   if (!mentor.trim()) {
     isValid = false;
   }

   if (!local.trim()) {
     isValid = false;
   }

   return isValid;
 }

 return (
    <AuthProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <Container maxWidth="xlg">
        <Box
          component="form"
          noValidate
          sx={{ mt: 20 }}
        >
          <Typography 
            variant="h4"
            component="h1"
            gutterBottom
            style={{ fontFamily: "Roboto" }}>Novo SAF
          </Typography>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="safName"
              label="Nome do SAF"
              name="safName"
              autoFocus
              value={safName}
              onChange={(e) => setSafName(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="guardian"
              label="Nome do guardião"
              id="guardian"
              value={guardian}
              onChange={(e) => setGuardian(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="guardianEmail"
              label="Email do guardião"
              id="guardianEmail"
              value={guardianEmail}
              onChange={(e) => setGuardianEmail(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="guardianTelegram"
              label="Telegram @handle do guardião"
              id="guardianTelegram"
              value={guardianTelegramUsername}
              onChange={(e) => setGuardianTelegramUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="mentor"
              label="Mentor da sucessão"
              id="mentor"
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal" error={!validateForm()}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="local"
              label="Cidade, UF"
              placeholder="Ex.: Bias Fortes, MG"
              id="local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />
          </FormControl>
          
        </Box>
        <Box my={4}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{ fontFamily: "Roboto" }}
          >
            Planejamento
          </Typography>
          <img
            src={image}
            alt="Descrição da imagem"
            style={{ width: "100%" }}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="left"
            style={{ marginTop: "1px", marginBottom: "20px" }}
          >
            Quadrinhos de João Lotufo e César Trevelin. Fonte:{" "}
            <a href="https://issuu.com/joao13/docs/agrofloresta-em-quadrinhos-e-book" target="_blank" rel="noopener noreferrer">
              https://issuu.com/joao13/docs/agrofloresta-em-quadrinhos-e-book
            </a>
          </Typography>
          <TimePeriodStepper />
          <AddSpecieModal />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                 <TableCell style={{ fontWeight: "bold" }} align="center">Estrato/Sucessão</TableCell>
                 {successions.map((succession) => (
                    <TableCell
                      align="center"
                      style={{ fontWeight: "bold" }}
                      key={succession}
                    >
                      {succession}
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
                    {successions.map((succession) => (
                      <TableCell key={succession}>
                        <Dropdown
                          selected={
                            selectedSpecies[stratumName]
                              ? selectedSpecies[stratumName][succession] || []
                              : []
                          }
                          onSelect={(species) =>
                            handleSpeciesSelection(
                              stratumName,
                              succession,
                              species
                            )
                          }
                          stratumName={stratumName}
                          succession={succession}
                        />
                      </TableCell>
                    ))}
                 </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box my={4} display="flex" justifyContent="center">
          {!validateForm() ? (
            <Typography variant="body2" color="error">Por favor, preencha todos os campos obrigatórios.</Typography>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: "#617c59", marginBottom:"50px" }}
              onClick={handleSave}
            >
              Salvar
            </Button>
          )}
        </Box>
        </Box>
      </Container>
    </AuthProvider>
 );
}

export default AddSaf;
