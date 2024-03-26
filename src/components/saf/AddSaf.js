import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../basic/Dropdown";
import TimePeriodStepper from "./TimePeriodStepper"; 
import { AuthProvider } from "../../context/AuthContext";
import image from "../../assets/Tempo.jpeg";
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
} from "@mui/material";

import { getCurrentUser, addSaf } from "../../services/firebaseService";
import AddSpecieModal from "../species/AddSpecieModal";

function AddSaf() {
 const navigate = useNavigate();

 const [safName, setSafName] = useState("");
 const [guardian, setGuardian] = useState("");
 const [ guardianTelegramUsername, setGuardianTelegramUsername ] = useState("");
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
    const _user = await getCurrentUser();
    let payload = {
      safName: safName,
      uid: _user.uid,
      userName: _user.displayName,
      email: _user.email,
      guardian: guardian,
      guardianTelegram: guardianTelegramUsername,
      mentor: mentor,
      local: local,
      species: selectedSpecies,      
    };
    console.log(payload);

    await addSaf(payload);
    navigate("/home");
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
            onChange={(e) => setSafName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="guardian"
            label="Nome do guardião"
            id="guardian"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="guardianTelegram"
            label="Telegram @handle do guardião"
            id="guardianTelegram"
            value={guardianTelegramUsername}
            onChange={(e) => setGuardianTelegramUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="mentor"
            label="Mentor da sucessão"
            id="mentor"
            value={mentor}
            onChange={(e) => setMentor(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="local"
            label="Local"
            id="local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          />
          
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
            <Button
              variant="contained"
              style={{ backgroundColor: "#617c59", marginBottom:"50px" }}
              onClick={handleSave}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Container>
    </AuthProvider>
 );
}

export default AddSaf;
