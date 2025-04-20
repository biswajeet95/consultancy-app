import React from 'react';
import HeroSection from './HeroSection';
import { Box } from '@mui/material';
import Ditails from './Ditails';
import Footer from './Footer';
import OurService from './OurService';
import ContactPage from './ContactPage';
import PrivacyPolicy from './PrivacyPolicy';

const Dashboard = () => {
  return (
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
      <section id="service">
        <OurService />
      </section>
      <section id="privacypolicy">
        <PrivacyPolicy />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <section id="about">
      
      </section>
      <Footer />
    </Box>
  );
}

export default Dashboard;
