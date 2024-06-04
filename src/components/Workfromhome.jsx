import React from 'react'
import { Container, Box, Typography, Grid, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import EmailButton from './EmailButton';
const Workfromhome = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let variant4font;
    let variant6font;


    if (isMobile) {

        variant4font = '10px';
        variant6font = '12px';
    } else if (isTablet) {

        variant4font = '20px';
        variant6font = '15px';
    }
    return (
        < Container maxWidth='false' sx={{ backgroundColor: "#F5F5F5", display: "flex", flexDirection: "column", alignItems: "center", color: "#254163", p: 3 }}>

            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font }}> WHM OPENINGS</Typography>
            <Box sx={{
                color: "#254163",
                border: '1px solid #254163',
                p: 3,
                borderTopRightRadius: '80px',
                borderBottomLeftRadius: '80px',
                overflow: 'hidden',
                marginTop: '20px',
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: "white",
                marginBottom: "30px"

            }}>
                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#254163" }}>

                    <Typography variant="body1" component="p" sx={{ marginBottom: '15px', fontSize: variant6font }}>
                        Join a dynamic and experienced team of individuals with a proven track record at every company they've been a part of.
                        As a leading recruitment company, we are actively seeking dedicated, self-motivated,
                        and enthusiastic individuals to make a significant impact in the recruitment industry.
                        If you are interested, then upload your resume here. Our HR will contact you.
                    </Typography>
                    <EmailButton fontName={'Apply Now'} />

                </Grid>



            </Box>






        </Container>
    )
}

export default Workfromhome