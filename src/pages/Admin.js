// Admin.js
import React from "react";
import AddMentorModal from "../components/mentor/AddMentorModal";
import ListMentors from "../components/mentor/ListMentors";

function Admin() {
  return (
    <div> 
      <ListMentors />
      <AddMentorModal />
    </div>
  );
}

export default Admin;
