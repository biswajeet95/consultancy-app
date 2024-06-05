import React from 'react';
import HeroSection from './HeroSection';
import { Box } from '@mui/material';
import Ditails from './Ditails';
import JobSection from './JobSection';
import Workfromhome from './Workfromhome';
import Footer from './Footer';
import OurService from './OurService';
import ContactPage from './ContactPage';

const Dashboard = () => {
  return (
    <Box component="main">
      <section id="home">
        <HeroSection />
      </section>
      <section id="aboutus">
        <Ditails />
      </section>
      <section id="jobs">
        <JobSection />
      </section>
      <Workfromhome />
      <section id="service">
        <OurService />
      </section>
      <section id="contact">
        <ContactPage />
      </section>
      <Footer />
    </Box>
  );
}

export default Dashboard;
