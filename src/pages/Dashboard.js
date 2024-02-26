import React from 'react';
import { Typography } from '@mui/material';
import Navbar from "../components/Navbar";
import MainSaf from "../views/MainSaf"; 
//import SafDetails from '../components/saf/Details';

function Dashboard() {
  return (
    <>
    <Navbar />
    <div style={{ padding: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <MainSaf />
      {/* <SafDetails />       */}
    </div>
    </>
  );
}

export default Dashboard;
