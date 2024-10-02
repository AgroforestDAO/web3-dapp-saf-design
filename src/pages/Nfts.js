import React from "react";
import CardNFT from "../components/nft/CardNFT";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import safOverviewImage from '../assets/SafOverview.jpg';

function Nfts({nftIds}) {
  return (
    <div style={{ marginTop: '21px'}}>
      <Typography variant="h4" component="div" style={{ fontFamily: "Roboto", fontWeight: "bold", marginTop: '70px' }}>NFT´s Ninhos da Redenção</Typography>
      <Typography variant="h4" component="div" style={{ fontFamily: "Roboto" }}>CELO Network</Typography>
      
      {/* Link para o explorador de blocos */}
      <a href="https://celoscan.io/token/0x1Ddd492B604304068D7f0CED933CbeaC7E70b04d" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007bff', fontSize: '16px', marginTop: '10px' }}>
            Ver no Explorador de Blocos
        </a> 

      {/* Cartão com a imagem */}
      <Card sx={{ maxWidth: 1600, margin: '20px auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
        <CardMedia
          component="img"          
          image={safOverviewImage}
          alt="AgroforestDAO Overview"
          sx={{
            objectFit: 'contain', // Garante que a imagem mantenha seu aspect ratio e seja redimensionada para caber
            width: '100%', // Faz com que a imagem ocupe 100% da largura disponível
            height: 'auto', // Define a altura automaticamente para manter o aspect ratio
          }}
        />
      </Card>

      <CardNFT nftIds={nftIds}/>

          
    </div>
  );
}

export default Nfts;