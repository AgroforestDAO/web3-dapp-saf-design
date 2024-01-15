// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import SafPlaning from "../components/SafPlaning";


function Home() {
  return (
    <div className="App">
      <Navbar />
      <h3>Planejamento de SAF</h3>
      <SafPlaning />      
    </div>
  );
}

export default Home;
