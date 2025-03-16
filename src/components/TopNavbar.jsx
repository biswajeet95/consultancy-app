import { AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { X as XIcon, Instagram as InstagramIcon, Facebook as FacebookIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar
            position='sticky'
            style={{
                backgroundColor: "#97A4E3",
                boxShadow: 'none',
                color: "white"
            }}
        >
            <Toolbar variant="dense" sx={{ justifyContent: 'space-between', minHeight: '30px !important', padding: '3px 6px' }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }} variant={isMobile ? 'body2' : 'body1'}>
                      
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }} variant={isMobile ? 'body2' : 'body1'}>
                       
                    </Typography>
                </Box>


                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <XIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <InstagramIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="https://www.facebook.com/arbaz.armaan.3/">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <FacebookIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                    <a href="#">
                        <IconButton style={{ color: 'white', padding: '4px' }}>
                            <LinkedInIcon style={{ fontSize: '15px' }} />
                        </IconButton>
                    </a>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
