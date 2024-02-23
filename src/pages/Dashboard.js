import React from 'react';
import Navbar from "../components/Navbar";
import { Typography, Grid, Card, CardContent } from '@mui/material';

function Dashboard() {
  return (
    <>
    <Navbar />
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Estatística 1</Typography>
              <Typography variant="subtitle1">Valor da estatística 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Estatística 2</Typography>
              <Typography variant="subtitle1">Valor da estatística 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Estatística 3</Typography>
              <Typography variant="subtitle1">Valor da estatística 3</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Estatística 4</Typography>
              <Typography variant="subtitle1">Valor da estatística 4</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default Dashboard;
