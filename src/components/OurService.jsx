
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

const OurService = () => {
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
        <Box 
            sx={{ 
                width: '100%', 
                textAlign: 'center', 
                pt: 4,pb:4,
                backgroundColor: "#F5F5F5", 
                color: "#254163",
                transition: 'opacity 1s, transform 1s',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variant6font, mb: 3 }}>
                OUR SERVICE
            </Typography>
            <Grid container sx={{ p: 1, justifyContent: 'center' }}>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                        Permanent Recruitment
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variantFont }}>
                        We meticulously identify the perfect candidates for permanent recruitment—a process that demands time,
                        skill, and extensive experience. What does this translate to for hiring professionals? Essentially,
                        it means you'll be partnered with a seasoned recruitment specialist who possesses a wealth of talent resources,
                        streamlining your process, and connecting you with the most invaluable asset of all—exceptional individuals.
                    </Typography>
                </Grid>
                <Grid item xs={11} md={5} sx={gridItemStyle(variantFont)}>
                    <Typography variant="h4" sx={{ fontWeight: '800', fontSize: variantFont, mb: 1 }}>
                        Recruitment Process Outsourcing
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: variantFont }}>
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

export default OurService;
