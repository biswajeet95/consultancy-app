import React from 'react';
import { Container, Box, Grid, useMediaQuery, useTheme } from '@mui/material';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="xl" sx={{ height: isMobile ? '40vh' : '80vh' }}>
            <Box sx={{ display: "flex", height: '100%' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={6} md={6} sx={{ textAlign: 'center' }}>
                        left side
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ textAlign: 'center' }}>
                        <Box
                            component="img"
                            src="./image/wallpaper.png"
                            alt="Wallpaper"
                            sx={{
                                width: '100%',
                                height: '80vh',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                borderTopRightRadius:"30%"
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default HeroSection;






