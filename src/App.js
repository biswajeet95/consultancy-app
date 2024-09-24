
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Your existing Navbar component
import Loader from './loader/Loader';
import { Box } from '@mui/material';
import './App.css';
import Dashboard from './components/Dashboard';
import Slidenavbar from './components/Slidenavbar';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
        <div>
          <h1>ERROR 404</h1>
        </div>
          {/* <Navbar />
          <Box sx={{ mt: '5.5em' }}> 
            <Dashboard />
          </Box>
          <Slidenavbar /> */}


        </>
      )}
    </div>
  );
};

export default App;

