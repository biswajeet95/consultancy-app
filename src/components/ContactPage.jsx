import React from 'react'
import { Container, Box, Typography, Grid, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import InputBox from './InputBox';

const ContactPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


    let variant4font;
    let variant6font;
    let gridheight;


    if (isMobile) {
        gridheight = '70%';
        variant4font = '8px';
        variant6font = '12px';
    } else if (isTablet) {
        gridheight = '80%'
        variant4font = '10px';
        variant6font = '10px';
    } else if (isDesktop) {
        variant4font = '12px'

    }


    return (

        <Box sx={{ width: '100%', textAlign: 'center', pt: 2, backgroundColor: "#F5F5F5", color: "#254163" }}>
            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font, mb: 3 }}> OUR SERVICE</Typography>
            <Grid container sx={{ p: 1, justifyContent: 'center' }}>
                <Grid item xs={11} md={5}
                    sx={{
                        height: gridheight,
                        textAlign: 'left',
                        borderTopRightRadius: '80px',
                        borderBottomLeftRadius: '80px',
                        border: '1px solid #254163',
                        backgroundColor: "white",
                        overflow: 'hidden',
                        m: 1,
                        p: 3,

                    }} >
                    <div>
                        <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}>IQra Consultancy</Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: '10px' }}>
                            IQra Consultancy, 48, Sector 5, HSR Layout, Bengaluru, Karnataka 560102
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}> Phone Number:</Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: '10px' }}>
                            70759 10637, 70759 10637

                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}>Email: </Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: '10px' }}>
                            arbazarmaan37@gmail.com, arbazarmaan37@gmail.com

                        </Typography>
                    </div>


                    <div>
                        <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}> For Manpower Supply</Typography>
                        <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: '10px' }}>
                            arbazarmaan37@gmail.com, arbazarmaan37@gmail.com

                        </Typography>
                    </div>


                </Grid>
                <Grid item xs={11} md={5}
                    sx={{
                        height: gridheight,
                        textAlign: 'left',
                        borderTopRightRadius: '80px',
                        borderBottomLeftRadius: '80px',
                        border: '1px solid #254163',
                        backgroundColor: "white",
                        overflow: 'hidden',
                        p: 3,
                        m: 1,

                    }}
                >
                    <InputBox />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ContactPage