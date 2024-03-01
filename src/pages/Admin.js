// Admin.js
import React from "react";
import AddMentorModal from "../components/AddMentorModal";
import ListMentors from "../components/ListMentors";

function Admin() {
  return (
    <div> 
      <ListMentors />
      <AddMentorModal />
    </div>
  );
}

export default Admin;
