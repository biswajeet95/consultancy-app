
import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import InputBox from './InputBox';

const StyledGrid = styled(Grid)(({ theme, gridheight, variant4font }) => ({
    height: gridheight,
    textAlign: 'left',
    borderTopRightRadius: '80px',
    borderBottomLeftRadius: '80px',
    border: '1px solid #254163',
    backgroundColor: "white",
    overflow: 'hidden',
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
                <Grid container sx={{ p: 1, justifyContent: 'center' }}>
                    <StyledGrid item xs={11} md={5} gridheight={gridheight} variant4font={variant4font}>
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont }}>IQra Consultancy</Typography>
                            <Typography variant="body2" component="p">IQra Consultancy, 48, Sector 5, HSR Layout, Bengaluru, Karnataka 560102</Typography>
                        </div>
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont }}>Phone Number:</Typography>
                            <Typography variant="body2" component="p">70759 10637, 9676311306</Typography>
                        </div>
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont }}>Email:</Typography>
                            <Typography variant="body2" component="p">admin@iqraconsultancy.in, arbazarmaan37@gmail.com</Typography>
                        </div>
                        <div>
                            <Typography variant="h3" sx={{ fontWeight: '800', fontSize: variantFont }}>For Manpower Supply</Typography>
                            <Typography variant="body2" component="p">iqraconsultancy.in</Typography>
                        </div>
                    </StyledGrid>
                    <StyledGrid item xs={11} md={5} gridheight={gridheight} variant4font={variant4font}>
                        <InputBox />
                    </StyledGrid>
                </Grid>
            </Box></>);
}; export default ContactPage;
