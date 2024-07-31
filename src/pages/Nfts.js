import React from "react";
import CardNFT from "../components/nft/CardNFT";
import Typography from "@mui/material/Typography";

function Nfts({nftIds}) {
  return (
    <div style={{ marginTop: '21px'}}>
      <Typography variant="h4" component="div" style={{ fontFamily: "Roboto", fontWeight: "bold" }}>NFT´s AgroforestDAO</Typography>   
      <CardNFT nftIds={nftIds}/>     
    </div>
  );
}

export default Nfts;