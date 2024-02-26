import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../basic/Dropdown";
import TimePeriodStepper from "./TimePeriodStepper"; 
import { AppProvider } from "../../context/AppContext";
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

function AddSaf() {
  const navigate = useNavigate();

  const [safName, setSafName] = useState("");
  const [guardian, setGuardian] = useState("");
  const [mentor, setMentor] = useState("");
  const [local, setLocal] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState({});

  const stratumNames = ["EMERGENTE", "ALTO", "MÉDIO", "BAIXO"];
  const timePeriods = ["0-6 meses", "6-18 meses", "2-10 anos", "10-30 anos"];

  function handleSpeciesSelection(stratumName, timePeriod, species) {
    setSelectedSpecies((prev) => ({
      ...prev,
      [stratumName]: {
        ...prev[stratumName],
        [timePeriod]: species,
      },
    }));
  }

  async function handleSave() {
    const _user = await getCurrentUser();
    let payload = {
      uid: _user.uid,
      userName: _user.displayName,
      safName: safName,
      guardian: guardian,
      mentor: mentor,
      local: local,
      species: selectedSpecies,      
    };
    console.log(payload);
    setSelectedSpecies(selectedSpecies);

    await addSaf(payload);
    navigate("/dashboard");
  }

  return (
    <AppProvider value={{ selectedSpecies, setSelectedSpecies }}>
      <Container maxWidth="lg">
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
            label="Guardião"
            id="guardian"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
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
          {/* Inclua o componente Stepper aqui */}
          <img
            src={image}
            alt="Descrição da imagem"
            style={{ width: "100%" }}
          />
          <TimePeriodStepper />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }} align="center">Estrato/Sucessão</TableCell>
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
                      <TableCell key={timePeriod}>
                        <Dropdown
                          selected={
                            selectedSpecies[stratumName]
                              ? selectedSpecies[stratumName][timePeriod]
                              : []
                          }
                          onSelect={(species) =>
                            handleSpeciesSelection(
                              stratumName,
                              timePeriod,
                              species
                            )
                          }
                          stratumName={stratumName}
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
              style={{ backgroundColor: "#617c59" }}
              onClick={handleSave}
            >
              Salvar
            </Button>
          </Box>
        </Box>
      </Container>
    </AppProvider>
  );
}

export default AddSaf;
