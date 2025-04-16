
import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, Grid, Typography, useMediaQuery, useTheme, Card } from '@mui/material';
import CountUp from './Countup';
import EmailButton from './EmailButton';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const [textVisible, setTextVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);

    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTextVisible(true);
                    textObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setImageVisible(true);
                    imageObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (textRef.current) textObserver.observe(textRef.current);
        if (imageRef.current) imageObserver.observe(imageRef.current);

        return () => {
            if (textRef.current) textObserver.unobserve(textRef.current);
            if (imageRef.current) imageObserver.unobserve(imageRef.current);
        };
    }, []);

    let containerHeight;
    let imageHeight;
    let imageWidth;
    let variant4font;
    let variant6font;
    let heropagepaddingLeft;

    if (isMobile) {
        containerHeight = '40vh';
        imageHeight = '50vh';
        imageWidth = '100%';
        variant4font = '10px';
        variant6font = '8px';
    } else if (isTablet) {
        containerHeight = '60vh';
        imageHeight = '40vh';
        imageWidth = '80%';
        variant4font = '20px';
        variant6font = '15px';
    } else if (isDesktop) {
        containerHeight = '80vh';
        imageHeight = '70vh';
        imageWidth = '70%';
     heropagepaddingLeft = "5%";

    }

    return (
        <Container maxWidth="xl" sx={{ height: containerHeight, mb:3 }}>
            <Box sx={{ display: "flex", height: '100%', padding: '1rem' }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ paddingLeft: heropagepaddingLeft }}>
                    <Grid
                        item xs={6} md={6}
                        sx={{
                            textAlign: 'left',
                            transition: 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out',
                            opacity: textVisible ? 1 : 0,
                            transform: textVisible ? 'translateX(0)' : 'translateX(-100px)',

                        }}
                        ref={textRef}
                    >
                        <Typography variant="h4" sx={{ fontSize: variant4font, fontWeight: '800', color: "#254163" }} gutterBottom>Build. Grow. Succeed. Professional Website Development Services</Typography>
                        <Typography variant="body1" sx={{ fontSize: variant6font, fontWeight: 'bold', color: "blue", mb: 2 }} gutterBottom>Transforming Lives & Transforming Organizations</Typography>
                      
                        <EmailButton fontName={'Contact'} font={variant6font} />



                    </Grid>
                    <Grid
                        item xs={6} md={6}
                        sx={{
                            textAlign: 'center',
                            transition: 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out',
                            opacity: imageVisible ? 1 : 0,
                            transform: imageVisible ? 'translateX(0)' : 'translateX(100px)',
                        }}
                        ref={imageRef}
                    >
                        <Box
                            sx={{
                                width: imageWidth,
                                height: imageHeight,
                                overflow: 'hidden',
                                borderTopRightRadius: '60px',
                                borderBottomLeftRadius: '60px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mx: 'auto',
                               
                            }}
                        >
                            <Box
                                component="img"
                                src="./image/wallpaper.png"
                                alt="IQra Consultancy"
                                sx={{
                                    width: '100%',
                                    //height: '100%',
                                    objectFit: 'cover',
                                    borderTopRightRadius: '60px',
                                    borderBottomLeftRadius: '60px',
                                    border: '1px solid #254163'
                                   
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default HeroSection;

