
import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import EmailButton from './EmailButton';
const StyledGrid = styled(Grid)(({ theme, gridheight, variant4font }) => ({
    height: gridheight,
    textAlign: 'left',
    margin: theme.spacing(1),
    padding: theme.spacing(3),
    transition: 'all 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
    '& h4': {
        fontWeight: 800, fontSize: variant4font, marginBottom: theme.spacing(1),
        transition: 'font-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
    },
    '& p': {
        marginBottom: theme.spacing(2), fontSize: '12px',
        transition: 'font-size 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)'
    }
}));
const ContactPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    let variant4font;
    let variant6font;
    let gridheight;
    let variantFont = '15px';
    if (isMobile) {
        variantFont = '12px';
        gridheight = '70%';
        variant4font = '8px';
        variant6font = '12px';
    } else if (isTablet) {
        gridheight = '80%';
        variant4font = '10px';
        variant6font = '10px';
        variantFont = '15px';
    } else if (isDesktop) {
        variant4font = '15px';
    } return (
        <>
            <Box sx={{ width: '100%', textAlign: 'center', pt: 4, pb: 4, color: "#254163" }}>
                <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font, mb: 3 }}>CONTACT US</Typography>
                <Grid container >
                    <StyledGrid item xs={11} md={5} gridheight={gridheight} variant4font={variant4font}>
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont, mb:5 }}>IQra Consultancy</Typography>

                        </div>

                        <div>

                            <EmailButton fontName={'Contact'} font={variant6font} />
                        </div>
                    </StyledGrid>
              
                </Grid>
            </Box></>);
}; export default ContactPage;
