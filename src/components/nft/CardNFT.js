import * as React from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Web3 from 'web3';
import axios from 'axios';

// Substitua pelos valores reais do seu contrato
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nameNFT",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbolNFT",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "NotOperator",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Mint",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tokenUri",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tokenUri",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "mintOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "operator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "tokenUri",
				"type": "string"
			}
		],
		"name": "setTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOperator",
				"type": "address"
			}
		],
		"name": "transferOperator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]; // ABI do contrato
const contractAddress = '0x1Ddd492B604304068D7f0CED933CbeaC7E70b04d'; // Endereço do contrato


// Função ajustada para buscar detalhes dos NFTs usando um gateway IPFS público
async function fetchNFTDetails(nftIds) {
	const web3 = new Web3('https://celo-mainnet.infura.io/v3/1482e2dc685f45c485cb14606f87ff35');
	const nftContract = new web3.eth.Contract(contractABI, contractAddress);
  
	const detailsPromises = nftIds.map(async id => {
	  const ipfsURL = await nftContract.methods.tokenURI(id).call();
	  // Substitua 'ipfs.io' pelo domínio de qualquer gateway IPFS público que você preferir usar
	  const gatewayURL = ipfsURL.replace('ipfs://', 'https://ipfs.io/ipfs/');
	  const metadataResponse = await axios.get(gatewayURL);
	  // Atualize a URL da imagem para usar o gateway IPFS público
	  const imageUrl = metadataResponse.data.image.replace('ipfs://', 'https://ipfs.io/ipfs/');
	  return { ...metadataResponse.data, image: imageUrl }; // Retorna o objeto JSON com os detalhes do NFT e a URL da imagem atualizada
	});
  
	return Promise.all(detailsPromises);
  }


export default function CardNFT({ nftIds = [0,1,2,3,4,5] }) {  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nftsData = await fetchNFTDetails(nftIds);
      
      setData(nftsData);
    }
   
    fetchData();
	// eslint-disable-next-line
  }, []);
  

  return (
    <Grid container spacing={1}>
       {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
         <Card sx={{ maxWidth: 600, marginBottom: 2 }}>
           <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                 NFT
               </Avatar>
             }
             action={
               <IconButton aria-label="settings">
                 <MoreVertIcon />
               </IconButton>
             }
             title={item.safName}
             subheader={item.nestId}
           />
           <CardMedia
				component="img"
				image={item.image}
				alt={item.title}
				sx={{
					objectFit: 'contain', // Garante que a imagem mantenha seu aspect ratio e seja redimensionada para caber
					width: '100%', // Faz com que a imagem ocupe 100% da largura disponível
					height: 'auto', // Define a altura automaticamente para manter o aspect ratio
				}}
			/>
           <CardContent>
             <Typography variant="body2" color="text.primary" style={{ fontFamily: "Roboto" }}>
               Espécies:
             </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Roboto", marginBottom:"15px" }}>
               {item.species}
             </Typography>
             <Typography variant="body2" color="text.primary" style={{ fontFamily: "Roboto" }}>
               Origem das sementes: 
             </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Roboto", marginBottom:"15px" }}>
               {item.seedProviders}
             </Typography>
             <Typography variant="body2" color="text.primary" style={{ fontFamily: "Roboto" }}>
               Geolocalização 
             </Typography>
             <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Roboto", marginBottom:"15px" }}>
               {item.latLng}
             </Typography>
           </CardContent>          
         </Card>
         </Grid>
       ))}
    </Grid>
  );
}
