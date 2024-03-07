// Admin.js
import React from "react";
import AddMentorModal from "../components/mentor/AddMentorModal";
import ListMentors from "../components/mentor/ListMentors";
import ListAllSafs from "../components/saf/ListAllSafs";


function Admin() {
  return (
    <div> 
      <ListMentors />
      <AddMentorModal />
      <ListAllSafs />
    </div>
  );
}

export default Admin;
