// AllSafs.js
import React from "react";
import ListAllSafs from "../components/saf/ListAllSafs";
import TutorialStepper from '../components/tutorial/TutorialStepper';


function AllSafs() {
  return (
    <div className="App"> 
      <TutorialStepper />   
      <ListAllSafs />     
    </div>
  );
}

export default AllSafs;
