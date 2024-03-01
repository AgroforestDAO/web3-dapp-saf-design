// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import ListSafs from "../components/saf/ListSafs";

function Home() {
  return (
    <div className="App">
      <Navbar />      
      
      <ListSafs />  
    </div>
  );
}

export default Home;
