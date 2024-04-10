import React from "react";
import { Grid } from "@mui/material";
import AddMentorModal from "../components/mentor/AddMentorModal";

import ListMentors from "../components/mentor/ListMentors";
import ListAllSafs from "../components/saf/ListAllSafs";
import ListSpecies from "../components/species/ListSpecies";
import AddSpecieModal from "../components/species/AddSpecieModal";

function Admin() {
 return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={10}>
        <ListAllSafs />
      </Grid>       
      <Grid item xs={12} sm={4} md={10}>
        <ListMentors />
        <AddMentorModal />
      </Grid>      
      <Grid item xs={12} sm={4} md={10}>
        <ListSpecies /> 
        <AddSpecieModal />              
      </Grid>
    </Grid>
 );
}

export default Admin;
