// Home.js
import React from "react";
import Navbar from "../components/Navbar";
import AddSaf from "../components/saf/AddSaf";


function Home() {
  return (
    <div className="App">
      <Navbar />      
      
      <AddSaf />      
    </div>
  );
}

export default Home;
