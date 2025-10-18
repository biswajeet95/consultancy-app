

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import Navbar from '../components/Navbar';

const Service = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    let variantFont = '15px';
    let variant6font
    if (isMobile) {
        variantFont = '12px';
        variant6font = '12px';
    } else if (isTablet) {
        variantFont = '15px';
        variant6font = '10px';
    }

    return (
      <>
       <Navbar />
       <Box
            sx={{
                width: '100%',
                textAlign: 'center',
                pt: 5, pb: 4,
                backgroundColor: "#F5F5F5",
                color: "#254163",
                transition: 'opacity 1s, transform 1s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font, mb: 3 , mt:4 }}>
                OUR SERVICE
            </Typography>
            <Grid container sx={{ p: 1, justifyContent: 'center' }}>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                        Our Solutions
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variantFont }}>
                        At IQra Consultancy, we specialize in crafting modern, responsive, and high-performance websites tailored to meet your unique business goals.
                        Whether you're a startup looking for your first online presence, a growing business in need of a fresh redesign,
                        or an entrepreneur with a bold idea — we’re here to bring your vision to life.We offer end-to-end web development solutions, including custom website design, WordPress development,
                        e-commerce sites, landing pages, and business portfolios.


                    </Typography>
                </Grid>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                        Our Facilities
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variantFont }}>
                        Every site we build is mobile-friendly, SEO-optimized, and designed for smooth user experience.
                        With a strong focus on quality, transparency, and timely delivery, our goal is to help you stand out online and convert visitors into loyal customers.
                        Let’s build something amazing together!

                    </Typography>
                </Grid>
            </Grid>
        </Box>
      </>
       
    );
};

const gridItemStyle = (fontSize) => ({
    textAlign: 'left',
    borderTopRightRadius: '80px',
    borderBottomLeftRadius: '80px',
    border: '1px solid #254163',
    backgroundColor: "white",
    overflow: 'hidden',
    margin: '8px',
    padding: '24px',
    fontSize: fontSize,
    transition: 'opacity 1s, transform 1s',
    opacity: 1,
    transform: 'translateY(0)'
});

export default Service;

