

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CircularProgressBar from './CircularProgressBar'; // Adjust the import path as needed

const MyApp = ({font}) => {
    return (
        <Box sx={{ height: '30vh', width: '100%', display: 'flex', backgroundColor: 'white' }}>
            <Grid container spacing={4} justifyContent="space-around" alignItems="center">
                <Grid item xs={4} md={4} sx={{ textAlign: 'center' }}>
                    <CircularProgressBar target={1000} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: font, color: "#254163", mt: 2 }}>
                        Placements
                    </Typography>
                </Grid>
                <Grid item xs={4} md={4} sx={{ textAlign: 'center' }}>
                    <CircularProgressBar target={7} />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: font, color: "#254163", mt: 2 }}>
                        YearsOf Works
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyApp;

