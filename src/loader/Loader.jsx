// Loader.js
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';



const Loader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <React.Fragment>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#254163" />
                            <stop offset="100%" stopColor='#AD88C6' />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress size={80} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
            </React.Fragment>


        </Box>





    );
};

export default Loader;
