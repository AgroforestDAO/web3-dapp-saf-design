import React from "react";
import CardSucession from "../proof/CardSucession";

function MainPageProofs(safId) {
  return (
    <div style={{ marginTop: '21px'}}>    
      <CardSucession safId={safId}/>     
    </div>
  );
}

export default MainPageProofs;