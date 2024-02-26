import React from 'react';
import { Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import MainSaf from "../views/MainSaf"; 

function Dashboard() {
  return (
    <>
    <Navbar />
    <div style={{ padding: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <MainSaf />      
    </div>
    </>
  );
}

export default Dashboard;
