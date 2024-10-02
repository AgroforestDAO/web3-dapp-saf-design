import React from "react";
import CardSucession from "../proof/CardSucession";
import Typography from "@mui/material/Typography";

function MainPageProofs({safId}) {
  return (
    <div style={{ marginTop: '21px'}}>
      <Typography variant="h4" component="div" style={{ fontFamily: "Roboto", fontWeight: "bold" }}>Provas de sucessão</Typography>   
      <CardSucession safId={safId} key={safId}/>     
    </div>
  );
}

export default MainPageProofs;