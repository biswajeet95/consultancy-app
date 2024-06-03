
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Your existing Navbar component
import Loader from './loader/Loader';
import { Box } from '@mui/material';
import './App.css';
import Dashboard from './components/Dashboard';
import Slidenavbar from './components/Slidenavbar';

const MainComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>

          <Navbar />
          <Box sx={{ mt: '7em', px: '16px' }}> {/* Margin top to set the distance */}
            <Dashboard />
          </Box>


          <Slidenavbar />

        </>
      )}
    </div>
  );
};

export default MainComponent;
