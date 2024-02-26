// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import SafPlaning from "../components/saf/SafPlaning";


function Home() {
  return (
    <div className="App">
      <Navbar />      
      
      <SafPlaning />      
    </div>
  );
}

export default Home;
