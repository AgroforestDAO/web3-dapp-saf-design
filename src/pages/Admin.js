// Admin.js
import React from "react";
import AddMentorModal from "../components/mentor/AddMentorModal";
import ListMentors from "../components/mentor/ListMentors";
import ListAllSafs from "../components/saf/ListAllSafs";
import ListSpecies from "../components/species/ListSpecies";



function Admin() {
  return (
    <div> 
      <ListMentors />
      <AddMentorModal />
      <ListAllSafs />
      <ListSpecies />
    </div>
  );
}

export default Admin;
