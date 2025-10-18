import React from 'react';
import HeroSection from './HeroSection';
import { Box } from '@mui/material';
import Ditails from './Ditails';
import Footer from './Footer';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box component="main"
        sx={{
          overflowX: 'hidden',
          width: '100%',
          boxSizing: 'border-box'
        }}>
        <section id="home">
          <HeroSection />
        </section>
        <section id="blogs">
          <Ditails />
        </section>
        <Footer />
      </Box>

    </>

  );
}

export default Dashboard;
