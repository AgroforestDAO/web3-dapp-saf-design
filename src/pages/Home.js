// Home.js
import React from "react";
import ListSafs from "../components/saf/ListSafs";
import TutorialStepper from '../components/tutorial/TutorialStepper';


function Home() {
  return (
    <div className="App"> 
      <TutorialStepper />   
      <ListSafs />     
    </div>
  );
}

export default Home;
