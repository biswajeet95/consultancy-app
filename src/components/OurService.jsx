import React from 'react'
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';


const OurService = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


    let variant4font;
    let variant6font;
    let gridheight;


    if (isMobile) {

        variant4font = '12px';
        variant6font = '12px';
    } else if (isTablet) {

        variant4font = '15px';
        variant6font = '15px';
    } else if (isDesktop) {
        variant4font = '15px'

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
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}> Permanent Recruitment</Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variant6font }}>
                        We meticulously identify the perfect candidates for permanent recruitment—a process that demands time,
                        skill, and extensive experience. What does this translate to for hiring professionals? Essentially,
                        it means you'll be partnered with a seasoned recruitment specialist who possesses a wealth of talent resources,
                        streamlining your process, and connecting you with the most invaluable asset of all—exceptional individuals.
                    </Typography>

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
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant4font, mb: 1 }}> Recruitment Process Outsourcing</Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variant6font }}>
                        Acquiring talent in the present landscape poses greater challenges than it did just a few years ago.
                        Recruitment consultants are now required to exhibit heightened efficiency, accountability,
                        and flexibility to meet real-time business demands. When making hiring decisions,
                        organizations must take into account various facets of operations, finance, business,
                        and HR. Clients have the flexibility to choose from different models based on their specific needs,
                        including the project model, skill model, turnkey model, hybrid model, and total solution model.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default OurService